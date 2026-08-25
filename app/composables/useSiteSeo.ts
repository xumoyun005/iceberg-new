const SITE_URL = "https://icebergbtl.uz";
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const LOGO_URL = `${SITE_URL}/logo.svg`;

export function useSiteSeo(options?: { noindex?: boolean }) {
  const { t, locale } = useI18n();
  const canonical = computed(() => `${SITE_URL}/${locale.value}`);

  useSeoMeta({
    title: () => t("meta.title"),
    description: () => t("meta.description"),
    keywords: () => t("meta.keywords"),
    author: "Ice Berg BTL Agency",
    robots: options?.noindex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large",
    ogType: "website",
    ogSiteName: "Ice Berg BTL",
    ogTitle: () => t("meta.title"),
    ogDescription: () => t("meta.description"),
    ogUrl: () => canonical.value,
    ogImage: OG_IMAGE,
    ogImageAlt: () => t("meta.imageAlt"),
    ogLocale: () => t("meta.ogLocale"),
    twitterCard: "summary_large_image",
    twitterTitle: () => t("meta.title"),
    twitterDescription: () => t("meta.description"),
    twitterImage: OG_IMAGE,
  });

  useHead(() => ({
    htmlAttrs: {
      lang: locale.value === "uz" ? "uz" : "ru",
    },
    link: [
      { rel: "canonical", href: canonical.value },
      {
        rel: "alternate",
        hreflang: "ru-RU",
        href: `${SITE_URL}/ru`,
      },
      {
        rel: "alternate",
        hreflang: "uz-UZ",
        href: `${SITE_URL}/uz`,
      },
      {
        rel: "alternate",
        hreflang: "x-default",
        href: `${SITE_URL}/ru`,
      },
    ],
    meta: [
      { name: "geo.region", content: "UZ-TK" },
      {
        name: "geo.placename",
        content: locale.value === "uz" ? "Toshkent" : "Ташкент",
      },
      { name: "geo.position", content: "41.289338;69.182657" },
      { name: "ICBM", content: "41.289338, 69.182657" },
      {
        property: "og:locale:alternate",
        content: locale.value === "uz" ? "ru_RU" : "uz_UZ",
      },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(getJsonLd(t, locale.value)),
      },
    ],
  }));
}

function getJsonLd(t: (key: string) => string, locale: string) {
  const inLanguage = locale === "uz" ? "uz-UZ" : "ru-RU";
  const address =
    locale === "uz"
      ? {
          streetAddress: "Chilonzor massivi, 13-kvartal, 2A",
          addressLocality: "Toshkent",
          addressRegion: "Uchtepa tumani",
          addressCountry: "UZ",
        }
      : {
          streetAddress: "массив Чиланзар, 13-й квартал, 2А",
          addressLocality: "Ташкент",
          addressRegion: "Учтепинский район",
          addressCountry: "UZ",
        };

  const services = [
    t("services.service-1.title"),
    t("services.service-2.title"),
    t("services.service-3.title"),
    t("services.service-4.title"),
    t("services.service-5.title"),
    t("services.service-6.title"),
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "AdvertisingAgency"],
        "@id": `${SITE_URL}/#organization`,
        name: "Ice Berg BTL",
        alternateName: "Ice Berg BTL Agency",
        url: SITE_URL,
        logo: LOGO_URL,
        image: OG_IMAGE,
        description: t("meta.description"),
        telephone: "+998900112033",
        email: "promocentertash@gmail.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          ...address,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 41.289338,
          longitude: 69.182657,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "21:00",
        },
        areaServed: {
          "@type": "City",
          name: locale === "uz" ? "Toshkent" : "Ташкент",
        },
        sameAs: [
          "https://www.instagram.com/icebergbtl/",
          "https://www.facebook.com/profile.php?id=61561572720311",
          "https://t.me/icebergbtl_b2b",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t("services.title"),
          itemListElement: services.map((name) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name,
              areaServed: locale === "uz" ? "Toshkent" : "Ташкент",
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Ice Berg BTL",
        inLanguage: ["ru-RU", "uz-UZ"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/${locale}#webpage`,
        url: `${SITE_URL}/${locale}`,
        name: t("meta.title"),
        description: t("meta.description"),
        inLanguage,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}
