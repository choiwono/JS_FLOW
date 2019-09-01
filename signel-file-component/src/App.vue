<template>
  <div>
    <header>
      <h2 class="container">검색</h2>
    </header>
    <div class="container">
      
    </div>
  </div>
</template>

<script>
import FormComponent from './components/FormComponent.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'search-form':FormComponent
  }
}
</script>