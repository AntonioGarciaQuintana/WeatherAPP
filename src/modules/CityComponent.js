import Styled from "styled-components";

const LogoComponent = Styled.img`
width: 140px;
height: 140px;
margin: 40px auto
`;
const SearchBox = Styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;

const ChooseCityLabel = Styled.span`
  color: black;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;
const ErrorLabel = Styled.span`
  color: red;
  margin: 0px auto;
`;

const CityComponent = (props) => {
  const { updateCity,fetchWeather, errorMessage } = props;


  return (
    <>
      <LogoComponent src="/assets/gifs/weather.gif"></LogoComponent>
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          placeholder="City"
          onChange={(e) => updateCity(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </SearchBox>
      <ErrorLabel>{errorMessage}</ErrorLabel>
    </>
  );
};

export default CityComponent;
