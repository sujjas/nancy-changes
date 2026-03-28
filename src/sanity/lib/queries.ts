import { client } from './client';

export async function getArticles() {
  return client.fetch(
    `*[_type == "article"] | order(date desc) {
      slug,
      tag,
      title,
      excerpt,
      "date": date,
      readTime
    }`
  );
}

export async function getArticleBySlug(slug: string) {
  return client.fetch(
    `*[_type == "article" && slug.current == $slug][0] {
      slug,
      tag,
      title,
      excerpt,
      "date": date,
      readTime,
      body
    }`,
    { slug }
  );
}

export async function getProgrammes() {
  return client.fetch(
    `*[_type == "programme"] | order(order asc) {
      slug,
      badge,
      badgeType,
      title,
      duration,
      capacity,
      format,
      price,
      priceNote,
      "image": image.asset->url,
      tagline
    }`
  );
}

export async function getProgrammeBySlug(slug: string) {
  return client.fetch(
    `*[_type == "programme" && slug.current == $slug][0] {
      slug,
      badge,
      badgeType,
      title,
      duration,
      capacity,
      format,
      price,
      priceNote,
      "image": image.asset->url,
      tagline,
      overview,
      whatYoullLearn,
      whoIsItFor,
      structure,
      ctaLabel
    }`,
    { slug }
  );
}
