<template>
    <div>
        <NavBar/>
        <router-view class="child"></router-view>
    </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "main_page",
  components: {
    NavBar,
  },
}
</script>