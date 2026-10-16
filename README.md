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

## Trocar os pratos em destaque

Abra **[config.js](config.js)** e procure `dishes`. Cada objeto corresponde a um cartão, na ordem em que aparece no site:

```js
{
  name: "Nome do prato real",
  description: "Descrição curta do prato e dos acompanhamentos.",
  image: "assets/foto-do-prato.jpg",
  alt: "Descrição da foto para acessibilidade",
  example: false
}
```

Coloque a foto em `assets/` e atualize `image`. Substitua os três exemplos fictícios (moqueca, camarão e filé crocante) pelos pratos reais. Mude `example: true` para `example: false` quando o conteúdo corresponder ao prato real, para remover o selo de exemplo. O aviso geral desaparece quando não houver exemplos. Não foram presumidos preços ou tamanhos de porção.

As três imagens de exemplo foram geradas com a ferramenta nativa de imagens, com prompts de fotografia realista de moqueca de peixe, camarão ao alho e óleo e filé de peixe empanado, em pratos escuros e cores naturais. Arquivos: `assets/moqueca-exemplo.png`, `assets/camarao-exemplo.png` e `assets/file-peixe-exemplo.png`.

## Mapa, FAQ e avaliação

- `mapEmbedUrl` em `config.js`: URL usada pelo iframe. Aceita o link de incorporação do Google Maps.
- `directionsUrl`: destino do botão de traçar rota. `mapsUrl`: botão de abrir no Google Maps.
- `googleReviewUrl`: botão principal da seção de avaliação. Enquanto vazio, mostra o aviso e oferece WhatsApp. As estrelas são decorativas, sem representar uma nota real.
- FAQ: perguntas e respostas em `index.html`, na seção `id="duvidas"`. Os blocos usam `<details>` e funcionam sem JavaScript.
- Localização e avaliação no topo navegam para as seções da própria página.

## Visualizar o site

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
