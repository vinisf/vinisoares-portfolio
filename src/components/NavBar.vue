<template>
  <header
    class="fixed top-0 left-0 right-0 z-50
           backdrop-blur-md bg-bg0/70
           border-b border-white/10"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      
      <!-- LOGO / NOME -->
      <a
        href="#top"
        class="font-bold text-lg tracking-tight"
      >
        <span class="text-cyanx">Vini</span>
        <span class="text-white/60">.dev</span>
      </a>

      <!-- MENU -->
      <nav class="hidden md:flex items-center gap-8 text-sm text-white/70">
        <a href="#about" class="hover:text-white transition">Sobre</a>
        <a href="#projects" class="hover:text-white transition">Projetos</a>
        <a href="#contact" class="hover:text-white transition">Contato</a>
      </nav>

      <!-- CTA -->
      <a
        href="#projects"
        class="px-4 py-2 rounded-lg text-sm font-semibold
               border border-white/20
               hover:bg-white/10 transition"
      >
        Ver projetos
      </a>
    </div>
  </header>
</template>
