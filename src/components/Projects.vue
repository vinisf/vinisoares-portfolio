<template>
  <section id="projects" class="relative py-28 px-6">
    <div class="max-w-6xl xl:max-w-7xl mx-auto px-2 sm:px-4">
      <!-- HEADER -->
      <header class="text-center mb-16 md:mb-20" v-reveal>
        <p class="text-cyanx tracking-[0.3em] text-sm mb-4">
          {{ content[lang].projects.label }}
        </p>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black">
          {{ content[lang].projects.title }}
        </h2>

        <p class="text-white/60 mt-4 max-w-2xl mx-auto">
          {{ content[lang].projects.subtitle }}
        </p>
      </header>

      <!-- GRID -->
      <div class="grid gap-6 sm:gap-8 lg:grid-cols-2" v-reveal>
        <ProjectCard v-for="p in projects" :key="p.title" :title="p.title" :description="p.description" :stack="p.stack"
          :featured="p.featured" @click="openProject(p)" />

      </div>

      <!-- MODAL -->
      <ProjectModal :open="!!selected" :project="selected" @close="selected = null" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { content } from "@/i18n/content";
import { lang } from "@/i18n/lang";

import ProjectCard from "./ProjectCard.vue";
import ProjectModal from "./ProjectModal.vue";

import selecao1 from "../assets/projects/selecao-1.gif";
import selecao2 from "../assets/projects/selecao-2.png";
import api1 from "../assets/projects/api-1.png";
import simulador1 from "../assets/projects/simulador.gif";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  stack: string;
  images: string[];
}

const selected = ref<Project | null>(null);

const projects = computed<Project[]>(() =>
  lang.value === "pt"
    ? [
      {
        title: "Simulador de Financiamento Imobiliário",
        description:
          "Simulador web para cálculo de financiamento com parcelas, entrada e cenário de pagamento.",
        longDescription:
          "Aplicação desenvolvida para simular financiamentos imobiliários considerando valor do imóvel, entrada, subsídio, parcelas da construtora e financiamento bancário. O sistema realiza cálculos em tempo real, gera tabelas detalhadas por mês e permite comparar cenários de pagamento, focando em clareza, regra de negócio e usabilidade.",
        stack: "Vue.js • TypeScript • Lógica financeira • UI Responsiva",
        images: [
          simulador1],
        github: "https://github.com/vinisf/simulador-financiamento-web",
        live: "https://simulador-financiamento-web-three.vercel.app/",
        featured: true
      },

      {
        title: "Sistema de Seleção Pública",
        description: "Plataforma para inscrições e classificação.",
        longDescription:
          "Sistema completo usado em produção para gerenciar inscrições, aplicar regras de cota, classificar candidatos e gerar relatórios administrativos.",
        stack: "PHP • PostgreSQL • APIs • Painel Admin",
        images: [selecao1, selecao2],
      },
      {
        title: "API de Gestão Educacional",
        description: "API REST para controle acadêmico.",
        longDescription:
          "API focada em performance e integridade, com autenticação e permissões.",
        stack: "Node.js • PostgreSQL • Auth • REST",
        images: [api1],
      },
    ]
    : [
      {
        title: "Public Selection System",
        description: "Platform for applications and candidate ranking.",
        longDescription:
          "A production-ready system used to manage applications, apply quota rules, rank candidates, and generate administrative reports.",
        stack: "PHP • PostgreSQL • APIs • Admin Panel",
        images: [selecao1, selecao2],
      },
      {
        title: "Educational Management API",
        description: "REST API for academic management.",
        longDescription:
          "A performance-focused API with authentication, permissions, and strong data integrity.",
        stack: "Node.js • PostgreSQL • Auth • REST",
        images: [api1],
      },
    ]
);

function openProject(project: Project) {
  selected.value = project;
}
</script>
