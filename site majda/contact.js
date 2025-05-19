document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const sujet = document.getElementById("sujet").value;
  const message = document.getElementById("message").value;

  const phone = "0775993447";
  const text = `Nom: ${nom}%0AEmail: ${email}%0ASujet: ${sujet}%0AMessage: ${message}`;
  const url = `https://wa.me/212${phone}?text=${text}`;

  window.open(url, "_blank");
});
