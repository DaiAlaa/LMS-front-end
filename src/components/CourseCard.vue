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
        {{name|shorten}}
      </h4>
      <br />
      <p class="cardtext">
        {{ 'by : ' + instructor_user_name}}
      </p>
      <router-link
        :to="{ path: '/CourseHome/' + courseid }"
        class="stretched-link"
        id="carglink"
      ></router-link>
    </div>
  </div>   
</template>
<style lang="scss" scoped>
.card {
  background: rgb(184, 184, 253);
  width: 23%;
  height: 310px;
  margin-left: 17px;
  margin-top: 17px;
  margin-bottom: 17px;
}
#cardimg {
  width: 100%;
  height: 65%;
  margin-top: 18px;
}
h4 {
  font-size: 22px;
  font-weight: bold;
  color: white;
  margin-bottom: 4px;
  /* margin-left: -60%; */
  position: absolute;
}
p {
  font-size: 15px;
  color: darkblue;
  position: absolute;
}
</style>
<script>
export default {
  name: "CourseCard",
  props: {
    name: {
      type: String,
    },
    courseid: {
      type: Number,
    },
    instructor_id: {
      type: Number,
    },
    instructor_user_name: {
      type: String
    },
    instructor_first_name: {
      type: String,
    },
    instructor_last_name: {
      type: String,
    }
  },
  filters: {
    shorten: function (value) {
      if (value && value.length > 20) return value.substring(0, 20) + "..";
      else return value;
    },
  },   
}
</script>