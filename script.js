(() => {
  "use strict";
  const config = window.RESTAURANT_CONFIG || {};
  const dialog = document.querySelector("#info-dialog");
  const title = document.querySelector("#dialog-title");
  const description = document.querySelector("#dialog-description");
  const icon = document.querySelector("#dialog-icon");
  const toast = document.querySelector("#toast");
  let toastTimer;

  function validUrl(value) {
    try { return ["https:", "http:"].includes(new URL(value).protocol); }
    catch { return false; }
  }

  // Textos entram como textContent; a configuração nunca vira HTML executável.
  const dishesGrid = document.querySelector("#dishes-grid");
  const dishes = Array.isArray(config.dishes) ? config.dishes : [];
  dishes.forEach((dish, index) => {
    const card = document.createElement("article");
    card.className = "dish-card";
    const photo = document.createElement("div");
    photo.className = "dish-image-wrap";
    const image = document.createElement("img");
    image.className = "dish-photo";
    // Fotos podem ser locais ou URLs HTTP(S), sem esquemas executáveis.
    try {
      const source = new URL(dish.image, window.location.href);
      if (["http:", "https:", "file:"].includes(source.protocol)) image.src = source.href;
    } catch { /* Configuração sem foto válida: mantém o fundo do cartão. */ }
    image.alt = dish.alt || dish.name || "Prato do restaurante";
    image.loading = "lazy";
    image.width = 640;
    image.height = 640;
    image.addEventListener("error", () => { image.hidden = true; });
    photo.append(image);
    if (dish.example) {
      const badge = document.createElement("span");
      badge.className = "dish-badge";
      badge.textContent = "Exemplo ilustrativo";
      photo.append(badge);
    }
    const body = document.createElement("div");
    body.className = "dish-body";
    const number = document.createElement("span");
    number.className = "dish-number";
    number.textContent = String(index + 1).padStart(2, "0");
    const heading = document.createElement("h3");
    heading.textContent = dish.name;
    const text = document.createElement("p");
    text.textContent = dish.description;
    body.append(number, heading, text);
    card.append(photo, body);
    dishesGrid.append(card);
  });
  document.querySelector("#dish-demo-note").hidden = !dishes.some(dish => dish.example);
  if (validUrl(config.mapEmbedUrl)) document.querySelector("#restaurant-map").src = config.mapEmbedUrl;
  document.querySelectorAll("[data-review-status]").forEach(note => { note.hidden = validUrl(config.googleReviewUrl); });

  document.querySelectorAll("[data-config-link]").forEach(link => {
    const url = config[link.dataset.configLink];
    if (validUrl(url)) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      return;
    }
    if (!link.dataset.pending) return;
    // Sem URL configurada, a opção explica o que está pendente.
    link.addEventListener("click", event => {
      event.preventDefault();
      const isMenu = link.dataset.pending === "menu";
      title.textContent = isMenu ? "O que vamos saborear?" : "Sua opinião tem lugar à mesa.";
      description.textContent = isMenu
        ? "Nosso cardápio ainda não está disponível neste link. Fale com a gente pelo WhatsApp para conhecer as opções e fazer seu pedido."
        : "O link de avaliação no Google estará disponível em breve. Enquanto isso, você pode contar sua experiência diretamente para a gente pelo WhatsApp.";
      icon.setAttribute("href", isMenu ? "#i-menu" : "#i-star");
      dialog.showModal();
    });
  });

  document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });

  function notify(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("is-visible");
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3500);
  }

  document.querySelector("#share-button").addEventListener("click", async () => {
    const url = window.location.href.split("#")[0];
    try {
      if (navigator.share) {
        await navigator.share({title: "Delícias do Peixe · Restaurante", text: "Boa comida. Bons encontros. Conheça o Delícias do Peixe!", url});
      } else if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
        notify("Link copiado. Compartilhe um bom encontro!");
      } else {
        notify("Copie o endereço do navegador para compartilhar.");
      }
    } catch (error) {
      if (error.name !== "AbortError") notify("Copie o endereço do navegador para compartilhar.");
    }
  });
})();
