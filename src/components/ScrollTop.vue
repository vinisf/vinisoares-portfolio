<template><a v-if="visible" href="#top" class="scroll-top" :aria-label="content[lang].ui.top">↑</a></template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { content } from '../i18n/content';
import { lang } from '../i18n/lang';
const visible = ref(false);
function onScroll() { visible.value = window.scrollY > 500; }
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); });
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>
