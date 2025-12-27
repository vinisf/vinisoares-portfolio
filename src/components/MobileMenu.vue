<template>
  <transition name="menu-slide">
    <div
      v-if="open"
      class="fixed inset-0 z-[999] md:hidden"
    >
      <!-- OVERLAY -->
      <div
        class="absolute inset-0 bg-black/40 backdrop-blur-sm"
        @click="$emit('close')"
      ></div>

      <!-- MENU LATERAL -->
      <aside
        class="absolute top-0 right-0 h-full
               w-[85%] max-w-sm
               bg-[#0b0b14]
               border-l border-white/10
               px-8 py-10
               flex flex-col
               animate-menu-panel"
      >
        <!-- HEADER -->
        <div class="flex items-center justify-between mb-12">
          <span class="font-bold text-lg">
            <span class="text-cyanx">Vini</span>
            <span class="text-white/60">.dev</span>
          </span>

          <button
            @click="$emit('close')"
            class="text-2xl text-white/70 hover:text-white"
          >
            ✕
          </button>
        </div>

        <!-- LINKS -->
        <nav class="flex flex-col gap-8 text-2xl font-bold">
          <a @click="go('#about')" class="mobile-link">Sobre</a>
          <a @click="go('#projects')" class="mobile-link">Projetos</a>
          <a @click="go('#contact')" class="mobile-link">Contato</a>
        </nav>

        <!-- FOOTER -->
        <div class="mt-auto pt-10 text-xs text-white/40">
          © {{ new Date().getFullYear() }} Vini.dev
        </div>
      </aside>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({ open: Boolean });
const emit = defineEmits(["close"]);

function go(id) {
  emit("close");

  setTimeout(() => {
    const el = document.querySelector(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 300);
}
</script>
