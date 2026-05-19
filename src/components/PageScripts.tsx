'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // ══════════ SCROLL REVEAL ══════════
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    // Defer one frame so layout is fully painted before observing
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach((el) =>
        revealObs.observe(el)
      );
    });

    // ══════════ NAV SCROLL + ADAPTIVE COLOR ══════════
    let lastScrollY = window.scrollY;

    const parseRgb = (str: string): [number, number, number, number] | null => {
      const m = str.match(/rgba?\(([^)]+)\)/);
      if (!m) return null;
      const parts = m[1].split(',').map((s) => parseFloat(s.trim()));
      return [parts[0] || 0, parts[1] || 0, parts[2] || 0, parts[3] === undefined ? 1 : parts[3]];
    };

    const luminance = (r: number, g: number, b: number) => {
      const toLin = (c: number) => {
        const s = c / 255;
        return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
      };
      return 0.2126 * toLin(r) + 0.7152 * toLin(g) + 0.0722 * toLin(b);
    };

    const isElementDark = (el: Element | null): boolean | null => {
      let node: Element | null = el;
      while (node && node !== document.body) {
        const cs = getComputedStyle(node);
        const rgb = parseRgb(cs.backgroundColor);
        if (rgb && rgb[3] > 0.05) {
          return luminance(rgb[0], rgb[1], rgb[2]) < 0.5;
        }
        node = node.parentElement;
      }
      return null;
    };

    const updateNavTheme = () => {
      const nav = document.getElementById('mainNav');
      if (!nav) return;
      const navRect = nav.getBoundingClientRect();
      const probeY = navRect.bottom + 8;
      const probeX = window.innerWidth / 2;
      // Temporarily disable nav pointer events so elementFromPoint hits content below
      const prevPe = nav.style.pointerEvents;
      nav.style.pointerEvents = 'none';
      const el = document.elementFromPoint(probeX, probeY);
      nav.style.pointerEvents = prevPe;
      const dark = isElementDark(el);
      if (dark === true) nav.classList.add('over-dark');
      else if (dark === false) nav.classList.remove('over-dark');
    };

    const handleScroll = () => {
      const nav = document.getElementById('mainNav');
      if (!nav) return;
      const current = window.scrollY;
      nav.classList.toggle('scrolled', current > 40);
      if (Math.abs(current - lastScrollY) > 4) {
        nav.classList.toggle('nav--hidden', current > lastScrollY && current > 80);
        lastScrollY = current;
      }
      updateNavTheme();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateNavTheme);
    window.addEventListener('load', updateNavTheme);
    window.addEventListener('pageshow', updateNavTheme);
    // Observe layout shifts (images loading, route content settling) and re-probe
    const layoutObs = new ResizeObserver(updateNavTheme);
    layoutObs.observe(document.body);
    // Catch images that finish loading after initial render
    const imgLoadHandler = () => updateNavTheme();
    document.querySelectorAll('img').forEach((img) => {
      if (!(img as HTMLImageElement).complete) img.addEventListener('load', imgLoadHandler, { once: true });
    });
    // A few delayed checks for slow-loading content / animations that shift layout
    const initialTimeouts = [50, 200, 600, 1500].map((ms) => setTimeout(updateNavTheme, ms));
    requestAnimationFrame(updateNavTheme);

    // ══════════ COUNTER ══════════
    const counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.count || '0');
            const suffix = el.dataset.suffix || '';
            let current = 0;
            const step = Math.max(1, Math.floor(target / 40));
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.textContent = current + suffix;
            }, 30);
            counterObs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('[data-count]').forEach((el) => counterObs.observe(el));

    // ══════════ SERVICE TABS ══════════
    const serviceTabs = document.querySelectorAll('.service-tab');
    const serviceHandlers: Array<() => void> = [];
    serviceTabs.forEach((tab) => {
      const handler = () => {
        serviceTabs.forEach((t) => t.classList.add('muted'));
        tab.classList.remove('muted');
      };
      tab.addEventListener('click', handler);
      serviceHandlers.push(handler);
    });

    // ══════════ FILTER TABS ══════════
    const filterTabs = document.querySelectorAll('.filter-tab');
    const filterHandlers: Array<() => void> = [];
    filterTabs.forEach((t) => {
      const handler = () => {
        filterTabs.forEach((b) => b.classList.remove('active'));
        t.classList.add('active');
      };
      t.addEventListener('click', handler);
      filterHandlers.push(handler);
    });

    // ══════════ CAROUSELS ══════════
    const carouselCleanups: Array<() => void> = [];

    function initCarousel(containerId: string) {
      const container = document.getElementById(containerId);
      if (!container) return;
      const slides = container.querySelectorAll('.test-slide,.testimonial-slide');
      if (!slides.length) return;
      let current = 0;
      function go(n: number) {
        slides[current].classList.remove('active');
        current = ((n % slides.length) + slides.length) % slides.length;
        slides[current].classList.add('active');
      }
      const btns = document.querySelectorAll(`[data-carousel="${containerId}"]`);
      const btnHandlers: Array<{ btn: Element; handler: () => void }> = [];
      btns.forEach((btn) => {
        const handler = () => go(current + parseInt((btn as HTMLElement).dataset.dir || '1'));
        btn.addEventListener('click', handler);
        btnHandlers.push({ btn, handler });
      });
      const interval = setInterval(() => go(current + 1), 6000);
      carouselCleanups.push(() => {
        clearInterval(interval);
        btnHandlers.forEach(({ btn, handler }) => btn.removeEventListener('click', handler));
      });
    }
    initCarousel('homeCarousel');

    // Speaking carousel
    const spCarousel = document.getElementById('spCarousel');
    if (spCarousel) {
      const spSlides = spCarousel.querySelectorAll('.testimonial-slide');
      let spCurrent = 0;
      const spGo = (n: number) => {
        spSlides[spCurrent].classList.remove('active');
        spCurrent = ((n % spSlides.length) + spSlides.length) % spSlides.length;
        spSlides[spCurrent].classList.add('active');
      };
      const spBtns = document.querySelectorAll('.testimonial-nav-btn');
      const spBtnHandlers: Array<{ btn: Element; handler: () => void }> = [];
      spBtns.forEach((btn) => {
        const handler = () => spGo(spCurrent + parseInt((btn as HTMLElement).dataset.dir || '1'));
        btn.addEventListener('click', handler);
        spBtnHandlers.push({ btn, handler });
      });
      const spInterval = setInterval(() => spGo(spCurrent + 1), 6000);
      carouselCleanups.push(() => {
        clearInterval(spInterval);
        spBtnHandlers.forEach(({ btn, handler }) => btn.removeEventListener('click', handler));
      });
    }

    // ══════════ TIMELINE ══════════
    const tw = document.getElementById('timelineWrapper');
    const tp = document.getElementById('timelineLineFill');
    let timelineHandler: (() => void) | null = null;
    if (tw && tp) {
      const items = tw.querySelectorAll('.timeline-item');
      timelineHandler = () => {
        const twRect = tw.getBoundingClientRect();
        const scrolled = Math.max(0, window.innerHeight * 0.7 - twRect.top);
        const lineProgress = Math.min(1, scrolled / tw.offsetHeight);
        (tp as HTMLElement).style.height = (lineProgress * 100) + '%';
        // Reveal each item when the line reaches its dot position
        items.forEach((item) => {
          const dotTop = (item as HTMLElement).offsetTop + 6;
          const dotProgress = dotTop / tw.offsetHeight;
          if (lineProgress >= dotProgress) {
            item.classList.add('visible');
          }
        });
      };
      window.addEventListener('scroll', timelineHandler, { passive: true });
      timelineHandler();
    }

    // ══════════ QUOTE WORD REVEAL ══════════
    const quoteWords = "I believe every person, organisation, and region has a story worth telling well. My work is about helping people find that story — and giving them the tools to tell it with clarity, confidence, and conviction.".split(' ');
    const quoteEl = document.getElementById('quoteText');
    let quoteObs: IntersectionObserver | null = null;
    if (quoteEl) {
      quoteEl.innerHTML = '';
      quoteWords.forEach((w) => {
        const sp = document.createElement('span');
        sp.className = 'word';
        sp.textContent = w;
        quoteEl.appendChild(sp);
      });
      const words = quoteEl.querySelectorAll('.word');
      quoteObs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            words.forEach((w, i) => {
              setTimeout(() => w.classList.add('lit'), i * 60);
            });
            quoteObs?.unobserve(entries[0].target);
          }
        },
        { threshold: 0.3 }
      );
      const quoteSection = document.getElementById('quoteSection');
      if (quoteSection) quoteObs.observe(quoteSection);
    }

    // ══════════ 3D TILT ══════════
    const tiltCleanups: Array<() => void> = [];
    document.querySelectorAll('.article-card').forEach((card) => {
      const inner = card.querySelector('.article-card-inner') as HTMLElement | null;
      if (!inner) return;
      const mousemoveHandler = (e: Event) => {
        const me = e as MouseEvent;
        const r = (card as HTMLElement).getBoundingClientRect();
        const x = (me.clientX - r.left) / r.width - 0.5;
        const y = (me.clientY - r.top) / r.height - 0.5;
        inner.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
      };
      const mouseleaveHandler = () => {
        inner.style.transform = 'perspective(800px) rotateY(0) rotateX(0)';
      };
      card.addEventListener('mousemove', mousemoveHandler);
      card.addEventListener('mouseleave', mouseleaveHandler);
      tiltCleanups.push(() => {
        card.removeEventListener('mousemove', mousemoveHandler);
        card.removeEventListener('mouseleave', mouseleaveHandler);
      });
    });

    // ══════════ SOCIAL WAVE ══════════
    let socialObs: IntersectionObserver | null = null;
    const sl = document.getElementById('socialLinks');
    if (sl) {
      socialObs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            document.querySelectorAll('.social-pill').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                el.classList.add('visible');
              }, i * 120);
            });
            socialObs?.unobserve(entries[0].target);
          }
        },
        { threshold: 0.3 }
      );
      socialObs.observe(sl);
    }

    return () => {
      cancelAnimationFrame(raf);
      revealObs.disconnect();
      counterObs.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateNavTheme);
      window.removeEventListener('load', updateNavTheme);
      window.removeEventListener('pageshow', updateNavTheme);
      layoutObs.disconnect();
      initialTimeouts.forEach(clearTimeout);
      carouselCleanups.forEach((cleanup) => cleanup());
      if (timelineHandler) window.removeEventListener('scroll', timelineHandler);
      quoteObs?.disconnect();
      tiltCleanups.forEach((cleanup) => cleanup());
      socialObs?.disconnect();

      // Cleanup service tab handlers
      serviceTabs.forEach((tab, i) => {
        if (serviceHandlers[i]) tab.removeEventListener('click', serviceHandlers[i]);
      });
      filterTabs.forEach((tab, i) => {
        if (filterHandlers[i]) tab.removeEventListener('click', filterHandlers[i]);
      });
    };
  }, [pathname]);

  return null;
}
