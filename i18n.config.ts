export default defineI18nConfig(() => ({
  locale: "ru",
  fallbackLocale: "uz",
  legacy: false,
  globalInjection: true,
  numberFormats: {
    ru: {
      currencyFormat: {
        style: "currency",
        currency: "UZS",
      },
    },
    uz: {
      currencyFormat: {
        style: "currency",
        currency: "so'm",
      },
    },
  },
}));
