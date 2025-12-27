<template>
  <header class="fixed top-0 left-0 right-0 z-50
           backdrop-blur-md bg-bg0/80
           border-b border-white/10
           transition-colors">
    <div class="max-w-6xl mx-auto px-6 py-4
             flex items-center justify-between">
      <!-- LOGO -->
      <a href="#top" class="font-bold text-lg tracking-tight">
        <span class="text-cyanx">Vini</span>
        <span class="text-white/60">.dev</span>
      </a>

      <!-- MENU -->
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
        <!-- CTA -->
        <a href="#projects" class="px-4 py-2 rounded-lg text-sm font-semibold
                 border border-white/20
                 hover:bg-white/10 transition">
          {{ content[lang].nav.cta }}
        </a>

        <!-- TOGGLE LANG -->
        <button @click="toggleLang" class="flex items-center gap-2
         text-xs font-bold tracking-widest
         border border-white/20 rounded-full
         px-3 py-2
         hover:bg-white/10 transition">
          <!-- Ícone -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9Zm0 0c2.5 2.8 2.5 14.2 0 18m0-18c-2.5 2.8-2.5 14.2 0 18M3 12h18" />
          </svg>

          <!-- Texto -->
          {{ lang === "pt" ? "EN" : "PT" }}
        </button>

      </div>
    </div>
  </header>
</template>

<script setup>
import { lang, toggleLang } from "@/i18n/lang";
import { content } from "@/i18n/content";
</script>
