import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { getArticles, getArticleBySlug } from '@/sanity/lib/queries';

export const revalidate = 60;

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((a: any) => ({ slug: a.slug.current }));
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const [article, allArticles] = await Promise.all([
    getArticleBySlug(params.slug),
    getArticles(),
  ]);

  if (!article) notFound();

  const others = allArticles.filter((a: any) => a.slug.current !== params.slug);

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
            <span>{new Date(article.date).toLocaleDateString('en-GB', { year:'numeric', month:'long', day:'numeric' })}</span>
            {article.readTime && <>
              <span className="article-meta-dot">·</span>
              <span>{article.readTime}</span>
            </>}
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="article-body-container">
          <PortableText
            value={article.body}
            components={{
              block: {
                normal: ({ children }) => <p className="article-body-para">{children}</p>,
                h2: ({ children }) => <h2 style={{marginBottom:'1rem'}}>{children}</h2>,
                h3: ({ children }) => <h3 style={{marginBottom:'0.75rem'}}>{children}</h3>,
              },
            }}
          />
        </div>
      </section>

      {others.length > 0 && (
        <section className="section-cream"><div className="container">
          <p className="section-eyebrow">More from Nancy</p>
          <h2 className="section-heading reveal" style={{marginBottom:'2rem'}}>Continue <em>reading</em></h2>
          <div className="articles-grid" style={{gridTemplateColumns:'repeat(2,1fr)'}}>
            {others.map((a: any) => (
              <Link key={a.slug.current} href={`/library/articles/${a.slug.current}`} className="article-card" style={{textDecoration:'none',display:'block'}}>
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
      )}
    </>
  );
}
