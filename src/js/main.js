// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the loader
    initLoader();
    
    // Initialize the navigation menu
    initNavigation();
    
    // Initialize theme switcher
    initThemeSwitcher();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize parallax effect
    initParallax();
    
    // Initialize carousel
    initCarousel();
    
    // Initialize stats counter
    initStatsCounter();
    
    // Initialize ripple effect
    initRippleEffect();
    
    // Initialize features section
    loadFeatures();
    
    // Initialize showcase section
    loadShowcaseItems();
    
    // Initialize testimonials section
    loadTestimonials();
    
    // Initialize brand kits selection
    initBrandKits();
});

// Lunatic Loader functionality
function initLoader() {
    const loaderContainer = document.querySelector('.loader-container');
    const loaderProgress = document.querySelector('.lunatic-loader-progress');
    const lunaticLogo = document.querySelector('.lunatic-logo');
    const lunaticBrand = document.querySelector('.lunatic-brand');
    const lunaticCounter = document.querySelector('.lunatic-counter');
    const counterNumber = document.querySelector('.counter-number');
    
    // Optional - Audio feedback
    let loaderAudio;
    try {
        loaderAudio = new Audio();
        loaderAudio.volume = 0.2; // Keep audio subtle
        
        // Loop through different subtle UI sounds for loader effect
        const loadingSounds = [
            { time: 100, src: 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAADmADl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAZmAAAAAAAAA5jHD9DLAAAAAAD/+xAEAAAAQCYJMYEIHsAuI7ggIGPgRAhQL/wkMADQQuvwQHgBSYEMQvEkACYi+j/31jXxB+j/xCwiEQiF5iIRChCJz+J8QeIRCIRCdPwQOEPhAxAQnT89P3aM0Wx5JpgMGTJkyA4BgGDJkyZMmTJwwHAMvZkI5hBMwCZMmcP4YITJkyE4ggtBR//sQRAsAEDYMTVjAkogC5F3BGBIRAKQrQQM/QhANhSe8YAgk0U1WAQDxCJx8H6Jw+Hw+dP0IhEIhc+n5P/UPn/8v/8Qn86QUJHs47/Kf4hs8+1AgO6M4BBx+vr//+DtQIBuU2JG05rQhDnJw6QHKDg4OBiAAADQRV+g1+f/7EGQKgBAKFNHAzxCADiVKQ4nsgEAYYTkpMPQIAQZLoDCecAT83/i4uQ4uLi5+h9+h6PX7h4eHl8X+XwfD5f+Pe/Vzf1c/p9Pr9Dzr9++v1Y9Xru7x/q9Xr1c/X1fn4PD5fl/0+j//p+gAAAHRJJeyLrGAAAAA//sQZAAAEAAAH+AAAAIAAAP8AAAAQAAAf4AAAAgAAA/wAAABExAAGpAAAAATEAAakAAAABMQABqQAAAAExAAGpAAAAATEAAakAAAABMQABqQAAAAExAAGpAA==' },
            { time: 2000, src: 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAADmADl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAEEAAAAAAAAA5icgcdzAAAAAAD/+zAUAAAANENDRkYCFzYA2NjYUAgQ8KP4UfioEKAQWfAIUPxQ+FD4KAQIEbjY2NjY2P4oBAh+Pij6Qaaeo02m1XTlXRSzTQk2fLtNd1qamp1fNS7Lsv5qbQ0PlXlki7OzY+Veb2q7v/iqqqocC/gX8C+X+Bf/+wBkCQAQAhNN+BDxAAXBiY8KHBAAHCE734EOCAUAZpzwI+EAfiX/4DDD/DD/gP+A/HjOcwwwwwMMMNprT4YbXa6Bg0ng0PDTEun/xLumsfDkPS4YeH3DDD4YYYamIYYYYeGGH//Ewww//6nhhhhhgAAZADAxAAAAAAAcAAAAAAA=' },
            { time: 2800, src: 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAYAAAAnBLUfgR8ICfB6m/Ah4QEYDlN+BDwgGkHKb8CHhAQEBAQEDAwMEBADBAQEAwMEBAQECAgP8QEBAQICAgQEBAgID//wgICAgQEBAgIP/EAwMDAwMDAwMDAx//A//+xDECgATcE1T7PMoAkAcpvx4eEBLgTU349XgCVBym/Hh4QAwMDAx/wMDAwN/gYGBv+Bgb/A3+Bgb/A3/YGBv8Df9gwN/gb//YQN/gb///8BETAfDwMBVVVSsrGHh4fp2dRsaQfDw8DAwVVVVfrKysrOzs4eHhsaQ8PDw2NjY2VlZ//l5eXjCTuc//6kCpUqVIiIiIiAAAAAAAAAA=' },
            { time: 3500, src: 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAYAAAAmgYUX4EPCAXQbpvwIeEAsgzTfgQ8IBbBmm/Ah4QICAgICAwMDBAQEAQEBAQEBAgICAwMDAQEBAQECAgICAwP/EBAQECAgICAwM//xAQEBAgICAv//EO//4BAQEBAQEB//wr//4OLi//+xBECYATSE1L7GcoAigXo7YeHgBIYM034EPCAWAZpvwIeEAEEEBf4OLi4uLiBft+3bfwQF/h3bft+wQF/h2CCAgIGqrP7ft+37dlA77ft+37CDfwg3++wk3/bOiowyqKPj4+YkJCwsLJpSiYmJioqEmJiTExMSEhIVFRUVFRQpKSklJScnJyoqKkpKSkpKioqKioqK//sQZA4AEcwtQ0s8QgI0Bah9Z4hARsC1DTGcAAigFqKmM4ADoqKioqKi9PT09PT/T09VVVXV1dVVVXd3f/d3d1X////X///6urqqqr/V//6enp6en/////6enpeXl7+/v7+/v9/f+/v////9/f9/f//4+PiDjUVAA=' }
        ];
        
        // Play sound effects at specific times
        loadingSounds.forEach(sound => {
            setTimeout(() => {
                try {
                    loaderAudio.src = sound.src;
                    loaderAudio.play().catch(() => {}); // Catch and ignore autoplay errors
                } catch (e) {} // Ignore audio errors
            }, sound.time);
        });
    } catch (e) {
        // Audio failed to initialize - ignore, non-critical
    }
    
    // Ensure elements are initially hidden until their animations start
    if (lunaticLogo) lunaticLogo.style.opacity = '0';
    if (lunaticBrand) lunaticBrand.style.opacity = '0';
    if (lunaticCounter) lunaticCounter.style.opacity = '0';
    
    // Update counter with a counting effect
    if (counterNumber) {
        setTimeout(() => {
            let count = 0;
            const interval = setInterval(() => {
                count++;
                // Format to always show 2 digits
                counterNumber.textContent = count < 10 ? `0${count}` : count;
                if (count >= 4) {
                    clearInterval(interval);
                }
            }, 180);
        }, 3000);
    }
    
    // Add some dynamic animation 
    document.addEventListener('mousemove', function(e) {
        if (lunaticLogo && getComputedStyle(lunaticLogo).opacity > 0) {
            const xMove = (e.clientX - window.innerWidth / 2) / 100;
            const yMove = (e.clientY - window.innerHeight / 2) / 100;
            lunaticLogo.style.transform = `translate(calc(-50% + ${xMove}px), calc(-50% + ${yMove}px))`;
        }
    });
    
    // We'll let the CSS handle most animations but use JS for transition to site
    setTimeout(() => {
        completeLoading();
    }, 4200); // Total time for all animations + a small buffer
    
    // Complete loading animation and hide loader
    function completeLoading() {
        // Fade out the entire loader container with a smooth transition
        setTimeout(() => {
            loaderContainer.classList.add('loader-hidden');
            
            // Play a subtle completion sound
            try {
                if (loaderAudio) {
                    loaderAudio.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAEsAC1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAUaAAAAAAAABLAVryHNAAAAAAD/+5BkAA/kdE1F7DygIkgdp7GHFAR0Js9MYKACSBmbsYeUBAAAAABgMBgMBgPwoCAIfD73Wf5f/+CnKJv/+DodFKCazuinKJoPBTkEBANBTkEzQfwU5QfoJmhocoh+E000HuQzQUBA0HnvQUOUV7kM0FBzqfyhyg/QTNNBTkMir//QUOQabQUFBFBCRJESIkRMrJESIkREzMzVVVVVVJESIiRETMzM1VVVVVVVVVWZmZmZmqqqqqqqqszMzNVKrMzMzNVVVVVVVn/7kmQMj/QDG0ZrBilQKYAXzWGCAgAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==';
                    loaderAudio.play().catch(() => {});
                }
            } catch (e) {}
            
            // Remove loader from DOM after transition ends
            loaderContainer.addEventListener('transitionend', () => {
                if (document.body.contains(loaderContainer)) {
                    document.body.removeChild(loaderContainer);
                }
            });
        }, 500);
    }
    
    // Fallback to ensure loader eventually hides even if something goes wrong
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (document.body.contains(loaderContainer)) {
                loaderContainer.classList.add('loader-hidden');
                loaderContainer.addEventListener('transitionend', () => {
                    if (document.body.contains(loaderContainer)) {
                        document.body.removeChild(loaderContainer);
                    }
                });
            }
        }, 6000); // Fallback timeout
    });
    
    // Update ARIA values for accessibility
    if (loaderContainer) {
        const updateLoadingProgress = (progress) => {
            loaderContainer.setAttribute('aria-valuenow', Math.round(progress * 100));
            
            // Update screen reader text at key points
            const srOnly = document.querySelector('.sr-only');
            if (srOnly) {
                if (progress < 0.3) {
                    srOnly.textContent = 'Loading Lunatic website, please wait...';
                } else if (progress < 0.7) {
                    srOnly.textContent = 'Almost ready...';
                } else if (progress < 1) {
                    srOnly.textContent = 'Finalizing and preparing the website...';
                } else {
                    srOnly.textContent = 'Loading complete! Entering the website now.';
                }
            }
        };
        
        // Update progress at key points
        setTimeout(() => updateLoadingProgress(0.3), 1000);
        setTimeout(() => updateLoadingProgress(0.7), 2000);
        setTimeout(() => updateLoadingProgress(1), 3500);
    }
}

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Change navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 5px 20px var(--shadow-color)';
        } else {
            navbar.style.boxShadow = '0 2px 10px var(--shadow-color)';
        }
    });
}

