<template>
  <header
    class="fixed top-0 left-0 right-0 z-50
           backdrop-blur-md bg-bg0/80
           border-b border-white/10"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- LOGO -->
      <a href="#top" class="font-bold text-lg tracking-tight">
        <span class="text-cyanx">Vini</span>
        <span class="text-white/60">.dev</span>
      </a>

      <!-- MENU DESKTOP -->
      <nav class="hidden md:flex items-center gap-8 text-sm text-white/70">
        <a href="#about" class="hover:text-white transition">
          {{ content[lang].nav.about }}
        </a>
        <a href="#projects" class="hover:text-white transition">
          {{ content[lang].nav.projects }}
        </a>
        <a href="#contact" class="hover:text-white transition">
          {{ content[lang].nav.contact }}
        </a>
      </nav>

      <!-- AÇÕES -->
      <div class="flex items-center gap-3">
        <!-- HAMBURGER -->
        <button
          class="md:hidden flex flex-col gap-1"
          @click="$emit('open-menu')"
          aria-label="Abrir menu"
        >
          <span class="w-5 h-[2px] bg-white"></span>
          <span class="w-5 h-[2px] bg-white"></span>
          <span class="w-5 h-[2px] bg-white"></span>
        </button>

        <!-- TOGGLE LANG -->
        <button
          @click="toggleLang"
          class="hidden md:flex items-center gap-2
                 text-xs font-bold tracking-widest
                 border border-white/20 rounded-full
                 px-3 py-2
                 hover:bg-white/10 transition"
        >
          {{ lang === "pt" ? "EN" : "PT" }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { lang, toggleLang } from "@/i18n/lang";
import { content } from "@/i18n/content";

defineEmits(["open-menu"]);
</script>
