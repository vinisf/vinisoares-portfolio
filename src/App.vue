<template>
  <main class="relative min-h-screen text-white">
    <NavBar />
    <Hero />
    <SectionDivider />
    <Projects />
    <SectionDivider />
    <About />
    <SectionDivider />
    <Contact />

  </main>
</template>


<script setup>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
</script>