// Theme switcher functionality
function initThemeSwitcher() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check if user has set a theme preference
    const currentTheme = localStorage.getItem('theme');
    
    // If current theme is dark, check the checkbox
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.checked = true;
    }
    
    // When theme toggle is clicked, toggle the theme
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Enhanced Scroll animations functionality
function initScrollAnimations() {
    const animationTypes = [
        '.animate-on-scroll', 
        '.fade-in', 
        '.slide-from-left', 
        '.slide-from-right',
        '.pop-up',
        '.rotate-in',
        '.bounce-in'
    ];
    
    // Combine all animation selectors
    const selector = animationTypes.join(', ');
    const elementsToAnimate = document.querySelectorAll(selector);
    
    // Set staggered delays for grouped elements
    const staggerGroups = document.querySelectorAll('.stagger-group');
    staggerGroups.forEach(group => {
        const children = group.querySelectorAll(selector);
        children.forEach((child, index) => {
            const delay = index * 0.15; // 150ms between each element
            child.style.setProperty('--delay', `${delay}s`);
        });
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // First check if element is already animated
                if (!entry.target.classList.contains('show')) {
                    // Add a small random delay for a more natural feel
                    // Don't add random delay to elements that already have a staggered delay
                    if (!entry.target.style.getPropertyValue('--delay')) {
                        const randomDelay = Math.random() * 0.2; // 0 to 200ms
                        entry.target.style.setProperty('--delay', `${randomDelay}s`);
                    }
                    
                    // Trigger animation after a small delay to allow for smooth transition
                    setTimeout(() => {
                        entry.target.classList.add('show');
                    }, 10);
                }
                
                // Optional: Don't unobserve to allow re-animation when scrolling back up
                // This can be controlled by a data attribute
                const shouldReplay = entry.target.dataset.replay === 'true';
                if (!shouldReplay) {
                    observer.unobserve(entry.target);
                }
            } else {
                // If replay is enabled, remove the show class when element is out of view
                const shouldReplay = entry.target.dataset.replay === 'true';
                if (shouldReplay) {
                    entry.target.classList.remove('show');
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' // Slightly before element enters viewport
    });
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
    
    // Add scroll-progress triggered animations
    const handleScrollProgress = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
        
        // Add scroll percentage as a CSS variable for use in animations
        document.documentElement.style.setProperty('--scroll-percentage', scrollPercentage);
        
        // Trigger animations at specific scroll points
        const scrollTriggeredElements = document.querySelectorAll('[data-scroll-trigger]');
        scrollTriggeredElements.forEach(element => {
            const triggerPoint = parseFloat(element.dataset.scrollTrigger);
            if (scrollPercentage >= triggerPoint && !element.classList.contains('triggered')) {
                element.classList.add('triggered');
            } else if (scrollPercentage < triggerPoint && element.classList.contains('triggered')) {
                element.classList.remove('triggered');
            }
        });
    };
    
    window.addEventListener('scroll', handleScrollProgress);
    handleScrollProgress(); // Initial call
}

