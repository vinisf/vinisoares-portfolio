<template>
  <article class="project-card" :class="{ featured: index === 0 }">
    <div class="project-meta"><span>0{{ index + 1 }}</span><span>{{ project.copy[lang].category }}</span></div>
    <ProjectMedia :project="project" />
    <div class="project-card-copy">
      <h3>{{ project.copy[lang].title }}</h3>
      <p>{{ project.copy[lang].description }}</p>
      <span v-if="project.copy[lang].status" class="project-status">{{ project.copy[lang].status }}</span>
      <div class="chips"><span v-for="tech in project.stack" :key="tech" class="chip">{{ tech }}</span></div>
      <div class="actions project-links">
        <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer" class="btn-ghost">{{ link.labelKey ? content[lang].projects[link.labelKey] : link.label }}</a>
        <a v-if="project.live" :href="project.live" target="_blank" rel="noopener noreferrer" class="btn-primary">{{ content[lang].projects.demo }} ↗</a>
        <a v-if="project.apk" :href="project.apk" target="_blank" rel="noopener noreferrer" class="btn-primary">{{ content[lang].projects.apk }} ↓</a>
      </div>
      <button class="project-open" @click="$emit('click')" :aria-label="`${content[lang].projects.details}: ${project.copy[lang].title}`">{{ content[lang].projects.details }}<span aria-hidden="true">↗</span></button>
    </div>
  </article>
</template>
<script setup>
import { content } from '../i18n/content';
import { lang } from '../i18n/lang';
import ProjectMedia from './ProjectMedia.vue';
defineProps({ project: { type: Object, required: true }, index: Number });
defineEmits(['click']);
</script>
