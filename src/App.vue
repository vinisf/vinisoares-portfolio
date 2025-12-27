<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- BACKGROUND GLOBAL (camada isolada) -->
    <div class="fixed inset-0 -z-10 bg-global"></div>

    <!-- NAVBAR -->
    <Navbar @open-menu="open = true" />

    <!-- MENU MOBILE -->
    <MobileMenu
      :open="open"
      @close="open = false"
    />
<ScrollTop />

    <!-- CONTEÚDO -->
    <main class="relative z-10">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Navbar from "@/components/Navbar.vue";
import MobileMenu from "@/components/MobileMenu.vue";

const open = ref(false);

watch(open, v => {
  document.body.style.overflow = v ? "hidden" : "";
});




import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ScrollTop from "./components/ScrollTop.vue";


</script>

