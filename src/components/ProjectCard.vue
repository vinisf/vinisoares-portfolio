<template>
  <div
    @click="$emit('click')"
    class="group relative cursor-pointer
           rounded-2xl p-7 sm:p-8
           bg-gradient-to-b from-white/10 to-white/5
           border border-white/10
           transition-all duration-300
           hover:-translate-y-1
           hover:border-cyan-400/40
           hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]"
  >
    <!-- Linha de destaque -->
    <div
      class="absolute inset-x-6 top-0 h-[2px]
             bg-gradient-to-r from-cyan-400/0 via-cyan-400/60 to-cyan-400/0
             opacity-0 group-hover:opacity-100 transition"
    ></div>

    <!-- Conteúdo -->
    <div class="flex flex-col h-full justify-between">
      <div>
        <h3 class="text-xl sm:text-2xl font-bold mb-3">
          {{ title }}
        </h3>

        <p class="text-white/70 leading-relaxed mb-6">
          {{ description }}
        </p>
      </div>

      <div class="flex flex-col gap-3">
        <span class="text-sm text-cyanx font-medium">
          {{ stack }}
        </span>

        <span class="text-xs text-white/40 tracking-wide">
          Projeto real • Produção
        </span>
      </div>
    </div>
  </div>
</template>



<script setup>
defineProps({
  title: String,
  description: String,
  stack: String,
})
defineEmits(['click'])
</script>
