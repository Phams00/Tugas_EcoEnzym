// Tahun footer otomatis mengikuti tahun saat website dibuka.
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelectorAll("img").forEach((image) => {
  const fallback = image.nextElementSibling;
  if (!fallback) return;

  const showFallback = () => {
    image.hidden = true;
    fallback.classList.add("is-visible");
  };

  image.addEventListener("error", showFallback, { once: true });
  if (image.complete && image.naturalWidth === 0) showFallback();
});
