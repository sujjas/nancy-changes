'use client';

import { useState } from 'react';
import Link from 'next/link';

const TAGS = ['All', 'Communication', 'Leadership', 'Africa', 'Narrative', 'Media'];

export default function ArticlesSection({ articles }: { articles: any[] }) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? articles
    : articles.filter((a) => a.tag === active);

  return (
    <>
      <div className="filter-tabs reveal">
        {TAGS.map((tag) => (
          <button
            key={tag}
            className={`filter-tab${active === tag ? ' active' : ''}`}
            onClick={() => setActive(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="articles-grid">
        {filtered.map((article) => (
          <Link key={article.slug.current} href={`/library/articles/${article.slug.current}`} className="article-card" style={{textDecoration:'none',display:'block'}}>
            <div className="article-card-inner">
              <div className="article-thumb"><div className="article-thumb-inner" style={{background:'linear-gradient(160deg,#e8e0d6,#d5cbc0)',width:'100%',height:'100%'}}></div></div>
              <div className="article-body">
                <span className="article-tag">{article.tag}</span>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <span className="article-link">Read more <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg></span>
              </div>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p style={{color:'var(--text-muted)',gridColumn:'1/-1',padding:'2rem 0'}}>No articles in this category yet.</p>
        )}
      </div>
    </>
  );
}
