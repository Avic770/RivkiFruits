tailwind.config = {
    theme: {
        extend: {
            fontFamily: { 
                sans: ['Assistant', 'sans-serif'] 
            },
            colors: {
                primary: { DEFAULT: '#F28C8C', light: '#FFF8F8', dark: '#E07676' }, 
                secondary: { DEFAULT: '#AED9A0', light: '#F4FAF1', dark: '#8FBC7F' }, 
                cream: { DEFAULT: '#FFF4E0', light: '#FFFDF9' },
                darkText: '#3D3D3D'
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. אנימציות חשיפה בגלילה (Scroll Reveal) ---
    const revealCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // תומך גם ב-reveal וגם ב-fade-in-up הישן
                entry.target.classList.add('active');
                entry.target.style.animationPlayState = 'running';
                revealObserver.unobserve(entry.target); // מפסיק להאזין אחרי שהופעל פעם אחת
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15 
    });

    document.querySelectorAll('.reveal, .fade-in-up').forEach(el => {
        if (el.classList.contains('fade-in-up')) el.style.animationPlayState = 'paused';
        revealObserver.observe(el);
    });


    // --- 2. לוגיקת המודאל (גלריית תמונות) ---
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const galleryImages = document.querySelectorAll('.gallery-img');

    // פונקציית פתיחה
    window.openModal = function(src) {
        if (!modal || !modalImg) return;
        modalImg.src = src;
        modal.classList.remove('hidden');
        setTimeout(() => modalImg.classList.add('scale-100'), 10);
        document.body.style.overflow = 'hidden';
    };

    // פונקציית סגירה
    window.closeModal = function() {
        if (!modal || !modalImg) return;
        modalImg.classList.remove('scale-100');
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    // האזנה לקליקים בגלריה
    galleryImages.forEach(img => {
        img.addEventListener('click', () => openModal(img.src));
    });

    // סגירה בלחיצה מחוץ לתמונה או ב-Escape
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") closeModal();
    });


    // --- 3. גלילה של הגלריה (חצים) ---
window.scrollSection = function(elementId, direction) {
    const container = document.getElementById(elementId);
    if (container) {
        // מחשב כמה לגלול: בערך 350 פיקסלים או רוחב כרטיס
        const scrollAmount = 350; 
        container.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
}; 

    // --- 4. שליחה לוואטסאפ ---
    window.sendToWhatsApp = function(event) {
        event.preventDefault();
        const name = document.getElementById('userName').value;
        const phone = document.getElementById('userPhone').value;
        const msg = document.getElementById('userMsg').value;
        
        const text = `היי רבקי, אני רוצה הצעה!%0A*שם:* ${name}%0A*טלפון:* ${phone}%0A*פרטים:* ${msg}`;
        window.open(`https://wa.me/972542401770?text=${text}`, '_blank');
    };

});
