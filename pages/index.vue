<template>
  <div class="container">

    <Serchbox />
    <MyCommunity />
    <HowToUse />
      <!-- <h2 class="subtitle">
        show community&#39;s restaurant
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div> -->
    <n-link to="text">text</n-link>
      <n-link to="individual">個別ページへ</n-link>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Header from '~/components/Header.vue'
import Serchbox from '~/components/Serchbox.vue'
import MyCommunity from '~/components/MyCommunity.vue'
import HowToUse from '~/components/HowToUse.vue'

export default {
  components: {
    Logo,
    Header,
    Serchbox,
    MyCommunity,
    HowToUse
  }
}
</script>

<style scoped>
/* template{
  margin: 0;
} */

.container {
  margin: 0 auto;
  padding: 0;
  /* min-height: 100vh; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* text-align: center; */
}

/* .title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
