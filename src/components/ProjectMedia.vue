<template>
  <div class="project-media" :class="{ 'android-media': project.platform === 'android' }">
    <div :class="project.platform === 'android' ? 'android-device' : 'web-preview'">
      <img v-if="project.images?.length" :src="project.images[index]" :alt="`${project.copy[lang].title} — ${index + 1}`" loading="lazy" decoding="async" />
      <div v-else class="screenshots-unavailable">
        <span class="device-platform">Android</span>
        <span>{{ content[lang].projects.screenshots }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { content } from '../i18n/content';
import { lang } from '../i18n/lang';
defineProps({ project: { type: Object, required: true }, index: { type: Number, default: 0 } });
</script>
