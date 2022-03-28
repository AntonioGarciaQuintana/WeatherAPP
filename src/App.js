import axios from "axios";
import { useState } from "react";
import Styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherComponent";

const API_KEY = "2ed5a2fa1b38e44c7469753d0a31747f";
const Container = Styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;
const AppLabel = Styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
      //console.log(response.data);
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>Weather APP</AppLabel>
      {weather ? (
        <WeatherComponent weather={weather} />
      ) : (
        <CityComponent
          updateCity={updateCity}
          fetchWeather={fetchWeather}
        ></CityComponent>
      )}
    </Container>
  );
}

export default App;
