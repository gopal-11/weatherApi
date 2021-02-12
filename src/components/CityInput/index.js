import React from "react";
import { Form, Button, Container } from "react-bootstrap";
const CityInput = ({city,setCity,fetchCityWeather}) => {
  
  const [error,setError]=React.useState("");
  const handleInputChange=(event)=>{
    setCity(event.target.value);
    console.log(event.target.value);
  };
  //console.log("City is",city);
  const handleSubmit=()=>{
    console.log("city",city);
    if(!city){
    //alert("city is empty");
     setError("City field is empty");
    }else{
      setError("");
      //make api call
      fetchCityWeather();

    }
  }

  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control 
          value={city}
          type="text" placeholder="Enter city"
           onChange={handleInputChange}
           />
           <p className="text-danger">{error}</p>
        </Form.Group>
        
        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
};
export default CityInput;