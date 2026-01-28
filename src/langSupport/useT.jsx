import { content as translations } from "../content_lib";
import { useLang } from "./LangProvider";

export function useT() {
  const { lang } = useLang();

  return (key) =>
    translations[key]?.[lang] || translations[key]?.en || key;
}
