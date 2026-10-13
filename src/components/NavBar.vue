<template>
 <header class="site-header"><div class="container nav-row">
 <a href="#top" class="brand" aria-label="Vinicius Soares"><span>vs</span><span class="brand-suffix">.dev</span></a>
 <nav class="desktop-nav" :aria-label="content[lang].ui.menu"><a v-for="(label, id) in content[lang].nav" :key="id" :href="`#${id}`">{{ label }}</a></nav>
 <div class="nav-actions"><button class="language-button" @click="toggleLang" :aria-label="content[lang].ui.language">{{ lang === 'pt' ? 'EN' : 'PT' }} <span aria-hidden="true">↗</span></button>
 <button class="menu-button" :aria-label="content[lang].ui.openMenu" :aria-expanded="open" aria-controls="mobile-menu" @click="$emit('open-menu')"><span aria-hidden="true">☰</span></button></div>
 </div></header>
</template>
<script setup>
import { lang, toggleLang } from '../i18n/lang';
import { content } from '../i18n/content';
defineProps({ open: Boolean });
defineEmits(['open-menu']);
</script>
