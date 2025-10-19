// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
    });
});

// GSAP Animations
window.addEventListener('load', () => {
    // Hero animation
    gsap.to(".hero-left h1", {opacity:1, x:0, duration:1, delay:0.3, ease:"power2.out"});
    gsap.to(".hero-left p", {opacity:1, x:0, duration:1, delay:0.6, ease:"power2.out"});
    gsap.to(".hero-left .btn", {opacity:1, x:0, duration:1, delay:0.9, ease:"power2.out"});
    gsap.to(".hero-right img", {opacity:1, x:0, duration:1, delay:1, ease:"power2.out"});

    // Skill bars
    document.querySelectorAll('.skill-bar').forEach(bar => {
        gsap.to(bar.querySelector('::after'), {width: bar.getAttribute('data-progress'), duration:1.5, ease:"power2.out"});
        // Alternative approach using inner element
        const inner = document.createElement('div');
        inner.style.height='100%';
        inner.style.width='0';
        inner.style.background='#0b3d91';
        inner.style.borderRadius='10px';
        bar.appendChild(inner);
        gsap.to(inner, {width: bar.getAttribute('data-progress'), duration:1.5, ease:"power2.out"});
    });
});
