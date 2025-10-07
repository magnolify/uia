
declare global {
  interface Window {
    shopify: {
      data: {
        selected: Array<{ id: string }>;
      };
      i18n: {
        translate: (key: string, replacements?: Record<string, string | number>) => string;
      };
    };
  }
}

declare const shopify: Window['shopify'];

export {};
