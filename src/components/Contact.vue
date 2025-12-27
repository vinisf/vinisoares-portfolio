<template>
  <SectionShell
    id="contact"
    glowA="animate-glow-1"
    class="bg-section-contact"
  >
    <div class="max-w-4xl mx-auto px-4">
      <div
        class="glass rounded-2xl
               border border-white/10
               p-8 sm:p-10 md:p-14
               text-center"
        v-reveal
      >
        <p class="text-cyanx tracking-[0.3em] text-sm mb-4">
          CONTATO
        </p>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black mb-5">
          Bora trabalhar junto?
        </h2>

        <p class="text-white/70 max-w-xl mx-auto mb-10">
          Se você curte backend bem feito, dados organizados e produto
          funcionando de verdade, chama.
        </p>

        <!-- BOTÕES -->
        <div
          class="flex flex-col sm:flex-row
                 gap-4 justify-center items-center"
        >
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/vinisoaresdev/"
            target="_blank"
            class="btn-primary btn-primary-dark flex items-center gap-2"
          >
            <!-- ícone -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM6.813 20.452H3.861V9h2.952v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z"
              />
            </svg>
            LinkedIn
          </a>

          <!-- Email -->
          <a
            href="mailto:SEU_EMAIL_AQUI"
            class="btn-ghost flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75m19.5 0-9.75 6.75L2.25 6.75"
              />
            </svg>
            Email
          </a>

          <!-- WhatsApp -->
          <a
            href="https://wa.me/55SEUNUMERO"
            target="_blank"
            class="btn-ghost flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.52 3.48A11.85 11.85 0 0 0 12 0C5.373 0 0 5.373 0 12a11.94 11.94 0 0 0 1.68 6.12L0 24l6.12-1.68A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12a11.85 11.85 0 0 0-3.48-8.52ZM12 21.75a9.7 9.7 0 0 1-4.95-1.35l-.36-.21-3.63 1 1-3.63-.21-.36A9.7 9.7 0 0 1 2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75Zm5.49-7.29c-.3-.15-1.77-.87-2.04-.96-.27-.09-.47-.15-.66.15-.19.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.34.45-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.13 3.26 5.17 4.57.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z"
              />
            </svg>
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
