<template>
 <a class="skip-link" href="#main">{{ content[lang].ui.skip }}</a>
 <Navbar :open="open" @open-menu="open = true" />
 <MobileMenu :open="open" @close="open = false" />
 <main id="main" tabindex="-1"><Hero /><About /><Experience /><Projects /><Contact /></main>
 <Footer /><ScrollTop />
</template>
<script setup>
import { ref } from 'vue';
import { content } from './i18n/content';
import { lang } from './i18n/lang';
import Navbar from './components/NavBar.vue';
import MobileMenu from './components/MobileMenu.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import ScrollTop from './components/ScrollTop.vue';
const open = ref(false);
</script>
