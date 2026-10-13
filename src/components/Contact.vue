<template>
 <section id="contact" class="section container"><div class="contact-panel"><div><p class="eyebrow">04 / {{ content[lang].contact.label }}</p><h2 tabindex="-1">{{ content[lang].contact.title }}</h2><p class="body-copy">{{ content[lang].contact.text }}</p></div><div class="contact-actions"><a :href="links.linkedin" target="_blank" rel="noopener noreferrer" class="btn-primary">LinkedIn ↗</a><a :href="links.github" target="_blank" rel="noopener noreferrer" class="btn-ghost">GitHub ↗</a><p class="note">{{ content[lang].contact.footer }}</p></div></div></section>
</template>
<script setup>
import { content } from '../i18n/content';
import { lang } from '../i18n/lang';
import { links } from '../data/portfolio';
</script>
