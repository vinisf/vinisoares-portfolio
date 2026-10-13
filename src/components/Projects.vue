<template>
 <section id="projects" class="section container"><header class="section-heading"><p class="eyebrow">03 / {{ content[lang].projects.label }}</p><h2 tabindex="-1">{{ content[lang].projects.title }}</h2><p class="body-copy">{{ content[lang].projects.subtitle }}</p></header>
 <div class="project-grid"><ProjectCard v-for="(project, index) in projects" :key="project.id" :project="project" :index="index" @click="selected = project" /></div>
 <ProjectModal :open="!!selected" :project="selected" @close="selected = null" />
 </section>
</template>
<script setup>
import { ref } from 'vue';
import { content } from '../i18n/content';
import { lang } from '../i18n/lang';
import { projects } from '../data/portfolio';
import ProjectCard from './ProjectCard.vue';
import ProjectModal from './ProjectModal.vue';
const selected = ref(null);
</script>
