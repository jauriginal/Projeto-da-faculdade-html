# Padaria Sonho Meu

Site em HTML, CSS e JavaScript de uma padaria fictícia, feito para a
atividade da escola.

## Tema

Site de apresentação de uma padaria de bairro: produtos, promoções, contato
e uma página de login com validação simples em JavaScript.

## Páginas

- `index.html` — página inicial, com produtos em destaque
- `produtos.html` — cardápio completo, promoções e formulário de contato
- `login.html` — página de login, validada com JavaScript
- `style.css` — estilo usado em todas as páginas
- `script.js` — script do login (usado só em `login.html`)

## Login de teste

O login não se conecta a nenhum servidor. Os dados de teste ficam escritos
na própria página e também no código:

- Usuário: cliente
- Senha: sonho123

## JavaScript (script.js)

O arquivo `script.js` é usado apenas na página `login.html` e usa quatro
conceitos básicos:

- **Evento** — `addEventListener("submit", ...)` espera o clique no botão
  "Entrar" para rodar o código.
- **Função** — `verificarLogin()` reúne toda a lógica de checagem do login.
- **Estrutura de controle (if/else)** — decide se mostra a mensagem de
  sucesso ou de erro, comparando o que foi digitado com o usuário e a
  senha de teste.
- **LocalStorage** — `localStorage.setItem()` e `localStorage.getItem()`
  guardam o nome do usuário no navegador, para preencher o campo
  automaticamente da próxima vez que a página for aberta. A senha não é
  guardada, por segurança.

Ao enviar o formulário, aparece um alerta do navegador avisando se o
login deu certo ou não.

## Como ver o site

Abra o arquivo `index.html` no navegador. Todos os arquivos (`.html`,
`style.css` e `script.js`) precisam estar na mesma pasta.