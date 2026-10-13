<template>
 <section id="experience" class="section container"><header class="section-heading"><p class="eyebrow">02 / {{ content[lang].experience.label }}</p><h2 tabindex="-1">{{ content[lang].experience.title }}</h2></header>
 <ol class="timeline"><li v-for="job in experiences" :key="job.company" class="job"><div class="job-period"><time :datetime="job.start">{{ date(job.start) }}</time><span> — </span><time v-if="job.end" :datetime="job.end">{{ date(job.end) }}</time><span v-else>{{ content[lang].experience.current }}</span></div>
 <div><h3>{{ job.company }}</h3><p class="job-role">{{ job.role[lang] }}</p><ul class="job-bullets"><li v-for="bullet in job.bullets[lang]" :key="bullet">{{ bullet }}</li></ul><div class="chips"><span v-for="tech in job.stack" :key="tech" class="chip">{{ tech }}</span></div></div></li></ol>
 </section>
</template>
<script setup>
import { content } from '../i18n/content';
import { lang } from '../i18n/lang';
import { experiences } from '../data/portfolio';
function date(value) { return new Intl.DateTimeFormat(lang.value === 'pt' ? 'pt-BR' : 'en', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}-01T00:00:00Z`)); }
</script>
