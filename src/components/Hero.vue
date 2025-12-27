<template>
  <section
    id="top"
    class="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
  >
    <!-- CONTEÚDO -->
    <div
      class="relative z-10 w-full
             max-w-5xl lg:max-w-6xl
             mx-auto
             grid grid-cols-1 md:grid-cols-2
             gap-8 md:gap-10 lg:gap-12
             items-center"
      v-reveal
    >
      <!-- TEXTO -->
      <div class="text-center md:text-left max-w-xl mx-auto md:mx-0">
        <p class="text-sm tracking-[0.3em] text-white/60 mb-4">
          {{ content[lang].hero.role }}
        </p>

        <h1 class="text-5xl md:text-6xl font-black mb-6">
          {{ content[lang].hero.title }}
        </h1>

        <p class="text-white/70 text-lg mb-10">
          {{ content[lang].hero.subtitle }}
        </p>

        <div class="flex justify-center md:justify-start gap-4">
          <a href="#projects" class="btn-primary btn-primary-dark">
            {{ content[lang].hero.projects }}
          </a>

          <a href="#contact" class="btn-ghost">
            {{ content[lang].hero.contact }}
          </a>
        </div>
      </div>

      <!-- FOTO -->
      <div class="relative flex justify-center group">
        <!-- Glow LOCAL da foto -->
        <div
          class="absolute
                 w-[260px] h-[260px]
                 lg:w-[300px] lg:h-[300px]
                 rounded-full
                 bg-cyan-400/20
                 blur-[160px]"
        ></div>

        <!-- Ring animado -->
        <div class="ring-animated group-hover:ring-fast"></div>

        <!-- Foto -->
        <div
          class="relative
                 w-[180px] h-[180px]
                 sm:w-[200px] sm:h-[200px]
                 md:w-[230px] md:h-[230px]
                 lg:w-[260px] lg:h-[260px]
                 rounded-full
                 overflow-hidden
                 border border-white/20
                 shadow-[0_30px_80px_rgba(0,0,0,0.7)]
                 animate-float-soft"
        >
          <img
            src="/src/assets/profile.png"
            alt="Foto de Vinicius Soares"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { content } from "@/i18n/content";
import { lang } from "@/i18n/lang";
</script>
