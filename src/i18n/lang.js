import { ref, watch } from 'vue';
import { content } from './content';
let saved;
try { saved = localStorage.getItem('portfolio-language'); } catch { /* Optional persistence. */ }
export const lang = ref(saved === 'en' ? 'en' : 'pt');
watch(lang, value => {
 document.documentElement.lang = value === 'pt' ? 'pt-BR' : 'en';
 document.title = content[value].seo.title;
 for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) document.querySelector(selector)?.setAttribute('content', content[value].seo.description);
 for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) document.querySelector(selector)?.setAttribute('content', content[value].seo.title);
 document.querySelector('meta[property="og:locale"]')?.setAttribute('content', value === 'pt' ? 'pt_BR' : 'en_US');
 try { localStorage.setItem('portfolio-language', value); } catch { /* Optional persistence. */ }
}, { immediate: true });
export function toggleLang() { lang.value = lang.value === 'pt' ? 'en' : 'pt'; }
