<template>
  <footer class="relative px-6 pt-24 pb-10">
    <!-- divisor sutil -->
    <div
      class="max-w-6xl mx-auto mb-12
             h-px
             bg-gradient-to-r
             from-transparent
             via-white/10
             to-transparent"
    ></div>

    <div
      class="max-w-6xl mx-auto
             flex flex-col md:flex-row
             gap-8
             items-center
             justify-between"
    >
      <!-- identidade -->
      <div class="text-center md:text-left">
        <p class="text-lg font-bold">
          Vinicius Soares
        </p>
        <p class="text-sm text-white/50 mt-1">
          Full Stack Developer
        </p>
      </div>

      <!-- links -->
      <div class="flex gap-6 text-sm">
        <a
          href="#projects"
          class="text-white/60 hover:text-cyan-400 transition"
        >
          Projetos
        </a>

        <a
          href="#about"
          class="text-white/60 hover:text-cyan-400 transition"
        >
          Sobre
        </a>

        <a
          href="#contact"
          class="text-white/60 hover:text-cyan-400 transition"
        >
          Contato
        </a>
      </div>

      <!-- social -->
      <div class="flex gap-4">
        <a
          href="https://www.linkedin.com/in/vinisoaresdev/"
          target="_blank"
          class="w-9 h-9
                 flex items-center justify-center
                 rounded-full
                 border border-white/15
                 text-white/70
                 hover:text-cyan-400
                 hover:border-cyan-400/50
                 transition"
        >
          <!-- linkedin -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM6.813 20.452H3.861V9h2.952v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z"/>
          </svg>
        </a>

        <a
          href="https://github.com/vinisf"
          target="_blank"
          class="w-9 h-9
                 flex items-center justify-center
                 rounded-full
                 border border-white/15
                 text-white/70
                 hover:text-purple-400
                 hover:border-purple-400/50
                 transition"
        >
          <!-- github -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.04c-3.338.725-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.746.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.475 5.92.432.372.816 1.102.816 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- copyright -->
    <p class="text-center text-xs text-white/40 mt-12">
      © {{ year }} Vinicius Soares. Todos os direitos reservados.
    </p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
