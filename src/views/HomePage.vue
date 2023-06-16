<template>
  <div>
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
        </div>
      </div>
    </section>
    <!-- cover end -->

    <!-- movie start -->

    <section id="movies" class="movies">
      <h2 class="heading">Opening This week</h2>

      <!-- movie container -->
      <div class="movies-container">
        <!-- Movies 1 -->
        <div
          class="box"
          v-for="(list, index) in movieLists"
          :key="index"
          @click="detailsPage(list.id)"
        >
          <div class="box-img">
            <img :src="list.large_cover_image" alt="" />
          </div>
          <h3>{{ list.title }}</h3>
          <span> {{ list.runtime }}min|action </span>
        </div>
        <!-- movie end -->
      </div>
    </section>

    <div class="pagi">
      <span
        ><vue-awesome-paginate
          class="pgi"
          :total-items="movieCount"
          v-model="currentPage"
          :items-per-page="20"
          :max-pages-shown="4"
          first-page-button="true"
          paginate-buttons-class="btn"
          active-page-class="btn-active"
          back-button-class="back-btn"
          next-button-class="next-btn"
          @click="paginate()"
      /></span>
    </div>
  </div>
</template>

<script src="../assets/js/homPage.js"></script>

<style lang="stylus" scoped></style>
