import { ref } from "vue";

export const lang = ref("pt");

export function toggleLang() {
  lang.value = lang.value === "pt" ? "en" : "pt";
}
