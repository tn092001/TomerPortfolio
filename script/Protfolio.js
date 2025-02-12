document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");

    // הצגת ה-loader בעת טעינת העמוד
    loader.style.display = "flex";

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 1000);

    // ודא שה-loader מוסתר לחלוטין לאחר שהעמוד נטען
    window.addEventListener("load", function () {
        setTimeout(() => {
            loader.classList.add("hidden");
            loader.style.display = "none";
        }, 500);
    });

    // טיפול בניווט פנימי בתפריט הניווט (ללא טעינה)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener("click", function (event) {
            const href = this.getAttribute("href");

            if (href.startsWith("#")) {
                event.preventDefault();
                const targetElement = document.getElementById(href.substring(1));

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // התאמת המיקום בהתאם ל-navbar
                        behavior: "smooth"
                    });
                }
            } else {
                // ניווט חיצוני - הצגת ה-loader
                loader.classList.remove("hidden");
                loader.style.display = "flex";
            }
        });
    });

    // הוספת האזנה ללחיצה על כפתורי הכרטיסים
    document.querySelectorAll(".card-button").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // מונע טעינה מיידית כדי שה-loader יופיע
            loader.classList.remove("hidden");
            loader.style.display = "flex";

            const link = this.getAttribute("href");
            setTimeout(() => {
                window.location.href = link; // טוען את הדף אחרי הצגת ה-loader
            }, 800); // זמן קצר כדי להראות את הספינר
        });
    });

    // טיפול בכפתור החזרה למעלה
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = "1";
            scrollToTopBtn.style.visibility = "visible";
        } else {
            scrollToTopBtn.style.opacity = "0";
            scrollToTopBtn.style.visibility = "hidden";
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // טיפול בתפריט הניווט למובייל
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }
});