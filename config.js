/* EDITE OS LINKS DO RESTAURANTE AQUI.
   Cole a URL completa entre as aspas. Exemplo: "https://seusite.com/cardapio.pdf"
   Deixe "" enquanto não tiver o link: o site exibe um aviso com acesso ao WhatsApp.
   Depois de alterar, publique novamente os arquivos do site. */
window.RESTAURANT_CONFIG = {
  // CARDÁPIO: link do PDF, imagem ou plataforma de cardápio.
  menuUrl: "",

  // AVALIAÇÃO: cole o link “Solicitar avaliações” do Perfil da Empresa no Google.
  googleReviewUrl: "",

  whatsappUrl: "https://wa.me/5581989737144?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20voc%C3%AAs.",
  instagramUrl: "https://www.instagram.com/restaurante.deliciasdopeixe/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Restaurante+Delicias+do+Peixe+Av+Joao+Soares+de+Lira+1688+Caruaru",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Restaurante+Delicias+do+Peixe+Av+Joao+Soares+de+Lira+1688+Caruaru",
  // MAPA: URL de incorporação (iframe) do Google Maps, não o link de compartilhar.
  mapEmbedUrl: "https://www.google.com/maps?q=Restaurante+Delicias+do+Peixe+Av+Joao+Soares+de+Lira+1688+Caruaru&z=16&output=embed",

  // PRATOS EM DESTAQUE: altere nome, descrição, foto e texto alternativo aqui.
  // Para cada prato real, troque example para false para remover o selo de exemplo.
  // Coloque suas fotos em assets/ e use o caminho, como "assets/moqueca.jpg".
  dishes: [
    {
      name: "Peixe inteiro frito",
      description: "Douradinho, com salada fresca e limão. Um convite para reunir a mesa.",
      image: "assets/peixe-frito-limpo.png",
      alt: "Peixe inteiro frito com salada sobre uma tábua de madeira",
      example: false
    },
    {
      name: "Moqueca de peixe",
      description: "Peixe em um molho cremoso, com pimentões e o frescor do coentro.",
      image: "assets/moqueca-exemplo.png",
      alt: "Imagem ilustrativa de moqueca de peixe com pimentões",
      example: true
    },
    {
      name: "Camarão ao alho e óleo",
      description: "Camarões dourados, alho e um toque de limão para acompanhar a conversa.",
      image: "assets/camarao-exemplo.png",
      alt: "Imagem ilustrativa de camarões ao alho e óleo com limão",
      example: true
    },
    {
      name: "Filé de peixe crocante",
      description: "Casquinha crocante, peixe macio, arroz e salada para completar.",
      image: "assets/file-peixe-exemplo.png",
      alt: "Imagem ilustrativa de filés de peixe empanados, arroz e salada",
      example: true
    }
  ]
};
