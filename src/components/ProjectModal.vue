<template>
 <dialog ref="dialog" class="project-dialog" aria-labelledby="project-title" @cancel="cancel" @click="backdrop" @keydown="keydown">
 <div v-if="project" class="modal-content"><div class="modal-heading"><p class="eyebrow">{{ project.copy[lang].category }} · {{ content[lang].projects.public }}</p><button autofocus class="icon-button" :aria-label="content[lang].ui.close" @click="$emit('close')">×</button></div>
 <h2 id="project-title">{{ project.copy[lang].title }}</h2><p class="body-copy">{{ project.copy[lang].description }}</p>
 <p v-if="project.copy[lang].status" class="project-status">{{ project.copy[lang].status }}</p>
 <figure class="project-preview"><ProjectMedia :project="project" :index="current" /><div v-if="project.images?.length > 1" class="actions"><button class="btn-ghost" :aria-label="content[lang].ui.previous" @click="move(-1)">←</button><span class="note" aria-live="polite">{{ current + 1 }} / {{ project.images.length }}</span><button class="btn-ghost" :aria-label="content[lang].ui.next" @click="move(1)">→</button></div></figure>
 <dl class="case-details"><template v-for="field in ['objective', 'contribution', 'challenge', 'solution']" :key="field"><div v-if="project.copy[lang][field]"><dt>{{ content[lang].projects[field] }}</dt><dd>{{ project.copy[lang][field] }}</dd></div></template></dl>
 <div class="chips"><span v-for="tech in project.stack" :key="tech" class="chip">{{ tech }}</span></div>
 <section class="project-features"><h3>{{ content[lang].projects.features }}</h3><ul><li v-for="feature in project.copy[lang].features" :key="feature">{{ feature }}</li></ul></section>
 <div class="actions"><a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer" class="btn-ghost">{{ link.labelKey ? content[lang].projects[link.labelKey] : link.label }}</a><a v-if="project.live" :href="project.live" target="_blank" rel="noopener noreferrer" class="btn-primary">{{ content[lang].projects.demo }} ↗</a><a v-if="project.apk" :href="project.apk" target="_blank" rel="noopener noreferrer" class="btn-primary">{{ content[lang].projects.apk }} ↓</a></div>
 </div></dialog>
</template>
<script setup>
import { ref, watch } from 'vue';
import { content } from '../i18n/content';
import { lang } from '../i18n/lang';
import { useDialog } from '../composables/useDialog';
import ProjectMedia from './ProjectMedia.vue';
const props = defineProps({ open: Boolean, project: Object });
const emit = defineEmits(['close']);
const dialog = ref(null);
const current = ref(0);
watch(() => props.project?.id, () => { current.value = 0; });
function move(direction) { current.value = (current.value + direction + props.project.images.length) % props.project.images.length; }
const { cancel, backdrop, keydown } = useDialog(dialog, () => props.open, () => emit('close'));
</script>
