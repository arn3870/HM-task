<template>
  <div class="grid grid-cols-1 md:grid-cols-2 l:grid-cols-2">
    <div class="bg-[#2E77AE] h-screen flex items-center justify-center">
      <FormComponent @addQuestion="addQuestion" />
    </div>
    <div class="bg-[#E0EAF5]">
      <PreviewComponent :questions="questions" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import FormComponent from "./components/FormComponent.vue";
import PreviewComponent from "./components/PreviewComponent.vue";

export default {
  name: "App",
  components: {
    FormComponent,
    PreviewComponent,
  },
  setup() {
    const questions = ref([]);

    const addQuestion = (newQuestion) => {
      questions.value.push(newQuestion);
    };

    return {
      questions,
      addQuestion,
    };
  },
};
</script>
<!-- <script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import AddIcon from "./components/icons/AddIcon.vue";
</script> -->

<!-- <template>
  <AddIcon></AddIcon>
  <header>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template> -->

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
