import React, { useRef, useState } from 'react';
import { Upload, FileText, AlertCircle, CheckCircle, Loader } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FileUploadProps {
  onUploadComplete: (jobId: string, nits: string[]) => void;
}

export function FileUpload({ onUploadComplete }: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState('');

  function extractNITsFromCSV(text: string): string[] {
    const lines = text.split('\n');
    const nits: string[] = [];
    const nitRegex = /^\d{5,15}(-\d)?$/;

    for (const line of lines) {
      const value = line.trim().split(',')[0].trim();
      if (nitRegex.test(value) && !nits.includes(value)) {
        nits.push(value);
      }
    }
    return nits;
  }

  async function processFile(file: File) {
    if (file.size > 5 * 1024 * 1024) {
      setError('El archivo no puede superar 5MB');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const text = await file.text();
      const nits = extractNITsFromCSV(text);

      if (nits.length === 0) {
        setError('No se encontraron NITs válidos en el archivo');
        setLoading(false);
        return;
      }

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuario no autenticado');

      const { data: job, error: jobError } = await supabase
        .from('processing_jobs')
        .insert({
          user_id: user.id,
          filename: file.name,
          status: 'pending',
          total_nits: nits.length,
          file_data: { nits },
        })
        .select('id')
        .maybeSingle();

      if (jobError) throw jobError;
      if (!job) throw new Error('No se pudo crear el trabajo');

      setFileName(file.name);
      onUploadComplete(job.id, nits);
    } catch (err: any) {
      setError(err.message || 'Error procesando el archivo');
    } finally {
      setLoading(false);
    }
  }

  function handleDrag(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files?.[0]) {
      processFile(files[0]);
    }
  }

  return (
    <div className="w-full">
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
          dragActive
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 bg-gray-50 hover:border-gray-400'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              processFile(e.target.files[0]);
            }
          }}
          className="hidden"
        />

        <div className="space-y-3">
          {loading ? (
            <Loader className="w-12 h-12 text-blue-500 mx-auto animate-spin" />
          ) : (
            <Upload className="w-12 h-12 text-gray-400 mx-auto" />
          )}

          <div>
            <p className="text-lg font-semibold text-gray-900">
              {loading ? 'Procesando archivo...' : 'Arrastra tu archivo aquí'}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              o haz clic para seleccionar
            </p>
          </div>

          <p className="text-xs text-gray-500">
            Soporta CSV, XLSX (máx. 5MB)
          </p>
        </div>
      </div>

      {error && (
        <div className="mt-4 flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {fileName && !error && (
        <div className="mt-4 flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
          <div className="flex items-center gap-2 flex-1">
            <FileText className="w-4 h-4 text-green-600" />
            <p className="text-sm text-green-800 font-medium">{fileName}</p>
          </div>
        </div>
      )}
    </div>
  );
}
