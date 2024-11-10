import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

// dac24d13315e7c22f4f158b43ea09358;
///https://api.themoviedb.org/3/trending/all/week?api_key=dac24d13315e7c22f4f158b43ea09358&language=en-US