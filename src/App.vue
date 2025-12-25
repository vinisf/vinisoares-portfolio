<template>
  <main class="relative min-h-screen text-white">
    <NavBar />
    <Hero />
    <Projects />
    <About />
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
