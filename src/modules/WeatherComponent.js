import Styled from "styled-components";

export const WeatherInfoIcons = {
  sunset: "/assets/gifs/sunset.gif",
  sunrise: "/assets/gifs/sunrise.gif",
  humidity: "/assets/gifs/humidity.gif",
  wind: "/assets/gifs/wind.gif",
  pressure: "/assets/gifs/pressure.gif",
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
font-size: 22px;
& span {
    font-size: 20px;
}
`;

const ConditionLabel = Styled.div`
font-size: 13px;
margin-top:4px;
`;

const LogoComponent = Styled.img`
width: 100px;
height: 100px;
margin: 5px auto
`;

const Location = Styled.span`
font-size: 23px;
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

  const TempC = (temp) => {
     return `${Math.floor(temp - 273)} °C`;
  }
  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>{` ${TempC(weather?.main?.temp)}`}</span>
          {`| ${weather?.weather[0].description}`}
          <ConditionLabel>{`Feels Like: ${TempC(weather?.main?.feels_like)}`}</ConditionLabel>
          <ConditionLabel>{`Temp Max: ${TempC(weather?.main?.temp_max)}`}</ConditionLabel>
          <ConditionLabel>{`Temp Min: ${TempC(weather?.main?.temp_min)}`}</ConditionLabel>
        </Condition>
        <LogoComponent src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}></LogoComponent>
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
