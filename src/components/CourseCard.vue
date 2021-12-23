<template>
    <div class="card rounded col-md-3">
    <img
      class="card-img-top mx-auto d-block"
      src="../assets/c.png"
      alt="Card image"
      id="cardimg"
    />
    <div class="card-body" id="cardbody">
      <h4 class="card-title" id="cardtitle">
        {{name}}
      </h4>
      <hr />
      <p class="cardtext">
        created at : {{created_at}}
      </p>
      <br/>
      <p class="cardtext">
        by :
      </p>
      <!-- <router-link
        :to="{ path: '/Category/' + categoryId }"
        class="stretched-link"
        id="carglink"
      ></router-link> -->
    </div>
  </div>   
</template>
<style lang="scss" scoped>
.card {
  background: rgb(0, 0, 117);
  width: 23%;
  height: 350px;
  margin-left: 17px;
  margin-top: 17px;
  margin-bottom: 17px;
}
#cardimg {
  width: 100%;
  height: 60%;
  margin-top: 18px;
}
h4 {
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 4px;
  /* margin-left: -60%; */
  position: absolute;
}
p {
  font-size: 15px;
  color: white;
  position: absolute;
}
</style>
<script>
export default {
  name: "CourseCard",
  props: {
    userID: {
      type: String,
    },
    name: {
      type: String,
    },
    syllabus: {
      type: String,
    },
    created_at: {
      type: String
    },
    updated_at: {
      type: String,
    }
  },   
}
</script>