<template>
  <div
 v-reveal
  @click="$emit('click')"
  class="group cursor-pointer relative rounded-2xl p-[1px]
           bg-gradient-to-br from-white/10 to-white/5
           hover:from-cyanx/40 hover:to-neon/40
           transition"
  >
    <div
      class="relative h-full rounded-2xl p-8
             bg-[#070711]
             flex flex-col justify-between
             transition-transform duration-300
             group-hover:-translate-y-1"
    >
      <div>
        <h3 class="text-2xl font-bold mb-4">
          {{ title }}
        </h3>

        <p class="text-white/70 mb-6 leading-relaxed">
          {{ description }}
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <span
          class="text-sm text-cyanx font-medium"
        >
          {{ stack }}
        </span>

        <span class="text-sm text-white/40">
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
