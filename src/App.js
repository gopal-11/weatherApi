import React from "react";
import './App.css';
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";

function App() {
  const [city,setCity]=React.useState("");
  const[cityWeather,setCityWeather]=React.useState({});
  const fetchCityWeather=()=>{
      fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47'
      )
      .then((response)=> 
      {
        return response.json();
      })
      .then((result)=>{
        console.log("Result is result",result);
        setCityWeather(result);
    })
    .catch((error)=>{
      console.log("error is",error);
    });
  };
  return (
    <>
   <CityInput 
   city={city} 
   setCity={setCity} 
   fetchCityWeather={fetchCityWeather}/>
    {/* <CityWeather/> */}
     </>
  );
}

export default App;
