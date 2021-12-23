<template>
    <div class="background">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <img src="../assets/user.png" class="image"/>
                </div>
                <div class="col-sm-8">
                    <p class="userName">Dai Alaa</p>
                    <p class="mail">daialaa@gmail.com</p>
                    <p class="type">instructor</p>
                    <p class="birth">Birth Date: 
                        <span>1-1-2000</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.background {
 background-color: rgb(205, 205, 255);
 width: 80%;
 height: 100%;
 margin-left: 10%;
 padding-bottom: 50px;
}
.userName{
  color: black;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin-top: 25%;

}
.mail {
  color: blue;
  font-size: 16px;
  text-align: left;
  text-decoration: underline;
}
.type {
  color: black;
  font-size: 16px;
  text-align: left; 
}
.birth {
  color: black;
  font-size: 16px;
  text-align: left; 
}
.image{
  width: 45%;
  height: 50%;
  float: right;
  margin-top: 50%;
  margin-right: 15%;
}
</style>
<script>
export default {
    
}
</script>