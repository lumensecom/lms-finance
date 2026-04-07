import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  Download,
  RefreshCw,
  Trash2,
  CheckCircle,
  Clock,
  AlertCircle,
  Loader,
  ArrowLeft,
} from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Job {
  id: string;
  filename: string;
  status: string;
  total_nits: number;
  processed_nits: number;
  nits_with_results: number;
  error_count: number;
  created_at: string;
  updated_at: string;
  completed_at?: string;
}

interface ProcessingDashboardProps {
  jobId: string;
  nitsCount: number;
  onBack: () => void;
}

export function ProcessingDashboard({
  jobId,
  nitsCount,
  onBack,
}: ProcessingDashboardProps) {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchJob();
    const interval = setInterval(() => {
      fetchJob();
    }, 2000);

    return () => clearInterval(interval);
  }, [jobId]);

  async function fetchJob() {
    try {
      const { data, error } = await supabase
        .from('processing_jobs')
        .select('*')
        .eq('id', jobId)
        .maybeSingle();

      if (error) throw error;
      if (data) {
        setJob(data);
      }
    } catch (err) {
      console.error('Error fetching job:', err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDownloadExcel() {
    setDownloading(true);
    try {
      const { data, error } = await supabase
        .from('provider_results')
        .select('*')
        .eq('job_id', jobId);

      if (error) throw error;

      const csvContent = [
        [
          'NIT',
          'Tipo Documento',
          'Identificación',
          'DV',
          'Primer Apellido',
          'Segundo Apellido',
          'Primer Nombre',
          'Otros Nombres',
          'Razón Social',
          'Dirección',
          'Código Depto',
          'Código Mcp',
          'País',
          'Fuente',
        ],
        ...data.map((r: any) => [
          r.nit,
          r.tipo_documento,
          r.numero_identificacion,
          r.digito_verificacion,
          r.primer_apellido,
          r.segundo_apellido,
          r.primer_nombre,
          r.otros_nombres,
          r.razon_social,
          r.direccion,
          r.codigo_depto,
          r.codigo_mcp,
          r.pais_residencia,
          r.fuente,
        ]),
      ];

      const csvText = csvContent
        .map((row) => row.map((cell) => `"${cell || ''}"`).join(','))
        .join('\n');

      const blob = new Blob([csvText], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `proveedores_${jobId.slice(0, 8)}_${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error downloading:', err);
    } finally {
      setDownloading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="w-8 h-8 text-blue-500 animate-spin" />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <p className="text-gray-600">No se encontró el trabajo</p>
      </div>
    );
  }

  const progress = job.total_nits > 0 ? (job.processed_nits / job.total_nits) * 100 : 0;
  const isCompleted = job.status === 'completed';
  const isProcessing = job.status === 'processing';

  const getStatusIcon = () => {
    if (isCompleted) return <CheckCircle className="w-6 h-6 text-green-600" />;
    if (isProcessing) return <Loader className="w-6 h-6 text-blue-500 animate-spin" />;
    return <Clock className="w-6 h-6 text-yellow-500" />;
  };

  const getStatusColor = () => {
    if (isCompleted) return 'bg-green-50 border-green-200';
    if (isProcessing) return 'bg-blue-50 border-blue-200';
    return 'bg-yellow-50 border-yellow-200';
  };

  const getStatusText = () => {
    if (isCompleted) return 'Completado';
    if (isProcessing) return 'Procesando...';
    return 'Pendiente';
  };

  return (
    <div className="w-full">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver
      </button>

      <div className="space-y-6">
        <div
          className={`border rounded-xl p-6 ${getStatusColor()}`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {getStatusIcon()}
              <div>
                <p className="text-sm font-medium text-gray-600">Estado</p>
                <p className="text-lg font-semibold text-gray-900">
                  {getStatusText()}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">{job.filename}</p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(job.created_at).toLocaleString('es-CO')}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Total NITs</p>
            <p className="text-2xl font-bold text-gray-900">{job.total_nits}</p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Procesados</p>
            <p className="text-2xl font-bold text-blue-600">{job.processed_nits}</p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Con Resultados</p>
            <p className="text-2xl font-bold text-green-600">
              {job.nits_with_results}
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Errores</p>
            <p className="text-2xl font-bold text-red-600">{job.error_count}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-gray-700">Progreso</p>
            <p className="text-sm font-semibold text-gray-900">
              {Math.round(progress)}%
            </p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {job.processed_nits} de {job.total_nits} procesados
          </p>
        </div>

        {isCompleted && (
          <div className="flex gap-3">
            <button
              onClick={handleDownloadExcel}
              disabled={downloading}
              className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {downloading ? (
                <Loader className="w-5 h-5 animate-spin" />
              ) : (
                <Download className="w-5 h-5" />
              )}
              {downloading ? 'Descargando...' : 'Descargar Resultados (CSV)'}
            </button>

            <button
              onClick={fetchJob}
              className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-3 px-4 rounded-lg transition"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        )}

        {isProcessing && (
          <div className="flex gap-3">
            <button
              onClick={fetchJob}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
            >
              <RefreshCw className="w-5 h-5" />
              Actualizar Estado
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
