import Link from 'next/link';
import { articles } from '../../data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <>
      <section className="article-hero">
        <div className="article-hero-inner">
          <Link href="/library#articles" className="article-back">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 8H3M7 4l-4 4 4 4"/></svg>
            Back to Resources
          </Link>
          <span className="article-tag" style={{marginTop:'2rem',display:'inline-block'}}>{article.tag}</span>
          <h1 className="article-hero-title">{article.title}</h1>
          <div className="article-hero-meta">
            <span>{article.date}</span>
            <span className="article-meta-dot">·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="article-body-container">
          {article.body.map((paragraph, i) => (
            <p key={i} className="article-body-para">{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section-cream"><div className="container">
        <p className="section-eyebrow">More from Nancy</p>
        <h2 className="section-heading reveal" style={{marginBottom:'2rem'}}>Continue <em>reading</em></h2>
        <div className="articles-grid" style={{gridTemplateColumns:'repeat(2,1fr)'}}>
          {articles.filter((a) => a.slug !== article!.slug).map((a) => (
            <Link key={a.slug} href={`/library/articles/${a.slug}`} className="article-card" style={{textDecoration:'none',display:'block'}}>
              <div className="article-card-inner">
                <div className="article-thumb"><div className="article-thumb-inner" style={{background:'linear-gradient(160deg,#e8e0d6,#d5cbc0)',width:'100%',height:'100%'}}></div></div>
                <div className="article-body">
                  <span className="article-tag">{a.tag}</span>
                  <h3 className="article-title">{a.title}</h3>
                  <p className="article-excerpt">{a.excerpt}</p>
                  <span className="article-link">Read more <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div></section>
    </>
  );
}
