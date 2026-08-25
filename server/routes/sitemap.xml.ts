const SITE_URL = "https://icebergbtl.uz";

export default defineEventHandler((event) => {
  const lastmod = new Date().toISOString().slice(0, 10);

  setHeader(event, "content-type", "application/xml; charset=utf-8");
  setHeader(event, "cache-control", "public, max-age=3600");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${SITE_URL}/ru</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="ru-RU" href="${SITE_URL}/ru"/>
    <xhtml:link rel="alternate" hreflang="uz-UZ" href="${SITE_URL}/uz"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/ru"/>
  </url>
  <url>
    <loc>${SITE_URL}/uz</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="ru-RU" href="${SITE_URL}/ru"/>
    <xhtml:link rel="alternate" hreflang="uz-UZ" href="${SITE_URL}/uz"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/ru"/>
  </url>
</urlset>`;
});
