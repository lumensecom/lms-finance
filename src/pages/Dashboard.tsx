import React, { useState } from 'react';
import { LogOut, BarChart3 } from 'lucide-react';
import { signOut } from '../lib/auth';
import { FileUpload } from '../components/FileUpload';
import { ProcessingDashboard } from '../components/ProcessingDashboard';

export function Dashboard() {
  const [activeJobId, setActiveJobId] = useState<string | null>(null);
  const [nitsCount, setNitsCount] = useState(0);

  async function handleLogout() {
    await signOut();
  }

  if (activeJobId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">
                Procesamiento de Proveedores
              </h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
            >
              <LogOut className="w-5 h-5" />
              Salir
            </button>
          </div>

          <ProcessingDashboard
            jobId={activeJobId}
            nitsCount={nitsCount}
            onBack={() => setActiveJobId(null)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Enriquecimiento de Proveedores
              </h1>
              <p className="text-gray-600 mt-1">
                Sistema DIAN — LMS Accounting Group
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-lg transition"
          >
            <LogOut className="w-5 h-5" />
            Salir
          </button>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Carga tu archivo
            </h2>
            <p className="text-gray-600 mb-6">
              Sube un archivo CSV o XLSX con los NITs o cédulas de los proveedores
              que deseas enriquecer. El sistema consultará automáticamente el RUES
              y activará búsquedas alternativas en SECOP si es necesario.
            </p>

            <FileUpload
              onUploadComplete={(jobId, nits) => {
                setActiveJobId(jobId);
                setNitsCount(nits.length);
              }}
            />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Cómo usar el sistema
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-900">Prepara tu archivo</h4>
                <p className="text-sm text-gray-600">
                  Crea un CSV o XLSX con una columna de NITs o cédulas. Puede tener
                  múltiples filas.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-900">Carga el archivo</h4>
                <p className="text-sm text-gray-600">
                  Arrastra tu archivo al área de carga o haz clic para seleccionarlo.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-900">Descarga resultados</h4>
                <p className="text-sm text-gray-600">
                  Una vez procesados, descarga los datos enriquecidos en formato CSV.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-3">
              Información del archivo
            </h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>
                ✓ Formato CSV: una columna con NITs (p. ej.,
                <code className="bg-blue-100 px-1 rounded">890903938</code> o
                <code className="bg-blue-100 px-1 rounded">900050042-8</code>)
              </li>
              <li>
                ✓ Formato XLSX: detecta automáticamente la columna de identificación
              </li>
              <li>
                ✓ Máximo: 5MB por archivo
              </li>
              <li>
                ✓ El sistema enriquece cada NIT con datos del RUES y complementa
                con SECOP si no encuentra resultados
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
