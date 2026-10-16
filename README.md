# Delícias do Peixe

Bio-site responsivo feito com **HTML, CSS e JavaScript puro**, sem dependências. A experiência foi pensada para celulares acessando pelo cartão NFC.

## Onde adicionar os links

Abra **[config.js](config.js)** e preencha entre as aspas:

```js
menuUrl: "https://seu-link-do-cardapio.com",
googleReviewUrl: "https://seu-link-de-avaliacao-do-google.com",
```

`menuUrl` aceita um link público para PDF, imagem ou plataforma de cardápio. Para usar PDF local, salve-o em `assets/cardapio.pdf` e coloque a **URL pública completa**, como `https://seudominio.com/assets/cardapio.pdf`. O arquivo será incluído ao gerar a pasta `dist`.

`googleReviewUrl` deve receber o link de solicitar avaliações da ficha do restaurante no Google. Os exemplos acima são ilustrativos: substitua pelos links reais.

Enquanto esses campos estiverem vazios, os botões abrem uma janela explicando a disponibilidade e oferecendo contato pelo WhatsApp. Ao preencher uma URL válida, o botão abre o destino automaticamente. Não precisa editar HTML ou JavaScript.

WhatsApp, Instagram e Google Maps também estão centralizados em `config.js`. Telefone e endereço vieram das referências enviadas. O endereço também consta no [portal de turismo de Caruaru](https://conheca.caruaru.pe.gov.br/onde-comer/restaurante). A observação de segunda-feira veio da captura do Instagram; outros horários não foram presumidos.

## Visualizar

Abra `index.html` diretamente no navegador ou, com Node.js instalado, execute:

```sh
npm run dev
```

Acesse `http://localhost:4173`. Nenhuma instalação de pacotes é necessária.

## Publicar e usar no NFC

```sh
npm run check
npm run build
```

Publique o conteúdo da pasta `dist/` em uma hospedagem estática com HTTPS. Depois de alterar os links, rode o build e publique novamente. Grave a **URL pública final** como registro de URL no cartão NFC; assim, mudanças futuras no site não exigem regravar os cartões. Uma hospedagem com acesso privado serve para revisão e precisa ser tornada pública para uso pelos clientes.

## Arquivos

- `index.html`: estrutura, textos e botões.
- `style.css`: tema preto e branco, layout responsivo e movimento reduzido.
- `config.js`: links editáveis.
- `script.js`: janelas, configuração dos links e compartilhamento.
- `assets/marca-original.jpg`: imagem enviada, exibida nas cores originais.
- `assets/peixe-frito-limpo.png`: foto enviada pelo usuário, tratada pela ferramenta de edição de imagens para remover textos, preços, botão e bordas. O prato e as cores foram preservados; a foto e a logo são as exceções ao tema preto e branco.

Não há bibliotecas, rastreadores, cookies ou cadastro. O site funciona sem JavaScript para os links básicos; cardápio e avaliação pendentes e o compartilhamento usam JavaScript.
