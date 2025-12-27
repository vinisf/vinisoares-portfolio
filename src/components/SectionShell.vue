<template>
  <section
    :id="id"
    class="relative py-28 px-6 overflow-hidden"
  >
    <div class="relative z-10">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: String,
})
</script>
