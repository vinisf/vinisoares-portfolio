<template>
  <section id="contact" class="relative py-28 px-6">
    <div class="max-w-4xl mx-auto px-4">
      <div class="glass rounded-2xl
               border border-white/10
               p-8 sm:p-10 md:p-14
               text-center" v-reveal>
        <p class="text-cyanx tracking-[0.3em] text-sm mb-4">
          {{ content[lang].contact.label }}
        </p>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black mb-5">
          {{ content[lang].contact.title }}
        </h2>

        <p class="text-white/70 max-w-xl mx-auto mb-10">
          {{ content[lang].contact.text }}
        </p>

        <!-- BOTÕES -->
        <div class="flex flex-col sm:flex-row
                 gap-4 justify-center items-center">
          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/vinisoaresdev/" target="_blank"
            class="btn-primary btn-primary-dark flex items-center gap-2">
            <!-- Ícone -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM6.813 20.452H3.861V9h2.952v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
            </svg>
            LinkedIn
          </a>

          <!-- Email -->
          <a href="mailto:vini-sf@outlook.com" class="btn-ghost flex items-center gap-2">
            Email
          </a>

          <!-- WhatsApp -->
          <a href="https://wa.me/5598985081959" target="_blank" class="btn-ghost flex items-center gap-2">
            WhatsApp
          </a>
        </div>

        <p class="text-white/40 text-sm mt-10">
          {{ content[lang].contact.footer }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { content } from "@/i18n/content";
import { lang } from "@/i18n/lang";
</script>
