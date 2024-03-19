<template>
  <div class="pageTitle">
    <span class="title">Meus Cursos</span>
    <span class="dots">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>

  <div class="content">
    <ul class="listCourses">
      <card-couse 
      :title="'curso de laravel'"
      :image="''"
      :bgName="'laravel'"
      ></card-couse>
    </ul>
  </div>
</template>

<script>
import CardCouse from "./components/CardCouse.vue"

export default {
  name: 'HomePage',
  components: {
    CardCouse
  }
}
</script>
