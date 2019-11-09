<template>
  <div class="container is-fluid">
    <div class="columns is-vcentered ">
      <div class="column is-2">
        <figure class="image is-128x128">
          <img alt="Vue logo" src="./assets/logo.png">
        </figure>
      </div>
      <div class="column is-5">
        <h1>Test Giffits Frontend Vue.js</h1>
        <p>
          Implementation of a simple frontend with VUE to manage personal data
        </p>
      </div>
    </div>
    <personal-list />
  </div>
</template>

<script>
import PersonalList from './components/PersonalList.vue'

export default {

  components: {
    PersonalList
  }
}
</script>
