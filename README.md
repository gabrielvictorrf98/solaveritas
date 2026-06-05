# solaveritas

> Ensaios sobre verdade, fé e razão — blog Jekyll em PT-BR, otimizado para GitHub Pages, com RSS nativo e integração opcional com Buttondown para newsletter.

## 🚀 Setup no GitHub Pages (10 min, do zero)

### 1. Crie uma conta no GitHub (se não tiver)

→ [github.com/signup](https://github.com/signup) — email, senha, escolher username. **Anote o username.**

### 2. Crie um repositório

→ [github.com/new](https://github.com/new) (após login)

- **Nome do repo:** `solaveritas.github.io` (substitua `solaveritas` pelo seu username — só funciona se o nome bater com seu username + `.github.io`)
  - Se preferir URL tipo `seuuser.github.io/blog`, use o nome `blog` ou `solaveritas`
- **Visibilidade:** Public
- ⚠️ **NÃO marque** "Add a README", "Add .gitignore", "Add license" — porque já temos tudo.

Clique **Create repository**.

### 3. Suba os arquivos do blog

Você tem duas opções. Escolha a mais fácil:

#### Opção A — Interface web (sem instalar nada)

1. Na página do repo recém-criado, clique em **"uploading an existing file"** (link logo abaixo de "Quick setup")
2. Arraste **todos os arquivos e pastas** deste zip (exceto o próprio zip). No Windows Explorer ou Finder, abra a pasta `solaveritas-jekyll/`, dê Ctrl+A / Cmd+A, arraste pra área de upload do GitHub.
3. Aguarde o upload (pode demorar 1-2 min).
4. Role pra baixo, escreva uma mensagem: `primeiro commit`
5. Clique **Commit changes**.

#### Opção B — Git local (se você tiver Git instalado)

```bash
cd solaveritas-jekyll
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/solaveritas.github.io.git
git push -u origin main
```

### 4. Ative o GitHub Pages

1. No seu repo, clique em **Settings** (engrenagem, no topo)
2. No menu lateral, clique em **Pages**
3. Em "Build and deployment":
   - **Source:** "Deploy from a branch"
   - **Branch:** `main` / `(root)` (deixe como está)
4. Espere 1-2 minutos. A página vai mostrar uma URL verde tipo:
   - `https://solaveritas.github.io/` (se o repo se chama `solaveritas.github.io`)
   - `https://seuuser.github.io/solaveritas/` (se o repo se chama `solaveritas`)

**Pronto. Seu blog está no ar com HTTPS.**

### 5. (Opcional) Domínio próprio

Se você comprou `solaveritas.blog` ou similar:

1. Em **Settings → Pages → Custom domain**, digite seu domínio e salve.
2. No painel do Registro.br / Cloudflare / etc., crie um CNAME:
   - `www` → `solaveritas.github.io`
   - E redirecione o apex (sem www) para www.
3. Aguarde a propagação de DNS (até 24h).
4. Volte em **Settings → Pages** e ative **"Enforce HTTPS"**.

---

## ✍️ Criar um post novo (o que importa)

Existem **dois jeitos**, do mais fácil ao mais robusto.

### Jeito 1 — Pelo navegador (zero instalação) ⭐ recomendado

1. Acesse `github.com/SEU-USUARIO/solaveritas.github.io`
2. Navegue até a pasta **`_posts/`** (clique nela)
3. Clique em **Add file → Create new file** (canto superior direito)
4. No campo "Name your file", digite:
   ```
   _posts/2026-06-15-titulo-do-post.md
   ```
   (a data + slug separado por hífens é o padrão Jekyll — esse nome importa!)

5. Cole este **template** no editor:

```markdown
---
layout: post
title: "Título do seu post"
date: 2026-06-15 09:00:00 -0300
author: "Seu nome"
tags: [tag1, tag2]
reading_time: 7
description: "Resumo de uma linha que aparece nos cards e no Google."
---

Primeiro parágrafo do post. Use **negrito**, *itálico*, e [links](https://exemplo.com).

## Subtítulo (use ## para h2)

Mais parágrafos.

> Citações ficam entre > no início da linha.

E listas são assim:

- Item 1
- Item 2
- Item 3
```

6. Edite os campos no topo (title, date, author, tags, reading_time, description) e escreva o conteúdo embaixo.
7. Role pra baixo, escreva uma mensagem: `post: novo ensaio sobre X`
8. Clique **Commit new file**.

**Pronto.** Em 30-60 segundos o post aparece no site. A home, o arquivo, o sitemap e o feed RSS se atualizam sozinhos.

### Jeito 2 — Git local (pra quem escreve muito)

Se você for escritor frequente e preferir usar editor de texto local (VS Code, Typora, Obsidian, iA Writer etc.):

```bash
# Clone o repo (uma vez)
git clone https://github.com/SEU-USUARIO/solaveritas.github.io.git
cd solaveritas.github.io

# Crie um post
cat > _posts/2026-06-15-meu-novo-post.md << 'EOF'
---
layout: post
title: "Meu novo ensaio"
date: 2026-06-15
author: "Gabriel F."
tags: [reforma, teologia]
reading_time: 5
---

Conteúdo do post aqui.
EOF

# Publique
git add _posts/2026-06-15-meu-novo-post.md
git commit -m "post: novo ensaio"
git push
```

---

## 📝 Referência rápida: front matter

```yaml
---
layout: post                          # sempre "post" para artigos
title: "Título do post"               # obrigatório, aparece em todo lugar
date: 2026-06-15 09:00:00 -0300       # YYYY-MM-DD HH:MM:SS + timezone
author: "Seu nome"                    # aparece no byline
author_key: "gabriel-f"               # opcional; busca dados em _data/authors.yml
tags: [reforma, teologia]             # array; primeiro vira a tag principal
reading_time: 7                       # estimativa em minutos
description: "Resumo de 1 linha."     # aparece em cards e meta description
subtitle: "Frase de efeito"           # opcional, aparece abaixo do título
---
```

## 🧰 Referência rápida: markdown

```markdown
# Título 1
## Título 2
### Título 3

**negrito** *itálico* [link](url)

> Citação em bloco

- Lista
- Não ordenada

1. Lista
2. Numerada

![legenda](url-da-imagem)

```código
em bloco
```
```

---

## 🎨 Customização rápida

- **Cores:** edite o topo de `assets/css/style.css` (variáveis `--accent`, `--bg` etc.)
- **Tipografia:** troque no Google Fonts link em `_includes/header.html` (via `_layouts/default.html`)
- **Nome do blog:** busque/substitua "solaveritas" em todos os arquivos
- **Autores e perfis:** edite `_data/authors.yml` e use `author_key` no post quando quiser centralizar nome/email por autor
- **Texto do hero / tagline:** edite `_config.yml` no campo `tagline`
- **Newsletter:** configure `newsletter.enabled` e `newsletter.buttondown.username` em `_config.yml` para ativar a integração com Buttondown sem sair do GitHub Pages

## 📬 Newsletter e email

O GitHub Pages publica **arquivos estáticos**. Isso significa:

- O repositório já gera automaticamente um feed em `/feed.xml` via `jekyll-feed`
- **Nenhum email é disparado sozinho** quando você publica um post
- Para enviar posts por email, este projeto está preparado para integrar com **Buttondown**
- Sem conta configurada, a home mostra opções honestas de RSS e contato por email, sem fingir que existe automação

### Ativar Buttondown

1. Crie sua newsletter no Buttondown.
2. Abra `_config.yml`.
3. Preencha:

```yaml
newsletter:
  enabled: true
  provider: "buttondown"
  provider_name: "Buttondown"
  button_label: "Assinar"
  buttondown:
    username: "seu-usuario"
    tag: "site"
```

4. Faça commit e push.

Depois disso, o fluxo fica assim:

- O leitor envia o email pelo formulário da home
- O formulário posta direto no endpoint embed do Buttondown
- O Buttondown registra o inscrito e pode mandar email de confirmação, se sua lista usar double opt-in
- Quando você publicar um novo post no blog, o GitHub Pages atualiza o site e o feed RSS
- A partir daí, o disparo do email é feito pelo Buttondown, no formato da campanha que você configurar lá

---

## ❓ Problemas comuns

**O site mostra 404 / não atualiza:**
- Vá em Settings → Pages e veja se há erro de build
- Verifique se o nome do arquivo do post está exatamente `YYYY-MM-DD-slug.md` (data no início, sem espaços)

**O CSS não carrega / site sem estilo:**
- Abra o site em janela anônima (Ctrl+Shift+N) — pode ser cache
- Limpe o cache do navegador

**Front matter malformado:**
- O bloco `--- ... ---` no topo é YAML. Cada linha é `chave: valor`
- `tags` é sempre lista: `[um, dois, tres]`
- Strings com dois-pontos, aspas ou caracteres especiais vão entre aspas

**Post não aparece no arquivo:**
- Verifique se a `date` não está no futuro
- Verifique se o front matter está completo (entre `---` no topo e `---` antes do conteúdo)

---

## 📁 Estrutura do projeto

```
solaveritas-jekyll/
├── _config.yml              Configuração do site
├── _layouts/
│   ├── default.html         Template base (header + footer)
│   ├── post.html            Template de artigo
│   └── page.html            Template de página (Sobre, Arquivo)
├── _includes/
│   ├── header.html          Navegação reutilizável
│   └── footer.html          Rodapé reutilizável
├── _posts/                  Posts em markdown (formato YYYY-MM-DD-titulo.md)
│   ├── 2026-05-28-sola-scriptura.md
│   ├── 2026-05-21-sola-gratia.md
│   ├── 2026-05-07-problema-do-mal.md
│   ├── 2026-04-23-leitura-biblica-licoes.md
│   └── 2026-03-25-verdade-liberta.md
├── assets/
│   ├── css/style.css        Design system (cores, tipografia, layout)
│   └── js/main.js           Interatividade (tema, busca, menu)
├── _site/                   [gerado, não mexa — aparece após build]
├── about.md                 Página "Sobre" (markdown)
├── archive.html             Página "Arquivo" (lista de posts)
├── index.html               Home (auto-gera lista de posts)
├── 404.html                 Página de erro
├── robots.txt
├── Gemfile                  Dependências Ruby (pra build local)
└── README.md                Este arquivo
```

---

*veritas liberabit vos*
