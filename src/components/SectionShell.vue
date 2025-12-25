<template>
  <section :id="id"  class="relative py-28 px-6 bg-section overflow-hidden ">
    <!-- textura sutil -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-[#070711]"></div>

      <!-- grid bem leve -->
      <div class="absolute inset-0 opacity-[0.06] bg-grid"></div>

      <!-- glow suave por seção -->
      <div
        class="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full
               bg-cyanx/20 blur-[140px]"
        :class="glowA"
      ></div>
      <div
        class="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full
               bg-neon/20 blur-[160px]"
        :class="glowB"
      ></div>
    </div>

    <!-- conteúdo -->
    <div class="relative z-10">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: String,
  glowA: { type: String, default: '' },
  glowB: { type: String, default: '' },
})
</script>
