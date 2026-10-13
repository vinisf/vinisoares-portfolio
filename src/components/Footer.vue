<template>
 <footer class="container site-footer"><div><a href="#top" class="footer-name">Vinicius Soares</a><p>{{ content[lang].hero.role }}</p></div><nav :aria-label="content[lang].ui.menu"><a v-for="(label, id) in content[lang].nav" :key="id" :href="`#${id}`">{{ label }}</a></nav><p>© {{ new Date().getFullYear() }}</p></footer>
</template>
<script setup>
import { content } from '../i18n/content';
import { lang } from '../i18n/lang';
</script>
