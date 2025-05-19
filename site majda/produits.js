// Animation légère sur les éléments promos pour clignoter doucement
const promoItems = document.querySelectorAll('.promo-item');
let promoIndex = 0;

function cyclePromo() {
  promoItems.forEach((item, i) => {
    item.style.opacity = i === promoIndex ? '1' : '0.4';
  });
  promoIndex = (promoIndex + 1) % promoItems.length;
}
setInterval(cyclePromo, 4000);

// Effet de luminosité sur les cartes produits et avis au survol géré en CSS
// Ajout d'animation pour l’apparition des produits et avis au scroll

const observerOptions = {
  threshold: 0.15,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.product-card, .review-card').forEach(el => {
  el.classList.add('not-visible');
  observer.observe(el);
});
