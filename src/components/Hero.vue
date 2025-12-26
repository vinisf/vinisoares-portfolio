<template>
  <section
    id="top"
    class="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
  >
    <!-- BACKGROUND BASE -->
    <div class="absolute inset-0 bg-[#070711]"></div>

    <!-- GLOW ANIMADO -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <!-- Glow 1 -->
      <div
        class="absolute top-[-200px] left-[-200px]
               w-[700px] h-[700px]
               rounded-full
               bg-blue-500
               opacity-40
               blur-[140px]
               animate-glow-1"
      ></div>

      <!-- Glow 2 -->
      <div
        class="absolute bottom-[-250px] right-[-200px]
               w-[650px] h-[650px]
               rounded-full
               bg-purple-500
               opacity-35
               blur-[160px]
               animate-glow-2"
      ></div>
    </div>

    <!-- CONTEÚDO -->
<div class="relative z-10 max-w-3xl text-center" v-reveal>
      <p class="text-sm tracking-[0.3em] text-white/60 mb-4">
        FULL STACK DEVELOPER
      </p>

      <h1 class="text-5xl md:text-7xl font-black mb-6">
        Vinicius Soares
      </h1>

      <p class="text-white/70 text-lg mb-10">
        Construo produtos web com foco em performance, APIs bem feitas e UX limpa.
      </p>

      <div class="flex justify-center gap-4">
<a href="#projects" class="btn-primary btn-primary-dark">
  Ver projetos
</a>

<a href="#projects" class="btn-primary">

          Contato
        </a>
      </div>
    </div>
  </section>
</template>
