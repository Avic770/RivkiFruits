 
        // קונפיגורציה להתאמת צבעים ב-Tailwind אם רוצים לשנות את הגוון הכתום
      tailwind.config = {
            theme: {
                extend: {
                   colors: {
                    // גווני המותג בגרסאות עדינות
                    primary: { DEFAULT: '#F28C8C', light: '#F28C8C' }, // קורל/אבטיח
                    secondary: { DEFAULT: '#AED9A0', light: '#F4FAF1' }, // מנטה/מלון
                    cream: { DEFAULT: '#FFF4E0', light: '#FFF9F0' }, // שמנת
                    darkText: '#4A4A4A'
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

        }); 
		
function scrollGallery(direction) {
    const container = document.getElementById('scrollGallery');
    const scrollAmount = 350; // כמות הפיקסלים להזזה בכל לחיצה
    
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

function sendToWhatsApp(event) {
    event.preventDefault(); // מונע מהטופס לרענן את הדף

    // הגדרות מספר הטלפון (שני למספר שלך בפורמט בינלאומי ללא פלוס)
    const myNumber = "972542401770"; 

    // שליפת הנתונים מהשדות
    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;
    const service = document.getElementById('userPath').value;
    const message = document.getElementById('userMsg').value;

    // בניית תוכן ההודעה
    const text = `היי רבקי, אני רוצה הצעה לאירוע!` +
                 `*שם:* ${name}%0A` +
                 `*טלפון:* ${phone}%0A` +
                 `*שירות מבוקש:* ${service}%0A` +
                 `*פרטים נוספים:* ${message}`;

    // יצירת הקישור ופתיחתו בחלון חדש
    const whatsappUrl = `https://wa.me/${myNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
}
