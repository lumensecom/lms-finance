import React, { useState } from 'react';
import { Mail, Lock, AlertCircle, Loader } from 'lucide-react';
import { signUp, signIn } from '../lib/auth';

interface AuthFormProps {
  onSuccess?: () => void;
}

export function AuthForm({ onSuccess }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        await signUp(email, password);
        setEmail('');
        setPassword('');
        setIsSignUp(false);
        setError('Cuenta creada. Por favor inicia sesión.');
      } else {
        await signIn(email, password);
        onSuccess?.();
      }
    } catch (err: any) {
      setError(err.message || 'Error de autenticación');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Enriquecimiento de Proveedores
          </h1>
          <p className="text-gray-600">
            Sistema DIAN — LMS Accounting Group
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <p className="text-sm text-amber-800">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading && <Loader className="w-5 h-5 animate-spin" />}
            {isSignUp ? 'Crear cuenta' : 'Iniciar sesión'}
          </button>
        </form>

        <button
          type="button"
          onClick={() => {
            setIsSignUp(!isSignUp);
            setError('');
          }}
          className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium py-2 transition"
        >
          {isSignUp
            ? '¿Ya tienes cuenta? Inicia sesión'
            : '¿Sin cuenta? Crea una'}
        </button>
      </div>
    </div>
  );
}
