<template>
  <SectionShell id="contact" glowA="animate-glow-1" glowB="">
    <div class="max-w-4xl mx-auto">
      <div class="glass rounded-2xl border border-white/10 p-10 md:p-14 text-center" v-reveal>
        <p class="text-cyanx tracking-[0.3em] text-sm mb-4">CONTATO</p>
        <h2 class="text-4xl md:text-5xl font-black mb-5">Bora trabalhar junto?</h2>
        <p class="text-white/70 max-w-xl mx-auto mb-10">
          Se você curte backend bem feito, dados organizados e produto funcionando de verdade, chama.
        </p>

        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/vinisoaresdev/"
            target="_blank"
            class="btn-primary"
          >
            LinkedIn ↗
          </a>

          <a href="mailto:SEU_EMAIL_AQUI" class="btn-ghost">
            Email
          </a>

          <a href="https://wa.me/55SEUNUMERO" target="_blank" class="btn-ghost">
            WhatsApp
          </a>
        </div>

        <p class="text-white/40 text-sm mt-10">
          Respondo mais rápido pelo LinkedIn.
        </p>
      </div>
    </div>
  </SectionShell>
</template>

<script setup>
import SectionShell from './SectionShell.vue'
</script>
