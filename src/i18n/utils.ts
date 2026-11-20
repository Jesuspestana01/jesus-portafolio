import { ui, defaultLang, type Lang, type UIKey } from './ui';

export const getLangFromUrl = (url: URL): Lang => {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
};

export const useTranslations = (lang: Lang) => {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
};
