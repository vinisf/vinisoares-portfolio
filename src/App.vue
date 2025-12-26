<template>
  <main class="relative min-h-screen text-white">
    <NavBar />
  <Hero />

<SectionShell
  id="projects"
  glowA="animate-glow-1"
  glowB="animate-glow-2"
  class="bg-section-blue"
>
  <Projects />
</SectionShell>

<SectionShell id="about" class="bg-section-neutral">
  <About />
</SectionShell>

<SectionShell id="contact" class="bg-section-purple">
  <Contact />
</SectionShell>

  </main>
</template>


<script setup>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
</script>
