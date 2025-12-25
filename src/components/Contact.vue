<template>
  <section
    id="contact"
    class="relative py-28 px-6"
  >
    <div
      class="max-w-4xl mx-auto text-center
             rounded-2xl border border-white/10
             bg-white/5 p-12"
      v-reveal
    >
      <p class="text-cyanx tracking-[0.3em] text-sm mb-4">
        CONTATO
      </p>

      <h2 class="text-4xl md:text-5xl font-black mb-6">
        Vamos conversar?
      </h2>

      <p class="text-white/70 mb-10 max-w-xl mx-auto">
        Estou aberto a oportunidades, projetos e boas conversas
        sobre tecnologia. Se fizer sentido, é só chamar.
      </p>

      <div class="flex flex-col md:flex-row gap-4 justify-center">
        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/vinisoaresdev/"
          target="_blank"
          class="px-6 py-3 rounded-xl font-semibold
                 bg-gradient-to-r from-cyanx to-limey
                 text-black hover:scale-105 transition"
        >
          LinkedIn
        </a>

        <!-- Email -->
        <a
          href="mailto:vinicius.soares@email.com"
          class="px-6 py-3 rounded-xl font-semibold
                 border border-white/20
                 hover:bg-white/10 transition"
        >
          Email
        </a>

        <!-- WhatsApp (opcional) -->
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          class="px-6 py-3 rounded-xl font-semibold
                 border border-white/20
                 hover:bg-white/10 transition"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>
