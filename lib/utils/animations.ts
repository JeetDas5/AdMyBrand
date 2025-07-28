/**
 * Utility functions for animations and smooth scrolling
 */

/**
 * Smooth scroll to a specific element by ID
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset from the top of the element (default: 0)
 * @param duration - Duration of the scroll animation in milliseconds (default: 800)
 */
export function scrollToElement(elementId: string, offset: number = 0, duration: number = 800): void {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found.`);
    return;
  }
  
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;
  
  scrollToPosition(offsetPosition, duration);
}

/**
 * Smooth scroll to a specific position
 * @param position - The Y position to scroll to
 * @param duration - Duration of the scroll animation in milliseconds (default: 800)
 */
export function scrollToPosition(position: number, duration: number = 800): void {
  const startPosition = window.pageYOffset;
  const distance = position - startPosition;
  let startTime: number | null = null;
  
  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  
  // Easing function
  function easeInOutQuad(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  
  requestAnimationFrame(animation);
}

/**
 * Initialize scroll animations for elements with data-animate attribute
 * This function adds animation classes to elements when they enter the viewport
 */
export function initScrollAnimations(): void {
  if (typeof window === 'undefined') return;
  
  const animateElements = document.querySelectorAll('[data-animate]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        const animation = element.dataset.animate || 'fade-in';
        const delay = element.dataset.delay || '0';
        
        // Add animation classes
        element.classList.add(`animate-${animation}`);
        if (delay !== '0') {
          element.classList.add(`animation-delay-${delay}`);
        }
        
        // Unobserve after animation is added
        observer.unobserve(element);
      }
    });
  }, {
    threshold: 0.1, // Trigger when at least 10% of the element is visible
    rootMargin: '0px 0px -10% 0px' // Slightly before the element enters the viewport
  });
  
  // Observe all elements with data-animate attribute
  animateElements.forEach(element => {
    observer.observe(element);
  });
}

/**
 * Initialize smooth scrolling for all anchor links that point to IDs on the page
 * @param offset - Optional offset from the top of the element (default: 80)
 */
export function initSmoothScrolling(offset: number = 80): void {
  if (typeof window === 'undefined') return;
  
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    
    if (!anchor) return;
    
    const href = anchor.getAttribute('href');
    
    if (!href || !href.startsWith('#')) return;
    
    const id = href.substring(1);
    
    if (!id) return;
    
    e.preventDefault();
    scrollToElement(id, offset);
  });
}