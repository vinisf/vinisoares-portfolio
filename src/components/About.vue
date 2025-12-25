<template>
  <SectionShell id="about" glowA="" glowB="">
    <div class="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 items-start">
      <div v-reveal>
        <p class="text-cyanx tracking-[0.3em] text-sm mb-4">SOBRE MIM</p>
        <h2 class="text-4xl md:text-5xl font-black mb-6">
          Backend com cérebro,<br class="hidden md:block" /> UI com carinho
        </h2>

        <p class="text-white/70 leading-relaxed mb-5">
          Curto construir sistemas que aguentam porrada: regra de negócio, dados bem modelados,
          APIs previsíveis e performance sem drama.
        </p>

        <div class="flex flex-wrap gap-2 mt-6">
          <span class="chip">PHP</span>
          <span class="chip">PostgreSQL</span>
          <span class="chip">APIs</span>
          <span class="chip">Node.js</span>
          <span class="chip">Vue</span>
        </div>
      </div>

      <div v-reveal class="space-y-6">
        <div class="glass p-8 rounded-2xl border border-white/10">
          <h3 class="text-xl font-bold mb-4">O que eu entrego</h3>
          <ul class="space-y-3 text-white/75">
            <li class="li">Arquitetura simples e manutenível</li>
            <li class="li">Consultas SQL e performance</li>
            <li class="li">APIs REST bem definidas</li>
            <li class="li">Painéis admin e fluxos reais</li>
          </ul>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div class="glass rounded-xl border border-white/10 p-4 text-center">
            <p class="text-2xl font-black text-white">+X</p>
            <p class="text-xs text-white/60 mt-1">projetos reais</p>
          </div>
          <div class="glass rounded-xl border border-white/10 p-4 text-center">
            <p class="text-2xl font-black text-white">API</p>
            <p class="text-xs text-white/60 mt-1">first mindset</p>
          </div>
          <div class="glass rounded-xl border border-white/10 p-4 text-center">
            <p class="text-2xl font-black text-white">DB</p>
            <p class="text-xs text-white/60 mt-1">sem gambiarra</p>
          </div>
        </div>
      </div>
    </div>
  </SectionShell>
</template>

<script setup>
import SectionShell from './SectionShell.vue'
</script>
