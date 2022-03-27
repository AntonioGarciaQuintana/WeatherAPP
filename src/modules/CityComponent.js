import Styled from 'styled-components';

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

const CityComponent = () => {
    return (
        <>
            <LogoComponent src="/assets/animated/day.svg"></LogoComponent>
            <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
            <SearchBox>
                <input placeholder='City'></input>
                <button>Search</button>
            </SearchBox>
        </>
    );
}

export default CityComponent;