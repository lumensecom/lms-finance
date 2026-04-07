/*
  # Sistema de Enriquecimiento de Proveedores

  1. New Tables
    - `processing_jobs` - Registra cada carga y procesamiento de NITs
    - `provider_results` - Almacena los resultados enriquecidos por NIT
    
  2. Security
    - Enable RLS on both tables
    - Policies for authenticated users to manage their own data
*/

CREATE TABLE IF NOT EXISTS processing_jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  filename text NOT NULL,
  status text DEFAULT 'pending',
  total_nits integer DEFAULT 0,
  processed_nits integer DEFAULT 0,
  nits_with_results integer DEFAULT 0,
  error_count integer DEFAULT 0,
  file_data jsonb,
  metadata jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  completed_at timestamptz,
  started_at timestamptz
);

CREATE TABLE IF NOT EXISTS provider_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id uuid REFERENCES processing_jobs(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  nit text NOT NULL,
  tipo_documento text,
  numero_identificacion text,
  digito_verificacion text,
  primer_apellido text,
  segundo_apellido text,
  primer_nombre text,
  otros_nombres text,
  razon_social text,
  direccion text,
  codigo_depto text,
  codigo_mcp text,
  pais_residencia text,
  fuente text,
  es_fallback boolean DEFAULT false,
  datos_crudos jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE processing_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE provider_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own jobs"
  ON processing_jobs FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create jobs"
  ON processing_jobs FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own jobs"
  ON processing_jobs FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view results from their jobs"
  ON provider_results FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create results for their jobs"
  ON provider_results FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE INDEX idx_jobs_user_id ON processing_jobs(user_id);
CREATE INDEX idx_jobs_status ON processing_jobs(status);
CREATE INDEX idx_results_job_id ON provider_results(job_id);
CREATE INDEX idx_results_user_id ON provider_results(user_id);