<template>
  <div
    v-if="open"
    class="fixed inset-0 z-50 flex items-center justify-center px-4"
  >
    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-black/70 backdrop-blur-sm"
      @click="close"
    ></div>

    <!-- Modal -->
    <div
      class="relative z-10 w-full max-w-xl
             rounded-2xl bg-[#0b0b14]
             border border-white/10
             overflow-hidden animate-modal"
    >
      <!-- SLIDER -->
      <div
        v-if="project.images && project.images.length"
        class="relative h-52 overflow-hidden"
      >
        <img
          :src="project.images[current]"
          class="w-full h-full object-cover transition"
          alt="Preview do projeto"
        />

        <!-- Setas -->
        <button
          v-if="project.images.length > 1"
          @click.stop="prev"
          class="absolute left-3 top-1/2 -translate-y-1/2
                 bg-black/50 hover:bg-black/70
                 text-white w-9 h-9 rounded-full"
        >
          ‹
        </button>

        <button
          v-if="project.images.length > 1"
          @click.stop="next"
          class="absolute right-3 top-1/2 -translate-y-1/2
                 bg-black/50 hover:bg-black/70
                 text-white w-9 h-9 rounded-full"
        >
          ›
        </button>

        <!-- Indicadores -->
        <div
          v-if="project.images.length > 1"
          class="absolute bottom-2 left-1/2 -translate-x-1/2
                 flex gap-2"
        >
          <span
            v-for="(_, i) in project.images"
            :key="i"
            class="w-2 h-2 rounded-full"
            :class="i === current ? 'bg-white' : 'bg-white/40'"
          ></span>
        </div>
      </div>

      <!-- Conteúdo -->
      <div class="p-6 max-h-[65vh] overflow-y-auto relative">
        <button
          class="absolute top-3 right-3 text-white/60 hover:text-white"
          @click="close"
        >
          ✕
        </button>

        <h3 class="text-2xl font-bold mb-3">
          {{ project.title }}
        </h3>

        <p class="text-white/70 mb-5 leading-relaxed">
          {{ project.longDescription }}
        </p>

        <div class="mb-5">
          <h4 class="text-xs text-white/50 mb-1">Stack</h4>
          <p class="text-cyanx font-medium">
            {{ project.stack }}
          </p>
        </div>

        <div class="flex gap-3">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            class="px-4 py-2 rounded-lg bg-white text-black font-semibold"
          >
            GitHub
          </a>

          <a
            v-if="project.live"
            :href="project.live"
            target="_blank"
            class="px-4 py-2 rounded-lg border border-white/20"
          >
            Ver live
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  open: Boolean,
  project: Object,
})

const emit = defineEmits(['close'])

const current = ref(0)

watch(
  () => props.project,
  () => {
    current.value = 0
  }
)

function next() {
  current.value =
    (current.value + 1) % props.project.images.length
}

function prev() {
  current.value =
    (current.value - 1 + props.project.images.length) %
    props.project.images.length
}

function close() {
  emit('close')
}

// ESC
function handleKey(e) {
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKey)
})
</script>
