import axios from "axios";

//Please get APIKEY from website
//const apiKey = ""; write here

export const getWeatherData = async (city) => {
  try {
    const response = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
