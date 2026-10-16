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
