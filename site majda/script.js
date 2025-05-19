function commander(produit) {
  const confirmation = confirm(`Voulez-vous commander "${produit}" ?`);
  if (confirmation) {
    alert(`Merci pour votre commande de "${produit}"! Nous vous contacterons bientôt.`);
    // هنا يمكنك إضافة منطق إضافي، مثل فتح واتساب أو إرسال نموذج
  }
}
