<template>
  <div class="fixed inset-0 -z-10 overflow-hidden">
    <!-- Base gradiente -->
    <div class="absolute inset-0 bg-global"></div>

    <!-- Luz Ciano -->
    <div
      class="absolute -top-72 -left-72
             w-[900px] h-[900px]
             rounded-full
             bg-cyan-400/25
             blur-[200px]
             animate-bg-cyan"
    ></div>

    <!-- Luz Roxa -->
    <div
      class="absolute bottom-[-350px] right-[-300px]
             w-[1000px] h-[1000px]
             rounded-full
             bg-purple-500/18
             blur-[220px]
             animate-bg-purple"
    ></div>

    <!-- Neblina branca sutil -->
    <div
      class="absolute inset-0 bg-noise opacity-10"
    ></div>
  </div>
</template>
