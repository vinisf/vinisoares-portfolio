<template>
  
  <SectionShell id="projects" glowA="animate-glow-1" glowB="animate-glow-2" >
    <div class="max-w-6xl mx-auto">
      <header class="text-center mb-14" v-reveal>
        <p class="text-cyanx tracking-[0.3em] text-sm mb-4">PROJETOS</p>
        <h2 class="text-4xl md:text-5xl font-black">Coisas que eu construí</h2>
        <p class="text-white/60 mt-4 max-w-2xl mx-auto">
          Projetos reais, focados em regra de negócio, dados e UX limpa.
        </p>
      </header>

      <div class="grid gap-8 md:grid-cols-2">
        <ProjectCard
          v-for="p in projects"
          :key="p.title"
          v-reveal
          :title="p.title"
          :description="p.description"
          :stack="p.stack"
          :tags="p.tags"
          @click="openProject(p)"
        />
      </div>

      <ProjectModal :open="!!selected" :project="selected" @close="selected=null" />
    </div>
  </SectionShell>
</template>

<script setup>
import { ref } from 'vue'
import SectionShell from './SectionShell.vue'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'

const selected = ref(null)

const projects = [
  {
    title: 'Sistema de Seleção Pública',
    description: 'Inscrições, cotas, classificação, relatórios e painel admin.',
    stack: 'PHP • PostgreSQL • APIs • Painel Admin',
    tags: ['Produção', 'Regras de negócio', 'Relatórios'],
    images: [],
    longDescription: '…',
    github: '',
    live: '',
  },
  {
    title: 'API de Gestão Educacional',
    description: 'API REST com autenticação, permissões e foco em performance.',
    stack: 'Node.js • PostgreSQL • Auth • REST',
    tags: ['API', 'Performance', 'RBAC'],
    images: [],
    longDescription: '…',
    github: '',
    live: '',
  },
]

function openProject(p) {
  selected.value = p
}
</script>
