import axios from "axios";

import { mapGetters } from "vuex";
import "../css/hompage.css";

import "vue-awesome-paginate/dist/style.css";
export default {
  name: "HomePage",
  data() {
    return {
      movieLists: {},
      movieCount: 0,
      currentPage: 1,
      loading: true,
      searchKey: "",
      sortBy: "",
      sortingValue: "",
    };
  },
  computed: {
    ...mapGetters(["page", "movieSearchKey", "sortValue"]),
  },
  methods: {
    getMovieList() {
      axios
        .get(
          "https://yts.mx/api/v2/list_movies.json?page=" +
            this.page +
            "&query_term=" +
            this.movieSearchKey +
            this.sortingValue
        )
        .then((response) => {
          //Movie list
          this.movieLists = response.data.data.movies;
          //movies count
          this.movieCount = response.data.data.movie_count;

          this.loader();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //search Movies
    searchMovies() {
      this.$store.dispatch("setSearchKey", this.searchKey);
      this.currentPage = 1;
      this.$store.dispatch("setPage", this.currentPage);
      this.loading = true;
      //enter keyboard remove
      document.querySelector(".search").blur();
      this.getMovieList();
    }, //sort by,sortBy
    sorting() {
      //tempo fix
      if (this.sortValue == "" || null || undefined) {
        this.sortBy = "year";
      }
      //regular
      if (this.sortBy == "") {
        this.sortingValue = "&sort_by=" + this.sortValue;
        this.sortBy = this.sortValue;
      } else {
        this.$store.dispatch("setSortBy", this.sortBy);
        this.sortingValue = "&sort_by=" + this.sortValue;
      }
      this.getMovieList();
    },
    // upComingMovies() {
    //   axios
    //     .get("https://yts.mx/api/v2/list_upcoming.json")
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    detailsPage(key) {
      let movieId = key;
      this.$router.push({
        name: "details",
        query: {
          id: movieId,
          page: this.currentPage,
        },
      });
    },
    paginate() {
      this.$store.dispatch("setPage", this.currentPage);
      document.querySelector(".amovies").click();
      this.getMovieList();
    },
    loader() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  },

  mounted() {
    // if (this.$route.query.page != undefined) {
    //   this.currentPage = this.$route.query.page * 1;
    // }
    this.sorting();
    this.searchKey = this.movieSearchKey;
    this.currentPage = this.page;
    this.getMovieList();
  },
};
