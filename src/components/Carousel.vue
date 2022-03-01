<template>
<div id="carousel-container">
  <div class="carousel">
    <el-carousel type="card">
      <el-carousel-item :key="item">
        <img src="../assets/carousel1.png"/>
      </el-carousel-item>
      <el-carousel-item :key="item">
        <img src="../assets/carousel2.png"/>
      </el-carousel-item>
    <el-carousel-item :key="item">
        <img src="../assets/carousel3.png"/>
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
</template>
<style scoped>

#carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4% 0;
}

.carousel {
    width: 50%
}

.el-carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>