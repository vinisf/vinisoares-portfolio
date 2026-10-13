<template>
 <dialog id="mobile-menu" ref="dialog" class="mobile-dialog" :aria-label="content[lang].ui.menu" @cancel="cancel" @click="backdrop" @keydown="keydown">
 <div class="mobile-panel"><div class="mobile-heading"><span class="brand">vs<span class="brand-suffix">.dev</span></span><button autofocus class="icon-button" :aria-label="content[lang].ui.close" @click="$emit('close')">×</button></div>
 <nav :aria-label="content[lang].ui.menu"><a v-for="(label, id) in content[lang].nav" :key="id" :href="`#${id}`" @click="go(id)">{{ label }}<span aria-hidden="true">↗</span></a></nav>
 <button class="language-button" @click="toggleLang" :aria-label="content[lang].ui.language">{{ lang === 'pt' ? 'English' : 'Português' }}</button></div>
 </dialog>
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { content } from '../i18n/content';
import { lang, toggleLang } from '../i18n/lang';
import { useDialog } from '../composables/useDialog';
const props = defineProps({ open: Boolean });
const emit = defineEmits(['close']);
const dialog = ref(null);
const { cancel, backdrop, keydown } = useDialog(dialog, () => props.open, () => emit('close'));
async function go(id) {
 emit('close');
 await nextTick();
 document.querySelector(`#${id} h2`)?.focus({ preventScroll: true });
}
const desktop = window.matchMedia('(min-width: 768px)');
function resize() { if (desktop.matches && props.open) emit('close'); }
onMounted(() => desktop.addEventListener('change', resize));
onUnmounted(() => desktop.removeEventListener('change', resize));
</script>
