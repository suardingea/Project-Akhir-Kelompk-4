// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
            // Close mobile menu after click
            document.getElementById('navLinks').classList.remove('active');
        }
    });
});

// Scroll Animation - Fade In Effect
const fadeElements = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { 
    threshold: 0.1 
});

fadeElements.forEach(element => {
    appearOnScroll.observe(element);
});

// Book Package Function - Redirect to WhatsApp
function bookPackage(packageName) {
    const phoneNumber = '+62 85752980309'; // WhatsApp number (ganti dengan nomor asli)
    
    let message = '';
    
    if (packageName === 'Basic Boost') {
        message = `Halo The ELI Tutors! 

Saya tertarik dengan *Paket ${packageName}*:
- Durasi: 60 Menit
- Frekuensi: 8 Sesi/Bulan (2x seminggu)
- Harga: Rp 55.000/sesi (Total: Rp 440.000/bulan)
- Fokus: Pemahaman Dasar & PR

Mohon informasi lebih lanjut. Terima kasih!`;
    } else if (packageName === 'Academic Pro') {
        message = `Halo The ELI Tutors! 

Saya tertarik dengan *Paket ${packageName}* (POPULAR):
- Durasi: 90 Menit
- Frekuensi: 12 Sesi/Bulan (3x seminggu)
- Harga: Rp 85.000/sesi (Total: Rp 1.020.000/bulan)
- Fokus: Kenaikan Nilai & Pendalaman Materi

Mohon informasi lebih lanjut. Terima kasih!`;
    } else if (packageName === 'Elite Prep') {
        message = `Halo The ELI Tutors! 

Saya tertarik dengan *Paket ${packageName}* (PREMIUM):
- Durasi: 90 Menit
- Frekuensi: 16 Sesi/Bulan (4x seminggu)
- Harga: Rp 115.000/sesi (Total: Rp 1.840.000/bulan)
- Fokus: Intensif Ujian (UTBK, US, dll.)

Mohon informasi lebih lanjut. Terima kasih!`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('navLinks');
    
    if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Add active state to navigation on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll to Top Button (Optional - bisa ditambahkan)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/Hide Scroll to Top Button based on scroll position
window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scrollTopBtn');
    if (scrollButton) {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});

// Add parallax effect to hero section (Optional)
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
});

// Console log untuk debugging
console.log('The ELI Tutors Website Loaded Successfully! 📚');
console.log('Dibuat oleh: Evita, Lita, Intan');

// Auto-hide mobile menu on resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.getElementById('navLinks').classList.remove('active');
    }
});

// Prevent default behavior for hash links
window.addEventListener('DOMContentLoaded', function() {
    // Check if there's a hash in URL on load
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});

// Add loading animation (Optional)
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Track button clicks for analytics (Optional - bisa ditambahkan Google Analytics)
function trackButtonClick(buttonName) {
    console.log(`Button clicked: ${buttonName}`);
    // Di sini bisa ditambahkan Google Analytics tracking
    // gtag('event', 'click', { 'event_category': 'Button', 'event_label': buttonName });
}