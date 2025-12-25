<template>
  <section id="projects" class="relative py-28 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Título -->
      <div class="mb-16 text-center" v-reveal>
        <p class="text-cyanx tracking-[0.3em] text-sm mb-4">
          PROJETOS
        </p>
        <h2 class="text-4xl md:text-5xl font-black">
          Coisas que eu construí
        </h2>
      </div>

      <!-- Grid -->
      <div class="grid gap-8 md:grid-cols-2">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          v-reveal
          :title="project.title"
          :description="project.description"
          :stack="project.stack"
          @click="openProject(project)"
        />
      </div>
    </div>

    <!-- MODAL -->
    <ProjectModal
      :open="!!selected"
      :project="selected"
      @close="selected = null"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'

import selecao1 from '../assets/projects/selecao-1.gif'
import selecao2 from '../assets/projects/selecao-2.png'
import api1 from '../assets/projects/api-1.png'

const selected = ref(null)

const projects = [
  {
    title: 'Sistema de Seleção Pública',
    description: 'Plataforma para inscrições e classificação.',
    longDescription:
      'Sistema completo usado em produção para gerenciar inscrições, aplicar regras de cota, classificar candidatos e gerar relatórios administrativos.',
    stack: 'PHP • PostgreSQL • APIs • Painel Admin',
    images: [selecao1, selecao2],
    github: '',
    live: '',
  },
  {
    title: 'API de Gestão Educacional',
    description: 'API REST para controle acadêmico.',
    longDescription:
      'API focada em performance e integridade, com autenticação e permissões.',
    stack: 'Node.js • PostgreSQL • Auth • REST',
    images: [api1],
    github: '',
    live: '',
  },
]

function openProject(project) {
  selected.value = project
}
</script>
