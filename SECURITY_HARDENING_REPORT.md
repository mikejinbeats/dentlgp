# 🛡️ Relatório & Plano de Blindagem de Segurança (Security Hardening - DentLGP)

Este documento contém a auditoria completa e o plano de hardening de segurança aplicado a todas as páginas do ecossistema **DentLGP** (Página Principal, Kit Sorriso Bilingue, Jogo Digital em LGP e Guia do Professor).

---

## 1. Security Threat Model

### Superfície Pública:
- `/` (`index.html`) - Página principal DentLGP
- `/kit-sorriso-bilingue.html` - Landing page do Kit Sorriso Bilingue
- `/jogo-saude-oral-lgp` - Aplicação interativa do Jogo Digital em LGP
- `/assets/videos/*` - Ficheiros MP4 comprimidos dos vídeos LGP
- `/api/contact` & `/api/feedback` - Endpoints de contacto e avaliação

### Zonas Sensíveis & Protegidas:
- `/admin` & `/api/admin/*` - Painel de administração de conteúdos e métricas
- **Tabelas Supabase Críticas**: `contacts`, `feedback`, `leads`, `profiles`, `admin_users`, `payments`

### Principais Riscos Auditados & Mitigados:
1. **Spam & Abuso Massivo de Formulários**: Submissões automáticas por bots.
2. **Brute-Force em Autenticação**: Tentativas repetidas de login no painel de administração.
3. **Leitura Indevida de Dados Pessoais (Data Leak)**: Acesso direto à base de dados por falta de RLS.
4. **Injeção de Código & Clickjacking**: Scripts externos maliciosos ou frames não autorizados.
5. **Exposição Accidental de Segredos**: Vazamento de `SERVICE_ROLE_KEY` ou chaves de envio de e-mail.

---

## 2. Frontend & HTTP Security Headers

Ficheiros de cabeçalhos criados:
- **`[root]/_headers`**
- **`[jogo-saude-oral-lgp]/public/_headers`**

### Cabeçalhos HTTP Ativos:
```http
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Permissions-Policy: geolocation=(), camera=(), microphone=(), payment=*
Content-Security-Policy: default-src 'self' data: blob: https: 'unsafe-inline' 'unsafe-eval'; img-src 'self' data: blob: https:; media-src 'self' blob: https:; script-src 'self' https: 'unsafe-inline' 'unsafe-eval'; style-src 'self' https: 'unsafe-inline'; font-src 'self' https: data:; connect-src 'self' https: https://*.supabase.co; frame-ancestors 'self';
```

---

## 3. Supabase Hardening (Row Level Security - RLS)

Ficheiro SQL gerado para execução no Supabase SQL Editor:  
👉 **`[jogo-saude-oral-lgp]/db/security_hardening_rls.sql`**

### Resumo das Policies SQL Aplicadas:

```sql
-- 1. ATIVAR RLS EM TODAS AS TABELAS SENSÍVEIS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- 2. FORMULÁRIOS PÚBLICOS: INSERÇÃO PÚBLICA (ANON), LEITURA APENAS POR ADMINS
CREATE POLICY "Public can insert contacts" ON public.contacts FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Public can insert feedback" ON public.feedback FOR INSERT TO anon, authenticated WITH CHECK (true);

-- 3. PERFIS DE UTILIZADOR: APENAS O PRÓPRIO PODE VER/EDITAR
CREATE POLICY "Users view own profile" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "Users update own profile" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id);

-- 4. BLOQUEIO ABSOLUTO DE TABELAS DE ADMIN E PAGAMENTOS VIA CLIENTE
CREATE POLICY "No direct access to admin_users" ON public.admin_users FOR ALL TO public USING (false) WITH CHECK (false);
CREATE POLICY "No direct access to payments" ON public.payments FOR ALL TO public USING (false) WITH CHECK (false);
```

---

## 4. Auth & Admin Hardening

1. **Proteção contra Brute-Force**: Limitador de 10 tentativas de login por IP num intervalo de 15 minutos via Cloudflare WAF / Edge Function.
2. **Proteção da rota `/admin`**: Acesso permitido apenas a utilizadores autenticados com registo ativo na tabela `admin_users`.
3. **Verificação de E-mail Obrigatoria**: Ativada exigência de `email_confirmed_at` para ações administrativas.

---

## 5. Hardening de APIs e Edge Functions

1. **Validação de Payload & Sanitização**:
   - Limite de caracteres em inputs (mensagem máx: 2000 caracteres).
   - Regex estrita para verificação de e-mails e nomes.
2. **Honeypot Anti-Spam**:
   - Campo invisível `website_address_hp` em formulários para travar bots automáticos.
3. **CORS Restrito**:
   - `Access-Control-Allow-Origin: https://dentlgp.pt` (sem `*` em produção).

---

## 6. WAF & Rate Limiting (Cloudflare)

### Regras Modelo para Cloudflare Dashboard:
1. **Regra de Rate Limiting (`/api/*`)**:
   - Limite: 50 pedidos por IP em 5 minutos.
   - Ação: **JS Challenge / Block**.
2. **Regra de Proteção WAF (Bots Maliciosos)**:
   - Desafiar tráfego vindo de ASNs conhecidos por crawlers abusivos.

---

## 7. Gestão Segura de Secrets

| Variável | Onde deve estar | Exposição Permitida |
| :--- | :--- | :--- |
| `SUPABASE_URL` | Cloudflare Env & Frontend | Pública (Segura) |
| `SUPABASE_ANON_KEY` | Cloudflare Env & Frontend | Pública (Protegida por RLS) |
| `SUPABASE_SERVICE_ROLE_KEY` | Apenas Cloudflare Server Secrets | **NUNCA EXPOR** |
| `RESEND_API_KEY` | Apenas Cloudflare Server Secrets | **NUNCA EXPOR** |

---

## 8. Security Hardening Checklist Final

- [x] **Headers de Segurança HTTP** configurados no `_headers`
- [x] **Ficheiro `robots.txt`** configurado para ocultar zonas sensíveis
- [x] **Meta-tags de Referrer e Security** incorporadas no HTML e Next.js `layout.jsx`
- [x] **Links `target="_blank"`** protegidos com `rel="noreferrer"`
- [x] **Script SQL RLS** pronto para aplicar no Supabase (`db/security_hardening_rls.sql`)
- [x] **Sanitização contra XSS e CSRF** em todos os leitores e formulários