// Enhanced Parallax effect functionality with mouse movement
// Enhanced Parallax functionality
function initParallax() {
    const heroSection = document.querySelector('.hero-section');
    const parallaxBg = document.querySelector('.parallax-bg');
    const parallaxShapes = document.querySelectorAll('.parallax-shape');
    const heroContent = document.querySelector('.hero-content');
    const heroFrames = document.querySelectorAll('.hero-frame');
    
    if (heroSection) {
        // Initial animation for hero elements
        setTimeout(() => {
            document.querySelectorAll('.hero-frame').forEach((frame, index) => {
                frame.style.opacity = '1';
            });
        }, 500);
        
        // Scroll parallax effect with enhanced depth
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const scrollFactor = Math.min(scrollPosition / window.innerHeight, 1);
            
            if (parallaxBg) {
                parallaxBg.style.transform = `translateY(${scrollPosition * 0.4}px) scale(${1 - scrollFactor * 0.1})`;
            }
            
            // Apply different scroll speeds to different layers
            heroFrames.forEach((frame, index) => {
                const depth = (index + 1) * 0.15;
                frame.style.transform = `translateY(${scrollPosition * depth}px) rotateX(${10 - scrollFactor * 20}deg) rotateY(${scrollPosition * 0.05}deg)`;
            });
            
            // Fade out content on scroll
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
                heroContent.style.opacity = Math.max(1 - scrollFactor * 1.5, 0);
            }
            
            // Parallax shapes move at different speeds while scrolling
            parallaxShapes.forEach((shape, index) => {
                const direction = index % 2 === 0 ? 1 : -1;
                const speed = (index + 1) * 0.1;
                shape.style.transform = `translateY(${scrollPosition * speed * direction}px)`;
            });
        });
        
        // Enhanced mouse movement parallax effect with depth
        heroSection.addEventListener('mousemove', function(e) {
            // Calculate mouse position relative to center of section
            const mouseX = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
            const mouseY = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
            
            requestAnimationFrame(() => {
                // Apply different movement factors to shapes based on their "depth"
                parallaxShapes.forEach((shape, index) => {
                    const factor = (index + 1) * 15;
                    const currentTransform = getComputedStyle(shape).transform;
                    
                    // Combine existing animation transform with mouse movement
                    // We're just adding mouse movement effect on top of CSS animations
                    shape.style.transform = `translate(${mouseX * factor}px, ${mouseY * factor}px)`;
                });
                
                // Move frames with mouse for 3D effect
                heroFrames.forEach((frame, index) => {
                    const factor = (index + 1) * 5;
                    frame.style.transform = `rotateX(${mouseY * -5}deg) rotateY(${mouseX * 10}deg) translateZ(${(index + 1) * 30}px)`;
                });
                
                // Subtle counter-movement of hero content for depth effect
                if (heroContent) {
                    heroContent.style.transform = `translate(${mouseX * -10}px, ${mouseY * -10}px)`;
                }
                
                // Move background slightly
                if (parallaxBg) {
                    parallaxBg.style.transform = `translate(${mouseX * -5}px, ${mouseY * -5}px)`;
                }
            });
        });
        
        // Reset transforms when mouse leaves hero section
        heroSection.addEventListener('mouseleave', function() {
            parallaxShapes.forEach(shape => {
                shape.style.transform = '';
            });
            
            if (heroContent) {
                heroContent.style.transform = '';
            }
            
            heroFrames.forEach(frame => {
                frame.style.transform = '';
            });
            
            if (parallaxBg) {
                parallaxBg.style.transform = '';
            }
        });
    }
}

