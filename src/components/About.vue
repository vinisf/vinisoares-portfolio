<template>
 <section id="about" class="section container"><div class="about-grid"><div><p class="eyebrow">01 / {{ content[lang].about.label }}</p><h2 tabindex="-1">{{ content[lang].about.title }}</h2><p class="body-copy">{{ content[lang].about.text }}</p><p class="body-copy">{{ content[lang].about.detail }}</p></div>
 <div class="skills"><div v-for="(group, index) in technologies" :key="index" class="skill-group"><h3>{{ content[lang].about.categories[index] }}</h3><div class="chips"><span v-for="tech in group" :key="tech" class="chip">{{ tech === 'S3' ? (lang === 'pt' ? 'Armazenamento compatível com S3' : 'S3-compatible storage') : tech }}</span><span v-if="index === 3" class="chip">{{ lang === 'pt' ? 'Serviços externos' : 'External services' }}</span></div></div></div>
 </div></section>
</template>
<script setup>
import { content } from '../i18n/content';
import { lang } from '../i18n/lang';
import { technologies } from '../data/portfolio';
</script>
