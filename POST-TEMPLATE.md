---
layout: post
title: "[TEMPLATE] Substitua este título pelo seu"
date: 2026-06-15 09:00:00 -0300
author: "Gabriel F."
author_key: "gabriel-f"
tags: [tag-principal, tag-secundária]
reading_time: 5
description: "Substitua esta descrição por uma frase de resumo do post (até ~150 caracteres)."
subtitle: "Opcional: subtítulo/frase de efeito abaixo do título"
---

**Arquivo template — apague este arquivo depois de criar seu primeiro post real!**

O nome do arquivo DEVE seguir o padrão `AAAA-MM-DD-slug-aqui.md`. Jekyll usa a data no nome do arquivo para ordenar os posts; o slug vira a URL.

Para criar um post:
1. Copie este arquivo
2. Renomeie para `AAAA-MM-DD-titulo-do-seu-post.md` (com a data de hoje)
3. Edite o front matter (o bloco entre `---` no topo)
4. Substitua este conteúdo pelo seu texto em markdown
5. Commit

---

## Subtítulo (use `##` para nível 2)

Primeiro parágrafo do post. Pode ser uma ou duas frases preparando o leitor pro que vem.

Pode usar **negrito**, *itálico*, [links](https://exemplo.com), e citações:

> "Esta é uma citação em bloco. Use para destacar frases de outros autores ou passagens bíblicas."

## Outro subtítulo

Listas com bullets:

- Primeiro item
- Segundo item
- Terceiro item

Listas numeradas:

1. Passo um
2. Passo dois
3. Passo três

Texto inline com `código` para destacar termos técnicos ou termos estrangeiros. Para blocos de código:

```
isso é um bloco de código
em três linhas
```

## Imagens (quando precisar)

Por enquanto não temos imagens no blog, mas quando quiser adicionar uma:

```markdown
![Descrição da imagem]({{ '/assets/imagens/nome.jpg' | relative_url }})
```

Faça upload da imagem em `assets/imagens/` pelo GitHub (Add file → Upload files), e use o código acima.

## Encerramento

Termine o post como preferir — uma conclusão, uma oração, uma provocação, uma bibliografia. O importante é fechar o argumento.

---

*Referências: autor, livro, página. (opcional)*