// Enhanced Carousel functionality
function initCarousel() {
    const carousel = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const dotsContainer = document.querySelector('.carousel-dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const progressBar = document.querySelector('.progress-bar');
    
    if (!carousel || items.length === 0) return;
    
    let currentIndex = 0;
    let isAnimating = false;
    const slideDelay = 5000; // ms
    let slideInterval;
    let progressInterval;
    
    // Create dots for each slide
    items.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            if (isAnimating) return;
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    // Function to go to specific slide
    function goToSlide(index) {
        if (isAnimating) return;
        isAnimating = true;
        
        if (index < 0) index = items.length - 1;
        if (index >= items.length) index = 0;
        
        // Remove active class from all items
        items.forEach(item => item.classList.remove('active'));
        
        // Update active state after a small delay to allow transition
        carousel.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
        
        // Reset and restart progress bar
        resetProgressBar();
        
        // Update active dot
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        // Add active class to current item after transition starts
        setTimeout(() => {
            items[currentIndex].classList.add('active');
            isAnimating = false;
        }, 50);
    }
    
    // Progress bar functionality
    function startProgressBar() {
        let progress = 0;
        const increment = 100 / (slideDelay / 100); // Percentage to increment every 100ms
        
        resetProgressBar();
        
        progressInterval = setInterval(() => {
            progress += increment;
            if (progressBar) progressBar.style.width = `${progress}%`;
            
            if (progress >= 100) {
                clearInterval(progressInterval);
            }
        }, 100);
    }
    
    function resetProgressBar() {
        if (progressInterval) clearInterval(progressInterval);
        if (progressBar) progressBar.style.width = '0%';
        startProgressBar();
    }
    
    // Start auto-sliding
    function startSlideInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, slideDelay);
    }
    
    // Event listeners for prev/next buttons with ripple effect
    prevBtn.addEventListener('click', (e) => {
        createRippleEffect(e, prevBtn);
        goToSlide(currentIndex - 1);
        startSlideInterval();
    });
    
    nextBtn.addEventListener('click', (e) => {
        createRippleEffect(e, nextBtn);
        goToSlide(currentIndex + 1);
        startSlideInterval();
    });
    
    // Ripple effect for buttons
    function createRippleEffect(e, button) {
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - button.getBoundingClientRect().left - diameter / 2}px`;
        circle.style.top = `${e.clientY - button.getBoundingClientRect().top - diameter / 2}px`;
        circle.classList.add('ripple-circle');
        
        const rippleEffect = button.querySelector('.ripple-circle');
        if (rippleEffect) {
            rippleEffect.remove();
        }
        
        button.appendChild(circle);
        
        setTimeout(() => {
            circle.remove();
        }, 500);
    }
    
    // Handle pause and resume on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
        clearInterval(progressInterval);
        if (progressBar) progressBar.style.width = progressBar.style.width; // Freeze the progress
    });
    
    carousel.addEventListener('mouseleave', () => {
        startSlideInterval();
        resetProgressBar();
    });
    
    // Touch swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(slideInterval);
        clearInterval(progressInterval);
    }, {passive: true});
    
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startSlideInterval();
        resetProgressBar();
    }, {passive: true});
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left
            goToSlide(currentIndex + 1);
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right
            goToSlide(currentIndex - 1);
        }
    }
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToSlide(currentIndex - 1);
            startSlideInterval();
            resetProgressBar();
        } else if (e.key === 'ArrowRight') {
            goToSlide(currentIndex + 1);
            startSlideInterval();
            resetProgressBar();
        }
    });
    
    // Add accessibility features
    prevBtn.setAttribute('aria-label', 'Previous slide');
    nextBtn.setAttribute('aria-label', 'Next slide');
    dots.forEach((dot, index) => {
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.setAttribute('tabindex', '0');
        dot.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                goToSlide(index);
                startSlideInterval();
                resetProgressBar();
                e.preventDefault();
            }
        });
    });
    
    // Initialize
    items[0].classList.add('active');
    startSlideInterval();
    startProgressBar();
}

// Stats counter functionality
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    // Create intersection observer with better options for earlier triggering
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'));
                let count = 0;
                let duration = 2500; // Increased duration for more visible counting effect
                const startTime = performance.now();
                
                // Add some randomness to make numbers change at different rates
                const randomFactor = 0.8 + Math.random() * 0.4; // Between 0.8 and 1.2
                duration *= randomFactor;
                
                // More granular counting updates
                const updateCount = (currentTime) => {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    
                    // Use easeOutQuart for smooth animation with slight pause at beginning
                    const easeProgress = progress < 0.1 ? progress * 3 : 1 - Math.pow(1 - progress, 4);
                    const currentCount = Math.floor(easeProgress * countTo);
                    
                    // Format numbers with commas for better readability
                    target.textContent = currentCount.toLocaleString();
                    
                    // Add counter sound effect for auditory feedback (optional)
                    if (progress > 0.1 && progress < 0.9 && Math.random() > 0.85) {
                        try {
                            const tickAudio = new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAADmADl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAuiAAAAAAAAA5i/LvRzAAAAAAD/+xDkAAAF0BLdRTAAHrgJbnOYAQCQBAAAgAAFAAjEfhPgIcCQQQb8+/jffvv9B9//IPwQfhhyD4fB8H4Pn/gg+f//wQfB/9CDAcIH/g+CAI4QhCDgCAIA+D5//y');
                            tickAudio.volume = 0.05;
                            tickAudio.play().catch(() => {});
                        } catch (e) {}
                    }
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    } else {
                        // Final value with proper formatting
                        target.textContent = countTo.toLocaleString();
                        
                        // Add a subtle bounce effect at the end
                        target.style.transform = 'scale(1.1)';
                        setTimeout(() => {
                            target.style.transform = 'scale(1)';
                        }, 200);
                    }
                };
                
                // Start animation with requestAnimationFrame for better performance
                requestAnimationFrame(updateCount);
                observer.unobserve(target);
                
                // Animate the stat card
                const statCard = target.closest('.stat-card');
                if (statCard) {
                    const animation = statCard.getAttribute('data-animation') || 'fade-up';
                    statCard.classList.add(animation);
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px' // Start animation a bit earlier
    });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
    
    // Animate stat icon backgrounds with random delays
    const statIconBgs = document.querySelectorAll('.stat-icon-bg');
    statIconBgs.forEach((bg, index) => {
        const delay = index * 0.3;
        bg.style.animationDelay = `${delay}s`;
    });
}

// Enhanced Ripple effect functionality
function initRippleEffect() {
    const rippleElements = document.querySelectorAll('.ripple');
    
    rippleElements.forEach(element => {
        // Add position relative if not already set
        if (getComputedStyle(element).position === 'static') {
            element.style.position = 'relative';
        }
        
        element.addEventListener('click', function(e) {
            // Get the closest parent element that's actually the event target
            // This helps with nested elements like buttons with icons
            const target = e.currentTarget;
            
            // Check if the element has light or dark background to determine ripple color
            const bgColor = getComputedStyle(target).backgroundColor;
            const isLightBg = isLightColor(bgColor);
            
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-circle');
            
            if (!isLightBg) {
                ripple.classList.add('ripple-dark');
            }
            
            // Calculate position relative to the target
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate the diameter based on the larger dimension of the element
            const diameter = Math.max(rect.width, rect.height) * 2;
            
            ripple.style.width = ripple.style.height = `${diameter}px`;
            ripple.style.left = `${x - diameter / 2}px`;
            ripple.style.top = `${y - diameter / 2}px`;
            
            // Remove any existing ripple
            const existingRipple = target.querySelector('.ripple-circle');
            if (existingRipple) {
                existingRipple.remove();
            }
            
            target.appendChild(ripple);
            
            // Remove ripple after animation completes
            setTimeout(() => {
                ripple.remove();
            }, 800);
        });
        
        // Add keyboard support for accessibility
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                const target = e.currentTarget;
                const ripple = document.createElement('span');
                ripple.classList.add('ripple-circle');
                
                // Center the ripple on keyboard activation
                const rect = target.getBoundingClientRect();
                const diameter = Math.max(rect.width, rect.height) * 2;
                
                ripple.style.width = ripple.style.height = `${diameter}px`;
                ripple.style.left = `${rect.width / 2 - diameter / 2}px`;
                ripple.style.top = `${rect.height / 2 - diameter / 2}px`;
                
                // Remove any existing ripple
                const existingRipple = target.querySelector('.ripple-circle');
                if (existingRipple) {
                    existingRipple.remove();
                }
                
                target.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 800);
            }
        });
    });
    
    // Helper function to determine if a color is light or dark
    function isLightColor(color) {
        // Default to light if we can't determine
        if (!color || color === 'transparent' || color === 'rgba(0, 0, 0, 0)') {
            return true;
        }
        
        // Extract RGB components
        let r, g, b;
        
        if (color.startsWith('rgb')) {
            const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
            if (match) {
                r = parseInt(match[1]);
                g = parseInt(match[2]);
                b = parseInt(match[3]);
            }
        } else if (color.startsWith('#')) {
            color = color.replace('#', '');
            r = parseInt(color.slice(0, 2), 16);
            g = parseInt(color.slice(2, 4), 16);
            b = parseInt(color.slice(4, 6), 16);
        } else {
            // Can't determine, assume light
            return true;
        }
        
        // Calculate luminance - standard formula
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance > 0.5;
    }
}

// Enhanced Features with more detailed content
function loadFeatures() {
    const featuresContainer = document.querySelector('.features-container');
    if (!featuresContainer) return;
    
    const features = [
        {
            icon: 'fas fa-mobile-alt',
            title: 'Responsive Design',
            description: 'Our designs look great on all devices, from mobile phones to large desktop screens. We use fluid layouts, flexible images, and CSS Grid/Flexbox to ensure optimal viewing experience.',
            benefits: ['Mobile-First Approach', 'Flexible Grid Layouts', 'Optimized Images'],
            detailLink: '#responsive',
            bgColor: '#e8f5e9',
            accentColor: '#4CAF50'
        },
        {
            icon: 'fas fa-paint-brush',
            title: 'Modern UI/UX',
            description: 'Beautiful, intuitive interfaces that provide excellent user experience. We follow the latest design trends while maintaining core usability principles for maximum engagement.',
            benefits: ['User-Centered Design', 'Micro-interactions', 'Visual Hierarchy'],
            detailLink: '#ui-ux',
            bgColor: '#e3f2fd',
            accentColor: '#2196F3'
        },
        {
            icon: 'fas fa-tachometer-alt',
            title: 'Performance Optimization',
            description: 'Lightning-fast loading times and smooth interactions for best user experience. We optimize code, compress assets, and implement lazy loading for maximum speed and efficiency.',
            benefits: ['Core Web Vitals Focus', 'Code Splitting', 'Resource Prioritization'],
            detailLink: '#performance',
            bgColor: '#fff8e1',
            accentColor: '#FFC107'
        },
        {
            icon: 'fas fa-universal-access',
            title: 'Accessibility',
            description: 'Inclusive design ensuring everyone can use our websites regardless of abilities. We follow WCAG guidelines and test with screen readers for maximum compatibility.',
            benefits: ['ARIA Attributes', 'Keyboard Navigation', 'Color Contrast Compliance'],
            detailLink: '#accessibility',
            bgColor: '#ffebee',
            accentColor: '#F44336'
        },
        {
            icon: 'fas fa-search',
            title: 'SEO Friendly',
            description: 'Optimized for search engines to help your business get discovered online. We implement schema markup, semantic HTML, and metadata optimization to improve your search rankings.',
            benefits: ['Schema.org Markup', 'Semantic Structure', 'Performance Metrics'],
            detailLink: '#seo',
            bgColor: '#f3e5f5',
            accentColor: '#9C27B0'
        },
        {
            icon: 'fas fa-code',
            title: 'Clean Code Architecture',
            description: 'Well-structured and maintainable code for long-term success and easy updates. We follow industry standards, use design patterns, and write extensive documentation.',
            benefits: ['Modular Structure', 'Version Control', 'Comprehensive Documentation'],
            detailLink: '#code',
            bgColor: '#e0f7fa',
            accentColor: '#00BCD4'
        },
        {
            icon: 'fas fa-layer-group',
            title: 'Advanced Animations',
            description: 'Smooth, purposeful animations that enhance the user experience without sacrificing performance. We use modern CSS and JavaScript techniques for efficient animations.',
            benefits: ['GPU Acceleration', 'Optimized Rendering', 'Meaningful Motion'],
            detailLink: '#animations',
            bgColor: '#ede7f6',
            accentColor: '#673AB7'
        },
        {
            icon: 'fas fa-lock',
            title: 'Security Focus',
            description: 'Implementing modern security practices to keep your website and user data safe. We follow OWASP guidelines and regularly update dependencies to prevent vulnerabilities.',
            benefits: ['HTTPS Implementation', 'Input Validation', 'Regular Security Audits'],
            detailLink: '#security',
            bgColor: '#fce4ec',
            accentColor: '#E91E63'
        }
    ];
    
    // Clear any existing content
    featuresContainer.innerHTML = '';
    
    // Add features with enhanced styling and animations
    features.forEach((feature, index) => {
        const featureCard = document.createElement('div');
        featureCard.classList.add('feature-card', 'animate-on-scroll');
        featureCard.dataset.category = feature.title.toLowerCase().replace(/\s+/g, '-');
        featureCard.style.setProperty('--delay', `${index * 0.1}s`);
        featureCard.style.setProperty('--accent-color', feature.accentColor);
        featureCard.style.setProperty('--bg-hint', feature.bgColor);
        
        const benefitsList = feature.benefits.map(benefit => 
            `<li class="feature-benefit"><i class="fas fa-check-circle"></i> <span>${benefit}</span></li>`
        ).join('');
        
        featureCard.innerHTML = `
            <div class="feature-icon-wrapper">
                <div class="feature-icon-bg"></div>
                <div class="feature-icon">
                    <i class="${feature.icon}"></i>
                </div>
            </div>
            <h3 class="feature-title">${feature.title}</h3>
            <p class="feature-description">${feature.description}</p>
            <ul class="feature-benefits">
                ${benefitsList}
            </ul>
            <div class="feature-actions">
                <a href="${feature.detailLink}" class="feature-btn ripple">
                    <span>Learn More</span>
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
            <div class="feature-decoration"></div>
        `;
        
        featuresContainer.appendChild(featureCard);
        
        // Add hover effect listeners
        featureCard.addEventListener('mouseenter', function() {
            this.classList.add('feature-hover');
        });
        
        featureCard.addEventListener('mouseleave', function() {
            this.classList.remove('feature-hover');
        });
    });
}

// Enhanced Showcase functionality with filtering
function loadShowcaseItems() {
    const showcaseGrid = document.querySelector('.showcase-grid');
    if (!showcaseGrid) return;
    
    const showcaseItems = [
        {
            image: 'https://source.unsplash.com/random/600x400?website',
            title: 'E-commerce Platform',
            category: 'Web Development',
            filter: 'web'
        },
        {
            image: 'https://source.unsplash.com/random/600x400?app',
            title: 'Mobile App Design',
            category: 'UI/UX Design',
            filter: 'app'
        },
        {
            image: 'https://source.unsplash.com/random/600x400?brand',
            title: 'Brand Identity',
            category: 'Branding',
            filter: 'branding'
        },
        {
            image: 'https://source.unsplash.com/random/600x400?dashboard',
            title: 'Admin Dashboard',
            category: 'Web Application',
            filter: 'web'
        },
        {
            image: 'https://source.unsplash.com/random/600x400?portfolio',
            title: 'Portfolio Website',
            category: 'Web Development',
            filter: 'web'
        },
        {
            image: 'https://source.unsplash.com/random/600x400?graphic',
            title: 'Marketing Materials',
            category: 'Graphic Design',
            filter: 'branding'
        },
        {
            image: 'https://source.unsplash.com/random/600x400?ui',
            title: 'Travel App UI Kit',
            category: 'UI/UX Design',
            filter: 'ui'
        },
        {
            image: 'https://source.unsplash.com/random/600x400?mobile',
            title: 'Fitness Tracker App',
            category: 'Mobile Development',
            filter: 'app'
        }
    ];
    
    // Create showcase items
    showcaseItems.forEach((item, index) => {
        const showcaseItem = document.createElement('div');
        showcaseItem.classList.add('showcase-item', 'pop-up');
        showcaseItem.dataset.category = item.filter;
        
        // Add animation delay based on index
        showcaseItem.style.setProperty('--delay', `${index * 0.1}s`);
        
        showcaseItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="showcase-image">
            <div class="showcase-overlay">
                <h3 class="showcase-title">${item.title}</h3>
                <p class="showcase-category">${item.category}</p>
                <a href="#" class="btn btn-primary btn-sm ripple showcase-btn" aria-label="View ${item.title} project">View Project</a>
            </div>
        `;
        
        showcaseGrid.appendChild(showcaseItem);
    });
    
    // Initialize filtering functionality
    initializeFiltering();
    
    // Initialize clicking functionality
    initializeShowcaseInteractions();
    
    // Function to initialize filtering
    function initializeFiltering() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Filter showcase items
                const items = document.querySelectorAll('.showcase-item');
                
                items.forEach(item => {
                    // First remove all animate classes
                    item.classList.remove('pop-up', 'show');
                    
                    // Reset style for animation
                    setTimeout(() => {
                        item.classList.add('pop-up');
                        
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                            // Use setTimeout to trigger animation after display is set
                            setTimeout(() => {
                                item.classList.add('show');
                            }, 50);
                        } else {
                            item.style.display = 'none';
                        }
                    }, 50);
                });
            });
        });
    }
    
    // Function to initialize showcase interactions
    function initializeShowcaseInteractions() {
        const items = document.querySelectorAll('.showcase-item');
        
        // Parallax effect on image hover
        items.forEach(item => {
            item.addEventListener('mousemove', function(e) {
                const img = this.querySelector('.showcase-image');
                const boundingRect = this.getBoundingClientRect();
                
                // Calculate mouse position relative to element
                const mouseX = e.clientX - boundingRect.left;
                const mouseY = e.clientY - boundingRect.top;
                
                // Calculate percentage across element
                const xPercent = mouseX / boundingRect.width;
                const yPercent = mouseY / boundingRect.height;
                
                // Calculate offset for image (subtle movement)
                const xOffset = (xPercent - 0.5) * 10; // -5px to 5px
                const yOffset = (yPercent - 0.5) * 10;
                
                // Apply transform to create parallax effect
                img.style.transform = `translate(${xOffset}px, ${yOffset}px) scale(1.1)`;
            });
            
            // Reset image position on mouse leave
            item.addEventListener('mouseleave', function() {
                const img = this.querySelector('.showcase-image');
                img.style.transform = '';
            });
        });
    }
}

