-- ====================================================================
-- SUPABASE SECURITY HARDENING & ROW LEVEL SECURITY (RLS) POLICIES
-- Projeto: Kit Sorriso DentLGP - Saúde Oral em LGP
-- ====================================================================

-- 1. ATIVAR ROW LEVEL SECURITY (RLS) EM TODAS AS TABELAS DA APLICAÇÃO
ALTER TABLE IF EXISTS public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.payments ENABLE ROW LEVEL SECURITY;

-- 2. LIMPAR POLICIES ANTIGAS (PREVENIR CONFLITOS)
DROP POLICY IF EXISTS "Public can insert contacts" ON public.contacts;
DROP POLICY IF EXISTS "Authenticated can read contacts" ON public.contacts;
DROP POLICY IF EXISTS "Public can insert feedback" ON public.feedback;
DROP POLICY IF EXISTS "Authenticated can read feedback" ON public.feedback;
DROP POLICY IF EXISTS "Users view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users update own profile" ON public.profiles;
DROP POLICY IF EXISTS "No direct access to admin_users" ON public.admin_users;
DROP POLICY IF EXISTS "No direct access to payments" ON public.payments;

-- 3. POLICIES PARA FORMULÁRIOS PÚBLICOS (CONTACTOS E FEEDBACK DO JOGO)
-- Qualquer visitante (anon) pode submeter um contacto/feedback, mas NENHUM anon pode ler a lista
CREATE POLICY "Public can insert contacts"
ON public.contacts
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated admins can read contacts"
ON public.contacts
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE admin_users.user_id = auth.uid()
  )
);

CREATE POLICY "Public can insert feedback"
ON public.feedback
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated admins can read feedback"
ON public.feedback
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE admin_users.user_id = auth.uid()
  )
);

-- 4. POLICIES PARA PERFIS DE UTILIZADOR
CREATE POLICY "Users view own profile"
ON public.profiles
FOR SELECT
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Users update own profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING (auth.uid() = id);

-- 5. BLINDAGEM DE TABELAS RESTRITAS (ADMIN_USERS E PAYMENTS)
-- Impede acesso direto do lado do cliente (mesmo com anon key)
CREATE POLICY "No direct access to admin_users"
ON public.admin_users
FOR ALL
TO public
USING (false)
WITH CHECK (false);

CREATE POLICY "No direct access to payments"
ON public.payments
FOR ALL
TO public
USING (false)
WITH CHECK (false);

-- 6. PROTEÇÃO DE SCHEMAS E REVOGAÇÃO DE PRIVILÉGIOS DESNECESSÁRIOS
REVOKE EXECUTE ON ALL FUNCTIONS IN SCHEMA public FROM public;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO authenticated;
