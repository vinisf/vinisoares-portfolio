<template>
  <section id="about" class="relative py-28 px-6">
    <div
      class="max-w-5xl lg:max-w-6xl mx-auto
             grid gap-12 md:grid-cols-2
             items-start"
    >
      <!-- TEXTO -->
      <div v-reveal class="max-w-xl">
        <p class="text-cyanx tracking-[0.3em] text-sm mb-4">
          {{ content[lang].about.label }}
        </p>

        <h2
          class="text-3xl sm:text-4xl md:text-5xl
                 font-black mb-6 leading-tight"
        >
          {{ content[lang].about.title }}
        </h2>

        <p class="text-white/70 leading-relaxed mb-6">
          {{ content[lang].about.text }}
        </p>

        <!-- CHIPS -->
        <div class="flex flex-wrap gap-2 mt-6">
          <span class="chip">PHP</span>
          <span class="chip">PostgreSQL</span>
          <span class="chip">APIs</span>
          <span class="chip">Node.js</span>
          <span class="chip">Vue</span>
        </div>
      </div>

      <!-- CARDS -->
      <div v-reveal class="space-y-6">
        <div
          class="glass p-7 sm:p-8
                 rounded-2xl
                 border border-white/10"
        >
          <h3 class="text-lg sm:text-xl font-bold mb-4">
            {{ content[lang].about.deliver }}
          </h3>

          <ul class="space-y-3 text-white/75">
            <li class="li">
              {{ lang === 'pt'
                ? 'Arquitetura simples e manutenível'
                : 'Simple and maintainable architecture' }}
            </li>
            <li class="li">
              {{ lang === 'pt'
                ? 'Consultas SQL e performance'
                : 'SQL queries and performance' }}
            </li>
            <li class="li">
              {{ lang === 'pt'
                ? 'APIs REST bem definidas'
                : 'Well-defined REST APIs' }}
            </li>
            <li class="li">
              {{ lang === 'pt'
                ? 'Painéis admin e fluxos reais'
                : 'Admin panels and real workflows' }}
            </li>
          </ul>
        </div>

        <!-- MÉTRICAS -->
        <div class="grid grid-cols-3 gap-4">
          <div class="glass rounded-xl border border-white/10 p-4 text-center">
            <p class="text-2xl font-black text-white">+X</p>
            <p class="text-xs text-white/60 mt-1">
              {{ lang === 'pt' ? 'projetos reais' : 'real projects' }}
            </p>
          </div>

          <div class="glass rounded-xl border border-white/10 p-4 text-center">
            <p class="text-2xl font-black text-white">API</p>
            <p class="text-xs text-white/60 mt-1">
              {{ lang === 'pt' ? 'first mindset' : 'API-first mindset' }}
            </p>
          </div>

          <div class="glass rounded-xl border border-white/10 p-4 text-center">
            <p class="text-2xl font-black text-white">DB</p>
            <p class="text-xs text-white/60 mt-1">
              {{ lang === 'pt' ? 'sem gambiarra' : 'no hacks' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { content } from "@/i18n/content";
import { lang } from "@/i18n/lang";
</script>
