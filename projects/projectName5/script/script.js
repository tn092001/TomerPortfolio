document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".slider img");
    let index = 0;

    setInterval(() => {
        images[index].style.opacity = "0"; // מסתיר תמונה נוכחית
        index = (index + 1) % images.length; // עובר לתמונה הבאה
        images[index].style.opacity = "1"; // מציג את התמונה הבאה
    }, 4000); // כל 4 שניות
});
