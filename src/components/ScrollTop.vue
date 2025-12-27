<template>
  <transition name="fade-up">
    <button
      v-if="visible"
      @click="scrollTop"
      aria-label="Voltar ao topo"
      class="fixed bottom-6 right-6 z-40
             w-12 h-12 rounded-full
             flex items-center justify-center
             bg-[#0b0b14]
             border border-white/10
             shadow-[0_20px_60px_rgba(0,0,0,0.6)]
             hover:scale-110 transition"
    >
      <!-- Ícone -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-cyanx"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const visible = ref(false);

function onScroll() {
  visible.value = window.scrollY > 300;
}

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>
