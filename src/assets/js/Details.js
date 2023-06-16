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
    };
  },
  methods: {
    homePage() {
      this.$router.push({
        name: "homePage",
      });
    },
  },
  beforeMount() {
    window.scroll({
      top: 0,
      left: 0,
    });
    this.id = this.$route.query.id;
    axios
      .get("https://yts.mx/api/v2/movie_details.json?movie_id=" + this.id)
      .then((response) => {
        this.movieDetails = response.data.data.movie;
        this.downloadLink1 = response.data.data.movie.torrents[0].url;
        this.downloadLink2 = response.data.data.movie.torrents[0].url;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};