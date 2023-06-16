import axios from "axios";
import Pagination from "v-pagination-3";
import { mapGetters } from "vuex";
import style from "../css/hompage.css";

import "vue-awesome-paginate/dist/style.css";
export default {
  components: {
    Pagination,
  },
  name: "HomePage",
  data() {
    return {
      movieLists: {},
      movieCount: 0,
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters(["page"]),
  },
  methods: {
    getMovieList() {
      axios
        .get("https://yts.mx/api/v2/list_movies.json?page=" + this.page)
        .then((response) => {
          //   for (let i = 0; i < response.data.data.movies.length; i++) {
          //     console.log(response.data.data.movies[i]);
          //   }
          this.movieLists = response.data.data.movies;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    totalMovies() {
      axios
        .get("https://yts.mx/api/v2/list_movies.json/movie_count")
        .then((response) => {
          this.movieCount = response.data.data.movie_count;
        })
        .catch((error) => {
          console.log(error);
        });
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
      this.getMovieList();
      window.scroll({
        top: 700,
        left: 0,
      });
    },
  },

  mounted() {
    if (this.$route.query.page != undefined) {
      this.currentPage = this.$route.query.page * 1;
    }
    this.getMovieList();
    this.totalMovies();
  },
};
