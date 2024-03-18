<template>
    <div>
     <header-component/>

     <section>
        <router-view></router-view>
     </section>

     <footer-component/>
    </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"

 export default {
    name : "DefaultTemplate",
    components: {
        HeaderComponent,
        FooterComponent
    }
 }
</script>