// Load testimonials dynamically with interactive slider
function loadTestimonials() {
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    const testimonialDots = document.querySelector('.testimonial-dots');
    if (!testimonialsSlider || !testimonialDots) return;
    
    const testimonials = [
        {
            content: "Working with this team was an absolute pleasure. They delivered a stunning website that perfectly captures our brand identity. The attention to detail and responsiveness to our needs was outstanding.",
            author: "Sarah Johnson",
            position: "CEO, TechStart",
            image: "https://randomuser.me/api/portraits/women/32.jpg",
            rating: 5
        },
        {
            content: "The team's expertise in creating modern, responsive websites helped our business reach a wider audience. Our conversion rates have increased by 30% since the launch of our new site.",
            author: "Michael Brown",
            position: "Marketing Director, InnovateCorp",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            rating: 5
        },
        {
            content: "I've worked with many web developers over the years, but none have delivered such high-quality work with such efficiency. The interactive features they implemented have significantly improved user engagement.",
            author: "Emma Rodriguez",
            position: "Product Manager, CreativeHub",
            image: "https://randomuser.me/api/portraits/women/22.jpg",
            rating: 4
        },
        {
            content: "The project was delivered ahead of schedule and exceeded our expectations. The website's performance and user experience have both improved significantly.",
            author: "David Chen",
            position: "CTO, FutureTech",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5
        },
        {
            content: "Our e-commerce conversion rate increased by 25% after implementing the new design. The mobile experience is seamless and the checkout process is now much more intuitive.",
            author: "Jessica Miller",
            position: "E-commerce Manager, StyleHub",
            image: "https://randomuser.me/api/portraits/women/45.jpg",
            rating: 5
        }
    ];
    
    // Create testimonial cards
    testimonials.forEach((testimonial, index) => {
        const testimonialCard = document.createElement('div');
        testimonialCard.classList.add('testimonial-card');
        if (index === 0) testimonialCard.classList.add('active');
        
        // Generate star rating HTML
        let ratingHTML = '';
        for (let i = 0; i < 5; i++) {
            if (i < testimonial.rating) {
                ratingHTML += '<i class="fas fa-star"></i>';
            } else {
                ratingHTML += '<i class="far fa-star"></i>';
            }
        }
        
        testimonialCard.innerHTML = `
            <div class="testimonial-inner">
                <div class="testimonial-rating">
                    ${ratingHTML}
                </div>
                <div class="testimonial-content">
                    <p>${testimonial.content}</p>
                </div>
                <div class="testimonial-author">
                    <img src="${testimonial.image}" alt="${testimonial.author}" class="author-image">
                    <div class="author-info">
                        <h4>${testimonial.author}</h4>
                        <p>${testimonial.position}</p>
                    </div>
                </div>
            </div>
        `;
        
        testimonialsSlider.appendChild(testimonialCard);
        
        // Create dot for this testimonial
        const dot = document.createElement('div');
        dot.classList.add('testimonial-dot');
        if (index === 0) dot.classList.add('active');
        dot.setAttribute('data-index', index);
        dot.setAttribute('aria-label', `Testimonial ${index + 1}`);
        dot.setAttribute('role', 'button');
        dot.setAttribute('tabindex', '0');
        testimonialDots.appendChild(dot);
    });
    
    // Initialize slider functionality
    initTestimonialSlider();
    
    function initTestimonialSlider() {
        const cards = document.querySelectorAll('.testimonial-card');
        const dots = document.querySelectorAll('.testimonial-dot');
        const prevBtn = document.querySelector('.prev-testimonial');
        const nextBtn = document.querySelector('.next-testimonial');
        
        let currentIndex = 0;
        const cardWidth = 100 / 3; // Show 3 cards at once (33.33% each)
        let isAnimating = false;
        
        // Calculate initial transform for card visibility
        calculateTransform();
        
        // Event listeners for navigation
        prevBtn.addEventListener('click', () => {
            if (isAnimating) return;
            currentIndex = Math.max(0, currentIndex - 1);
            updateSlider();
        });
        
        nextBtn.addEventListener('click', () => {
            if (isAnimating) return;
            currentIndex = Math.min(cards.length - 1, currentIndex + 1);
            updateSlider();
        });
        
        // Add click events to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (isAnimating) return;
                currentIndex = index;
                updateSlider();
            });
            
            // Keyboard navigation for accessibility
            dot.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    if (isAnimating) return;
                    currentIndex = index;
                    updateSlider();
                    e.preventDefault();
                }
            });
        });
        
        // Touch swipe functionality
        let touchStartX = 0;
        let touchEndX = 0;
        
        testimonialsSlider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, {passive: true});
        
        testimonialsSlider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, {passive: true});
        
        function handleSwipe() {
            const swipeThreshold = 50;
            if (touchEndX < touchStartX - swipeThreshold) {
                // Swipe left
                if (currentIndex < cards.length - 1) {
                    currentIndex++;
                    updateSlider();
                }
            } else if (touchEndX > touchStartX + swipeThreshold) {
                // Swipe right
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSlider();
                }
            }
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' && isElementInViewport(testimonialsSlider)) {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSlider();
                }
            } else if (e.key === 'ArrowRight' && isElementInViewport(testimonialsSlider)) {
                if (currentIndex < cards.length - 1) {
                    currentIndex++;
                    updateSlider();
                }
            }
        });
        
        // Update slider position and active states
        function updateSlider() {
            isAnimating = true;
            
            // Update active class for cards
            cards.forEach((card, index) => {
                card.classList.toggle('active', index === currentIndex);
            });
            
            // Update active class for dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
            
            // Calculate and apply transform
            calculateTransform();
            
            setTimeout(() => {
                isAnimating = false;
            }, 700); // Match the transition time in CSS
        }
        
        function calculateTransform() {
            // Get slider width
            const sliderWidth = testimonialsSlider.offsetWidth;
            
            // Calculate offset for slider (center the active card)
            let offset = currentIndex * cardWidth;
            
            // If on desktop (3 cards visible), center the active card
            if (window.innerWidth > 992) {
                offset = currentIndex * cardWidth - cardWidth;
                
                // Edge case adjustments
                if (currentIndex === 0) offset = 0;
                if (currentIndex === cards.length - 1) offset = (cards.length - 3) * cardWidth;
            } else if (window.innerWidth > 768) {
                // For tablet (2 cards visible)
                offset = currentIndex * cardWidth - cardWidth / 2;
                
                // Edge case adjustments
                if (currentIndex === 0) offset = 0;
                if (currentIndex === cards.length - 1) offset = (cards.length - 2) * cardWidth;
            }
            
            // Adjust for edge cases to avoid empty space
            offset = Math.max(0, Math.min(offset, (cards.length - getVisibleCards()) * cardWidth));
            
            // Apply the transform
            testimonialsSlider.style.transform = `translateX(-${offset}%)`;
        }
        
        // Helper function to get number of visible cards based on screen width
        function getVisibleCards() {
            if (window.innerWidth > 992) return 3;
            if (window.innerWidth > 768) return 2;
            return 1;
        }
        
        // Recalculate on window resize
        window.addEventListener('resize', calculateTransform);
        
        // Helper function to check if element is in viewport
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    }
}

