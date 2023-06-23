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

    <!-- Search & filter start-->
    <section class="filter">
      <div class="">
        <select
          name=""
          id=""
          class="sortBy"
          v-model="sortBy"
          @change="sorting()"
        >
          <option value="">Sort by</option>
          <option value="year">year</option>
          <option value="rating">rating</option>
          <option value="like_count">populatrity</option>
        </select>
      </div>

      <div class="searchBox">
        <input
          type="text"
          @keyup.enter="searchMovies()"
          v-model="searchKey"
          class="search"
        />
        <div class="searchBtn" @click="searchMovies()" ref="rese">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 15L21 21"
              stroke="#926565"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="#926565"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    </section>
    <!-- Search & filter end-->
    <!-- loading -->
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
            <span v-if="list.runtime != 0" class="value">
              {{ list.runtime }}</span
            >
            <span v-else-if="list.runtime == 0" class="value">100</span>min |
            Rating
            <span class="value" v-if="list.rating != 0">{{ list.rating }}</span>
            <span v-else-if="list.rating == 0" class="value">5.5</span></span
          >
        </div>
        <!-- movie end -->
      </div>
      <div class="pagi">
        <span
          ><vue-awesome-paginate
            class="pagii"
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
