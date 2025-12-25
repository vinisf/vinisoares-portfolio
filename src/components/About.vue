<template>
  <section
    id="about"
    class="relative py-28 px-6"
  >
    <div
      class="max-w-5xl mx-auto grid gap-12 md:grid-cols-2 items-center"
    >
      <!-- TEXTO -->
      <div v-reveal>
        <p class="text-cyanx tracking-[0.3em] text-sm mb-4">
          SOBRE MIM
        </p>

        <h2 class="text-4xl md:text-5xl font-black mb-6">
          Dev focado em produto,
          <br class="hidden md:block" />
          não só em código
        </h2>

        <p class="text-white/70 leading-relaxed mb-6">
          Sou desenvolvedor com experiência em sistemas reais,
          principalmente no backend, lidando com regras de negócio,
          dados sensíveis e aplicações que precisam funcionar de verdade.
        </p>

        <p class="text-white/70 leading-relaxed mb-8">
          Já atuei com PHP, PostgreSQL e APIs REST em ambientes de produção,
          sempre buscando código simples, performático e fácil de manter.
          Hoje também exploro Node.js e arquiteturas mais modernas.
        </p>

        <a
          href="#projects"
          class="inline-flex items-center gap-2
                 text-cyanx font-semibold hover:gap-3 transition-all"
        >
          Ver projetos
          <span>→</span>
        </a>
      </div>

      <!-- STACK / HIGHLIGHTS -->
      <div
        v-reveal
        class="rounded-2xl border border-white/10
               bg-white/5 p-8"
      >
        <h3 class="text-xl font-bold mb-6">
          Stack & foco atual
        </h3>

        <ul class="space-y-4 text-white/80">
          <li>• Backend com PHP e Node.js</li>
          <li>• APIs REST e regras de negócio</li>
          <li>• PostgreSQL e modelagem de dados</li>
          <li>• Integração frontend com Vue</li>
          <li>• Código limpo e sustentável</li>
        </ul>
      </div>
    </div>
  </section>
</template>
