<template>
  <section
    id="projects"
    class="relative py-28 px-6"
  >
    <div class="max-w-6xl xl:max-w-7xl mx-auto px-2 sm:px-4">
      <!-- HEADER -->
      <header
        class="text-center mb-16 md:mb-20"
        v-reveal
      >
        <p class="text-cyanx tracking-[0.3em] text-sm mb-4">
          PROJETOS
        </p>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black">
          Coisas que eu construí
        </h2>

        <p class="text-white/60 mt-4 max-w-2xl mx-auto">
          Projetos reais, focados em regra de negócio, dados e UX limpa.
        </p>
      </header>

      <!-- GRID -->
      <div
        class="grid gap-6 sm:gap-8 lg:grid-cols-2"
        v-reveal
      >
        <ProjectCard
          v-for="p in projects"
          :key="p.title"
          :title="p.title"
          :description="p.description"
          :stack="p.stack"
          @click="openProject(p)"
        />
      </div>

      <!-- MODAL -->
      <ProjectModal
        :open="!!selected"
        :project="selected"
        @close="selected = null"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'

// assets
import selecao1 from '../assets/projects/selecao-1.gif'
import selecao2 from '../assets/projects/selecao-2.png'
import api1 from '../assets/projects/api-1.png'

// tipos (opcional, mas recomendado)
interface Project {
  title: string
  description: string
  longDescription: string
  stack: string
  images: string[]
  github?: string
  live?: string
}

const selected = ref<Project | null>(null)

const projects = ref<Project[]>([
  {
    title: 'Sistema de Seleção Pública',
    description: 'Plataforma para inscrições e classificação.',
    longDescription:
      'Sistema completo usado em produção para gerenciar inscrições, aplicar regras de cota, classificar candidatos e gerar relatórios administrativos.',
    stack: 'PHP • PostgreSQL • APIs • Painel Admin',
    images: [selecao1, selecao2],
  },
  {
    title: 'API de Gestão Educacional',
    description: 'API REST para controle acadêmico.',
    longDescription:
      'API focada em performance e integridade, com autenticação e permissões.',
    stack: 'Node.js • PostgreSQL • Auth • REST',
    images: [api1],
  },
])

function openProject(project: Project) {
  selected.value = project
}
</script>