// Initialize Brand Kits selection
function initBrandKits() {
    const brandCards = document.querySelectorAll('.brand-card');
    const brandCheckboxes = document.querySelectorAll('.brand-checkbox input[type="checkbox"]');
    
    // Handle card selection via checkbox
    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const card = this.closest('.brand-card');
            
            if (this.checked) {
                card.classList.add('selected');
            } else {
                card.classList.remove('selected');
            }
            
            // Optional: Add animation flash when selected
            if (this.checked) {
                card.style.transition = 'none';
                card.style.borderColor = 'transparent';
                setTimeout(() => {
                    card.style.transition = 'all 0.3s ease';
                    card.style.borderColor = 'var(--primary-color)';
                }, 50);
            }
        });
    });
    
    // Make entire card clickable to toggle checkbox
    brandCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't toggle when clicking on the toggle button
            if (e.target.closest('.brand-toggle')) {
                return;
            }
            
            // Toggle checkbox
            const checkbox = this.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            
            // Trigger change event manually
            const event = new Event('change');
            checkbox.dispatchEvent(event);
        });
    });
    
    // Handle brand settings toggle buttons
    const brandToggles = document.querySelectorAll('.brand-toggle');
    brandToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click
            
            const brandName = this.closest('.brand-card').querySelector('.brand-name').textContent;
            
            // Show settings modal or dropdown (placeholder)
            console.log(`Opening settings for ${brandName}`);
            // This would typically open a modal with brand settings
            
            // Add visual feedback
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 300);
        });
    });
}
