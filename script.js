 
             tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { sans: ['Assistant', 'sans-serif'] },
                    colors: {
                        primary: { DEFAULT: '#F28C8C', light: '#FFF8F8', dark: '#E07676' }, 
                        secondary: { DEFAULT: '#AED9A0', light: '#F4FAF1', dark: '#8FBC7F' }, 
                        cream: { DEFAULT: '#FFF4E0', light: '#FFFDF9' },
                        darkText: '#3D3D3D'
                    }
                }
            }
        }
		
		
		     // סקריפט פשוט להפעלת האנימציות רק כשהאלמנט נכנס לשדה הראייה (Scroll Reveal)
        document.addEventListener("DOMContentLoaded", function() {
            const animatedElements = document.querySelectorAll('.fade-in-up');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            animatedElements.forEach(el => {
                el.style.animationPlayState = 'paused';
                observer.observe(el);
            });
			
			
			
// פונקציות המודאל
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const galleryImages = document.querySelectorAll('.gallery-img');

// פתיחת המודאל בעת לחיצה על תמונה
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        modalImg.src = img.src; // העתקת מקור התמונה
        modal.classList.remove('hidden'); // הצגת המודאל
        setTimeout(() => modalImg.classList.add('scale-100'), 10); // אנימציית כניסה
        document.body.style.overflow = 'hidden'; // מניעת גלילה של הדף ברקע
    });
});

// סגירת המודאל
function closeModal() {
    modalImg.classList.remove('scale-100');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // החזרת הגלילה
}

// סגירה בלחיצה על השטח הכהה (מחוץ לתמונה)
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// סגירה באמצעות מקש Escape במקלדת
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeModal();
});
 

function scrollGallery(direction) {
    const container = document.getElementById('scrollGallery');
    const scrollAmount = 350; // כמות הפיקסלים להזזה בכל לחיצה
    
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
 
 function scrollGallery(direction) {
     document.getElementById('scrollGallery').scrollBy({ left: direction * 320, behavior: 'smooth' });
 }

 		
		const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // מוסיף את האנימציה
        }
    });
};

// יצירת "צופה" שמחפש את כל האלמנטים עם מחלקת reveal
const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.15 // האנימציה תתחיל כשרואים 15% מהסקשן
});

// הפעלת הצופה על כל האלמנטים הרלוונטיים
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
        }); 
		
// לוגיקה להנפשת גלילה (Scroll Reveal)
        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        };

        const revealObserver = new IntersectionObserver(revealCallback, {
            threshold: 0.1 // ההנפשה תתחיל כש-10% מהסקשן נראה
        });

        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

        // פונקציות קיימות
        function openModal(src) {
            const modal = document.getElementById('imageModal');
            const img = document.getElementById('modalImage');
            img.src = src;
            modal.classList.remove('hidden');
            setTimeout(() => img.classList.add('scale-100'), 10);
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('imageModal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        function sendToWhatsApp(event) {
            event.preventDefault();
            const name = document.getElementById('userName').value;
            const phone = document.getElementById('userPhone').value;
            const msg = document.getElementById('userMsg').value;
            const text = `היי רבקי, אני רוצה הצעה! %0A*שם:* ${name}%0A*טלפון:* ${phone}%0A*פרטים:* ${msg}`;
            window.open(`https://wa.me/972542401770?text=${text}`, '_blank');
        }
