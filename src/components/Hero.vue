<template>
  <section
    id="top"
    class="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
  >
    <!-- BACKGROUND BASE -->
    <div class="absolute inset-0 bg-[#070711]"></div>

    <!-- GLOWS -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <!-- Glow Ciano -->
      <div
        class="absolute -top-[220px] -left-[220px]
               w-[720px] h-[720px]
               rounded-full
               bg-cyan-400
               opacity-[0.25]
               blur-[180px]
               animate-glow-1"
      ></div>

      <!-- Glow Roxo -->
      <div
        class="absolute -bottom-[260px] -right-[240px]
               w-[680px] h-[680px]
               rounded-full
               bg-purple-500
               opacity-[0.18]
               blur-[200px]
               animate-glow-2"
      ></div>
    </div>

    <!-- CONTEÚDO -->
    <div
      class="relative z-10 w-full
             max-w-5xl lg:max-w-6xl
             mx-auto
             grid grid-cols-1 md:grid-cols-2
             gap-8 md:gap-10 lg:gap-12
             items-center"
      v-reveal
    >
      <!-- TEXTO -->
      <div class="text-center md:text-left max-w-xl mx-auto md:mx-0">
        <p class="text-xs sm:text-sm tracking-[0.35em] text-white/60 mb-4">
          FULL STACK DEVELOPER
        </p>

        <h1
          class="font-black mb-6
                 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Vinicius Soares
        </h1>

        <p class="text-white/70 text-base sm:text-lg mb-10">
          Construo produtos web com foco em performance, APIs bem feitas e UX limpa.
        </p>

        <div class="flex justify-center md:justify-start gap-4">
          <a href="#projects" class="btn-primary btn-primary-dark">
            Ver projetos
          </a>

          <a href="#contact" class="btn-ghost">
            Contato
          </a>
        </div>
      </div>

      <!-- FOTO -->
      <div class="relative flex justify-center group">
        <!-- Glow atrás da foto -->
        <div
          class="absolute
                 w-[240px] h-[240px]
                 sm:w-[260px] sm:h-[260px]
                 lg:w-[300px] lg:h-[300px]
                 rounded-full
                 bg-cyan-400/25
                 blur-[150px]"
        ></div>

        <!-- Ring animado -->
        <div class="ring-animated group-hover:ring-fast"></div>

        <!-- Container da foto -->
        <div
          class="relative
                 w-[180px] h-[180px]
                 sm:w-[200px] sm:h-[200px]
                 md:w-[230px] md:h-[230px]
                 lg:w-[260px] lg:h-[260px]
                 rounded-full
                 overflow-hidden
                 border border-white/20
                 shadow-[0_30px_80px_rgba(0,0,0,0.7)]
                 animate-float-soft"
        >
          <img
            src="/src/assets/profile.png"
            alt="Foto de Vinicius Soares"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>
