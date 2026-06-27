const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".image-card img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.textContent = img.alt || "Imagen ampliada";
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
};