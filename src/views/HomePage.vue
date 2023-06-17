<template>
  <div>
    <a href="#home" id="#ovies"></a>
    <!-- cover start -->
    <section class="home" id="home">
      <div class="container">
        <img src="../assets/img/Oppenheimer.jpg" alt="" />
        <div class="home-text">
          <span> Atomic inventer</span>
          <h1>Oppenheimer</h1>
          <a href="https://www.youtube.com/watch?v=uYPbbksJxIg" target="_blank"
            ><button>
              <span class="circle1"></span>
              <span class="circle2"></span>
              <span class="circle3"></span>
              <span class="circle4"></span>
              <span class="circle5"></span>
              <span class="text btntext">Watch Now</span>
            </button></a
          >

          <a
            href="https://www.youtube.com/watch?v=uYPbbksJxIg"
            target="_blank"
            class="play"
            ><i class="bx bx-play"></i
          ></a>
          <span></span>
        </div>
      </div>
    </section>
    <!-- cover end -->
    <section class="loading" v-if="loading == true">
      <div class="loader"></div>
      <div class="loader-text">Loading . . .</div>
    </section>

    <section id="movies" class="movies" v-else-if="loading == false">
      <h2 class="heading">Opening This week</h2>
      <!-- movie container -->
      <div class="movies-container">
        <!-- Movies 1 -->
        <div class="box" v-for="(list, index) in movieLists" :key="index">
          <div class="box-img" @click="detailsPage(list.id)">
            <img :src="list.large_cover_image" alt="" />
          </div>
          <h3 @click="detailsPage(list.id)">{{ list.title }}</h3>
          <span>
            <span v-if="list.runtime != 0"> {{ list.runtime }}</span>
            <span v-else-if="list.runtime == 0">100</span>
            &nbsp;min&emsp;|&emsp;Rating
            <span class="rating" v-if="list.rating != 0">{{
              list.rating
            }}</span>
            <span v-else-if="list.rating == 0">100</span></span
          >
        </div>
        <!-- movie end -->
      </div>
      <div class="pagi">
        <span
          ><vue-awesome-paginate
            class="pagi"
            :total-items="movieCount"
            v-model="currentPage"
            :items-per-page="20"
            :max-pages-shown="3"
            first-page-button="true"
            paginate-buttons-class="btn"
            active-page-class="btn-active"
            back-button-class="back-btn"
            next-button-class="next-btn"
            @click="paginate()"
        /></span>
      </div>
    </section>
  </div>
</template>

<script src="../assets/js/homPage.js"></script>

<style lang="stylus" scoped></style>
