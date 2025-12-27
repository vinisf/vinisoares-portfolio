<template>
  <header
    class="fixed top-0 left-0 right-0 z-50
           backdrop-blur-md bg-bg0/80
           border-b border-white/10
           transition-colors"
  >
    <div
      class="max-w-6xl mx-auto px-6 py-4
             flex items-center justify-between"
    >
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
      <div
        class="flex items-center gap-3 transition-opacity duration-200"
        :class="open ? 'opacity-0 pointer-events-none' : 'opacity-100'"
      >
        <!-- HAMBURGER -->
        <button
          class="md:hidden flex flex-col justify-center gap-1"
          @click="open = true"
          aria-label="Abrir menu"
        >
          <span class="w-5 h-[2px] bg-white"></span>
          <span class="w-5 h-[2px] bg-white"></span>
          <span class="w-5 h-[2px] bg-white"></span>
        </button>

        <!-- TOGGLE LANG -->
        <button
          @click="toggleLang"
          class="flex items-center gap-2
                 text-xs font-bold tracking-widest
                 border border-white/20 rounded-full
                 px-3 py-2
                 hover:bg-white/10 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 text-white/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9Zm0 0c2.5 2.8 2.5 14.2 0 18m0-18c-2.5 2.8-2.5 14.2 0 18M3 12h18"
            />
          </svg>

          {{ lang === "pt" ? "EN" : "PT" }}
        </button>
      </div>
    </div>

    <!-- MENU MOBILE -->
    <transition name="menu">
    <div
  v-if="open"
  class="fixed inset-0 z-[60]
         bg-[#070711]/90
         backdrop-blur-xl
         md:hidden"
>

        <div class="flex flex-col h-full">
          <!-- HEADER MOBILE -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <span class="font-bold text-lg">
              <span class="text-cyanx">Vini</span>
              <span class="text-white/60">.dev</span>
            </span>

            <button
              @click="close"
              class="text-2xl text-white"
              aria-label="Fechar menu"
            >
              ✕
            </button>
          </div>

          <!-- LINKS -->
          <nav
            class="flex-1 flex flex-col
                   items-center justify-center
                   gap-10 text-2xl font-bold"
          >
            <a @click="go('#about')" class="mobile-link">
              {{ content[lang].nav.about }}
            </a>
            <a @click="go('#projects')" class="mobile-link">
              {{ content[lang].nav.projects }}
            </a>
            <a @click="go('#contact')" class="mobile-link">
              {{ content[lang].nav.contact }}
            </a>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import { lang, toggleLang } from "@/i18n/lang";
import { content } from "@/i18n/content";

const open = ref(false);

function close() {
  open.value = false;
}

function go(hash) {
  close();
  setTimeout(() => {
    window.location.hash = hash;
  }, 120);
}

// trava scroll no mobile
watch(open, (v) => {
  document.body.style.overflow = v ? "hidden" : "";
});
</script>
