<template>
 <section id="top" class="hero container">
 <div class="hero-copy"><p class="eyebrow">PHP / LARAVEL / NODE.JS</p><h1>{{ content[lang].hero.title }}</h1><p class="hero-role">{{ content[lang].hero.role }}</p><p class="hero-description">{{ content[lang].hero.subtitle }}</p>
 <div class="actions"><a href="#projects" class="btn-primary">{{ content[lang].hero.projects }} <span aria-hidden="true">↗</span></a><a :href="links.github" target="_blank" rel="noopener noreferrer" class="btn-ghost">GitHub</a><a :href="links.linkedin" target="_blank" rel="noopener noreferrer" class="btn-ghost">LinkedIn</a>
 <a v-if="resume" :href="resume" download class="btn-ghost">{{ content[lang].hero.resume }}</a><button v-else class="btn-ghost" disabled aria-describedby="resume-note">{{ content[lang].hero.resume }}</button></div>
 <p v-if="!resume" id="resume-note" class="note">{{ content[lang].hero.unavailable }}</p>
 </div>
 <div class="portrait"><img :src="profile" :alt="lang === 'pt' ? 'Foto de Vinicius Soares' : 'Portrait of Vinicius Soares'" width="320" height="400" fetchpriority="high" /><div class="portrait-caption"><span>Vinicius Soares</span><span>Backend & APIs</span></div></div>
 <div class="hero-foot"><span>{{ lang === 'pt' ? 'APIs · Integrações · Sistemas SaaS' : 'APIs · Integrations · SaaS systems' }}</span><a href="#about">{{ content[lang].nav.about }} <span aria-hidden="true">↓</span></a></div>
 </section>
</template>
<script setup>
import { content } from '../i18n/content';
import { lang } from '../i18n/lang';
import { links, resume } from '../data/portfolio';
import profile from '../assets/profile.png';
</script>
