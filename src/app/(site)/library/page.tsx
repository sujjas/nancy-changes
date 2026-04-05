import Link from 'next/link';
import CtaSection from '@/components/CtaSection';
import ArticlesSection from '@/components/ArticlesSection';
import { getArticles } from '@/sanity/lib/queries';
import { programmes } from './data';

export const revalidate = 60;

export default async function LibraryPage() {
  const articles = await getArticles();
  return (
    <>
      <section className="lib-hero">
        <div className="lib-hero-text"><div>
          <p className="lib-hero-eyebrow">Resources</p>
          <h1 className="lib-hero-title">Ideas worth<br/><em>returning to.</em></h1>
          <p className="lib-hero-desc">Articles, talks, resources, and courses on communication, leadership, and narrative.</p>
          <div className="lib-hero-cta">
            <Link href="#articles" className="btn btn-dark btn-lg">
              Browse Articles{' '}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Link>
          </div>
        </div></div>
        <div className="lib-hero-img"><img src="/Nancy02.jpg" alt="Nancy Kacungira" /></div>
      </section>

      <section className="section-cream" id="articles"><div className="container">
        <p className="section-eyebrow reveal">Articles</p>
        <h2 className="section-heading reveal">Thought leadership in <em>writing</em></h2>
        <ArticlesSection articles={articles} />
      </div></section>

      <section className="section-white"><div className="container">
        <p className="section-eyebrow reveal">Talks</p>
        <h2 className="section-heading reveal">Watch Nancy in <em>action</em></h2>
        <div className="videos-grid">
          <div className="video-card reveal">
            <div className="video-thumb">
              <img src="/nancy-8.jpg" alt="TEDx: Reframing the African Narrative" className="video-thumb-img" />
              <div className="video-play">
                <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="9,6 19,12 9,18"/></svg>
              </div>
            </div>
            <div className="video-body"><h3 className="video-title">TEDx: Reframing the African Narrative</h3><p className="video-meta">18 min</p></div>
          </div>
          <div className="video-card reveal">
            <div className="video-thumb">
              <img src="/nancy-5.jpg" alt="WEF: Fourth Industrial Revolution" className="video-thumb-img" />
              <div className="video-play">
                <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="9,6 19,12 9,18"/></svg>
              </div>
            </div>
            <div className="video-body"><h3 className="video-title">WEF: Fourth Industrial Revolution</h3><p className="video-meta">42 min</p></div>
          </div>
        </div>
      </div></section>

      <section className="section-dark"><div className="container">
        <p className="section-eyebrow reveal">Resources</p>
        <h2 className="section-heading reveal">Tools you can use <em>today</em></h2>
        <div className="resources-list">
          <a href="#" className="resource-item reveal" style={{textDecoration:'none'}}>
            <div className="resource-left">
              <div className="resource-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              </div>
              <div><p className="resource-title">Narrative Clarity Toolkit</p><p className="resource-desc">12-page guide to structuring your message.</p></div>
            </div>
            <span className="resource-action">Download <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg></span>
          </a>
          <a href="#" className="resource-item reveal" style={{textDecoration:'none'}}>
            <div className="resource-left">
              <div className="resource-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div><p className="resource-title">Communication Diagnostic</p><p className="resource-desc">5-minute self-assessment quiz.</p></div>
            </div>
            <span className="resource-action">Take quiz <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg></span>
          </a>
        </div>
      </div></section>

      <section className="section-cream" id="programmes"><div className="container">
        <p className="section-eyebrow reveal">Courses and learning</p>
        <h2 className="section-heading reveal">Programmes designed to <em>transform</em></h2>
        <p className="section-desc reveal" style={{marginBottom:'2rem'}}>Each course blends Nancy&apos;s real-world experience with practical frameworks you can apply immediately.</p>
        <div className="courses-grid">
          <Link href="/library/programmes/narrative-mastery-for-leaders" className="course-card reveal-left" style={{textDecoration:'none'}}>
            <div className="course-thumb">
              <img src="/Nancy15.jpg" alt="Course" />
              <span className="course-badge course-badge-live">Live Cohort</span>
            </div>
            <div className="course-body">
              <div className="course-meta">
                <span className="course-meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  6 Weeks
                </span>
                <span className="course-meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                  Max 25 Learners
                </span>
                <span className="course-meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  Live + Recorded
                </span>
              </div>
              <h3 className="course-title">Narrative Mastery for Leaders</h3>
              <p className="course-desc">A deep-dive programme for executives and senior communicators. Learn to craft narratives that shift perception, build trust, and drive action — using the same frameworks Nancy applies in newsrooms and boardrooms.</p>
              <div className="course-footer">
                <div className="course-price">$1,200 <span className="course-price-note">/ per person</span></div>
                <span className="btn btn-accent">Learn More <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg></span>
              </div>
            </div>
          </Link>
          <Link href="/library/programmes/strategic-speaking-foundations" className="course-card reveal-right" style={{textDecoration:'none'}}>
            <div className="course-thumb">
              <img src="/Nancy07.jpg" alt="Course" />
              <span className="course-badge course-badge-self">Self-Paced</span>
            </div>
            <div className="course-body">
              <div className="course-meta">
                <span className="course-meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  4 Weeks
                </span>
                <span className="course-meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  12 Modules
                </span>
                <span className="course-meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10"/></svg>
                  Lifetime Access
                </span>
              </div>
              <h3 className="course-title">Strategic Speaking Foundations</h3>
              <p className="course-desc">Build confidence and presence from the ground up. This self-paced programme covers vocal delivery, audience psychology, structure, and storytelling — essential skills for anyone who needs to be heard.</p>
              <div className="course-footer">
                <div className="course-price">$450 <span className="course-price-note">/ lifetime access</span></div>
                <span className="btn btn-accent">Learn More <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg></span>
              </div>
            </div>
          </Link>
        </div>
      </div></section>

      <section className="section-dark book-section">
        <div className="book-glow"></div>
        <div className="container">
          <div className="book-layout">
            <div className="book-cover reveal">
              <div className="book-cover-line"></div>
              <p className="book-cover-author">Nancy Kacungira</p>
            </div>
            <div className="book-text">
              <span className="book-badge reveal">Coming Soon</span>
              <h2 className="section-heading reveal">Nancy&apos;s first <em>book</em></h2>
              <p className="reveal" style={{fontSize:'18px',lineHeight:'1.65',color:'var(--text-light-muted)',marginBottom:'1.5rem'}}>A deep exploration of narrative intelligence — how stories shape perception, power, and progress.</p>
              <div className="reveal">
                <a href="#" className="btn btn-accent">Join Waitlist <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
