import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale ?? "en";

  return {
    locale: currentLocale,
    messages: (await import(`../app/messages/${currentLocale}.json`)).default
  };
});