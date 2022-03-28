import Styled from "styled-components";

export const WeatherInfoIcons = {
  sunset: "/assets/animated/weather_sunset.svg",
  sunrise: "/assets/animated/weather_sunset.svg",
  humidity: "/assets/animated/weather.svg",
  wind: "/assets/animated/cloudy.svg",
  pressure: "/assets/animated/cloudy-day-1.svg",
};

const WeatherCondition = Styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
justify-content: space-between;
margin: 30px;
`;

const Condition = Styled.div`
margin: 20px auto;
font-size: 14px;
& span {
    font-size: 20px;
}
`;

const LogoComponent = Styled.img`
width: 100px;
height: 100px;
margin: 5px auto
`;

const Location = Styled.span`
font-size: 28px;
font-weight: bold;

`;

const WeatherInfoLabel = Styled.span`
font-size: 14px;
font-weight: bold;
margin: 20px 25px 10px;
text-align: start;
width: 90%;
`;

const InfoContainer = Styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = Styled.img`
  width: 36px;
  height: 36px;
`;

const WeatherInfoContainer = Styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoLabel = Styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const WeatherComponent = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes('d');
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>{` ${Math.floor(weather?.main?.temp - 273)} °C`}</span>
          {`| ${weather?.weather[0].description}`}
        </Condition>
        <LogoComponent src="/assets/animated/cloudy.svg"></LogoComponent>
      </WeatherCondition>
      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
        ></WeatherInfoComponent>
        <WeatherInfoComponent
          name="humidity"
          value={weather?.main?.humidity}
        ></WeatherInfoComponent>
        <WeatherInfoComponent
          name="wind"
          value={weather?.wind?.speed}
        ></WeatherInfoComponent>
        <WeatherInfoComponent
          name="pressure"
          value={weather?.main?.pressure}
        ></WeatherInfoComponent>
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherComponent;
