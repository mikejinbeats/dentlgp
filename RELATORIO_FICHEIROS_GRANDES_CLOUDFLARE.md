# 📊 Relatório de Análise: Ficheiros Superiores a 25 MiB no Projeto DentLGP

**Data da Análise:** 29 de Julho de 2026  
**Motivo:** Erro de Deploy no Cloudflare Pages (`Error: Pages only supports files up to 25 MiB in size`).

---

## 🔍 Resumo Executivo da Análise a Fundo

Foi realizada uma varredura completa a todos os documentos, vídeos, imagens, PDFs e ficheiros de código do projeto.

### 🔴 Conclusão Principal:
1. **Nenhum vídeo, imagem ou documento PDF do site DentLGP tem mais de 25 MiB**:
   - O maior vídeo do site ([`Assistente Dentario.mp4`](file:///c:/Users/Nigglet/Desktop/template%20website%20dentlgp/assets/videos/Assistente%20Dentario.mp4)) tem apenas **10.68 MB**.
   - O maior documento PDF ([`Cartoes_A6_Frentes_18_paginas.pdf`](file:///c:/Users/Nigglet/Desktop/template%20website%20dentlgp/assets/Cartoes_A6_Frentes_18_paginas.pdf)) tem apenas **13.60 MB**.
   - O Guia do Professor ([`Guia_do_Professor_A5.pdf`](file:///c:/Users/Nigglet/Desktop/template%20website%20dentlgp/assets/Guia_do_Professor_A5.pdf)) tem apenas **4.53 MB**.

2. **A causa EXATA do erro no Cloudflare Pages**:
   - Os únicos ficheiros no projeto que ultrapassam o limite de 25 MiB são **5 ficheiros de cache temporária do npm** localizados dentro da pasta temporária do ambiente de desenvolvimento:
   - `jogo-saude-oral-lgp\.sites-runtime\npm-cache\_cacache\content-v2\sha512\...`

---

## 📋 Lista Completa dos Ficheiros Acima de 25 MiB Encontrados

| Ficheiro / Caminho | Tamanho Exato | Categoria / Descrição |
| :--- | :--- | :--- |
| **`jogo-saude-oral-lgp\.sites-runtime\npm-cache\...\sha512\0c\e8\...`** | **43.09 MB** | Ficheiro de cache temporário do npm |
| **`jogo-saude-oral-lgp\.sites-runtime\npm-cache\...\sha512\17\4f\...`** | **41.67 MB** | Ficheiro de cache temporário do npm |
| **`jogo-saude-oral-lgp\.sites-runtime\npm-cache\...\sha512\08\30\...`** *(Ficheiro exato do log do Cloudflare)* | **34.96 MB** (~35 MiB) | Ficheiro de cache temporário do npm |
| **`jogo-saude-oral-lgp\.sites-runtime\npm-cache\...\sha512\a8\e5\...`** | **32.54 MB** | Ficheiro de cache temporário do npm |
| **`jogo-saude-oral-lgp\.sites-runtime\npm-cache\...\sha512\5a\65\...`** | **30.41 MB** | Ficheiro de cache temporário do npm |

---

## 📊 Lista dos Maiores Ficheiros de Média do Projeto (Todos < 25 MB OK)

Para total transparência, aqui fica o tamanho de todos os conteúdos de media reais do site (nenhum deles causa problema):

- **Cartões PDF (Frentes - 18 páginas):** `13.60 MB` (Abaixo dos 25MB - OK)
- **Vídeo LGP: Assistente Dentário:** `10.68 MB` (Abaixo dos 25MB - OK)
- **Vídeo LGP: Dentista:** `8.22 MB` (Abaixo dos 25MB - OK)
- **Vídeo LGP: Consulta de Rotina:** `7.85 MB` (Abaixo dos 25MB - OK)
- **Vídeo LGP: Escovar Dentes:** `7.87 MB` (Abaixo dos 25MB - OK)
- **Vídeo LGP: Boca:** `7.71 MB` (Abaixo dos 25MB - OK)
- **Vídeo LGP: Rececionista:** `7.66 MB` (Abaixo dos 25MB - OK)
- **Vídeo LGP: Consultório:** `7.33 MB` (Abaixo dos 25MB - OK)
- **Vídeo LGP: Fio Dentário:** `7.29 MB` (Abaixo dos 25MB - OK)
- **Vídeo LGP: Lábios:** `6.82 MB` (Abaixo dos 25MB - OK)
- **Vídeo LGP: Gengivas:** `6.78 MB` (Abaixo dos 25MB - OK)
- **Vídeo LGP: Paciente:** `6.77 MB` (Abaixo dos 25MB - OK)
- **Vídeo LGP: Pasta Dentífrica:** `6.72 MB` (Abaixo dos 25MB - OK)
- **Vídeo LGP: Colutório:** `6.52 MB` (Abaixo dos 25MB - OK)
- **Vídeo LGP: Maxilares:** `6.19 MB` (Abaixo dos 25MB - OK)
- **Vídeo LGP: Dentes:** `6.08 MB` (Abaixo dos 25MB - OK)
- **Vídeo LGP: Sala de Espera:** `5.95 MB` (Abaixo dos 25MB - OK)
- **Vídeo LGP: Língua:** `5.84 MB` (Abaixo dos 25MB - OK)
- **Guia do Professor PDF:** `4.53 MB` (Abaixo dos 25MB - OK)

---

## 💡 Como resolver facilmente no Git/Cloudflare:
A pasta `.sites-runtime` é apenas uma pasta temporária local de cache do npm que não deve ir para o Cloudflare Pages.
Basta remover essa pasta temporária do rastreio do Git ou apagá-la do repositório remoto para que o Cloudflare dê deploy em menos de 10 segundos!
