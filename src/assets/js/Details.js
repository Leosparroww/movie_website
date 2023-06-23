import axios from "axios";

import style from "../css/details.css";
export default {
  name: "DetailsPage",
  data() {
    return {
      id: {},
      movieDetails: {},
      downloadLink1: {},
      downloadLink2: {},
      movieGenres: {},
      movieCast: {},
      page: 1,
    };
  },
  methods: {
    homePage() {
      this.$router.push({
        name: "homePage",
        query: {},
      });
    },
  },
  beforeMount() {
    window.scroll({
      top: 0,
    });
    this.id = this.$route.query.id;
    axios
      .get(
        "https://yts.mx/api/v2/movie_details.json?movie_id=" +
          this.id +
          "&with_images=true&with_cast=true"
      )
      .then((response) => {
        this.movieDetails = response.data.data.movie;
        this.movieGenres = response.data.data.movie.genres.splice(0, 2);
        this.movieCast = response.data.data.movie.cast;
        this.downloadLink1 = response.data.data.movie.torrents[0].url;
        this.downloadLink2 = response.data.data.movie.torrents[0].url;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
