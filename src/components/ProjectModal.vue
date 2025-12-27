<template>
  <div
    v-if="open"
    class="fixed inset-0 z-[999]
           flex items-center justify-center
           px-4 py-6 sm:py-10"
  >
    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-black/70 backdrop-blur-sm"
      @click="close"
    ></div>

    <!-- Modal -->
    <div
      class="relative z-10 w-full
             max-w-lg sm:max-w-xl lg:max-w-2xl
             max-h-[90vh]
             rounded-2xl bg-[#0b0b14]
             border border-white/10
             overflow-hidden
             animate-modal"
    >
      <!-- SLIDER -->
      <div
        v-if="project.images && project.images.length"
        class="relative
               h-40 sm:h-48 md:h-56
               overflow-hidden"
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
                 bg-black/60 hover:bg-black/80
                 text-white
                 w-10 h-10 rounded-full
                 flex items-center justify-center"
        >
          ‹
        </button>

        <button
          v-if="project.images.length > 1"
          @click.stop="next"
          class="absolute right-3 top-1/2 -translate-y-1/2
                 bg-black/60 hover:bg-black/80
                 text-white
                 w-10 h-10 rounded-full
                 flex items-center justify-center"
        >
          ›
        </button>

        <!-- Indicadores -->
        <div
          v-if="project.images.length > 1"
          class="absolute bottom-3 left-1/2 -translate-x-1/2
                 flex gap-2"
        >
          <span
            v-for="(_, i) in project.images"
            :key="i"
            class="w-2 h-2 rounded-full transition"
            :class="i === current ? 'bg-white' : 'bg-white/40'"
          ></span>
        </div>
      </div>

      <!-- CONTEÚDO -->
      <div
        class="relative p-5 sm:p-6
               overflow-y-auto
               max-h-[60vh] sm:max-h-[65vh]"
      >
        <!-- Fechar -->
        <button
          class="absolute top-3 right-3
                 text-white/60 hover:text-white
                 text-lg"
          @click="close"
        >
          ✕
        </button>

        <h3 class="text-xl sm:text-2xl font-bold mb-3">
          {{ project.title }}
        </h3>

        <p class="text-white/70 mb-6 leading-relaxed">
          {{ project.longDescription }}
        </p>

        <div class="mb-6">
          <h4 class="text-xs uppercase tracking-wider text-white/40 mb-1">
            Stack
          </h4>
          <p class="text-cyanx font-medium">
            {{ project.stack }}
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            class="flex-1 px-4 py-2 rounded-lg
                   bg-white text-black font-semibold
                   text-center"
          >
            GitHub
          </a>

          <a
            v-if="project.live"
            :href="project.live"
            target="_blank"
            class="flex-1 px-4 py-2 rounded-lg
                   border border-white/20
                   text-center"
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


watch(
  () => props.open,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    if (isOpen) current.value = 0
  }
)


</script>
