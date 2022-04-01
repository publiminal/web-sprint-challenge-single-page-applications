import React, { useState, useEffect } from 'react'
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Header from "./components/Header";
import OrderForm from "./components/OrderForm";
import * as yup from "yup";
import schema from "./validation/formSchema";
// import { Link } from "react-router-dom";

const initialFormValues = {

    //dropdown size
    size: '', 
    //radio buttons sauce
    sauce: '', 
    //checkboxes toppings
    pepperoni: false, 
    sousage: false,
    canadianBacon: false,
    spicyItalianSauce: false,
    grilledChicken: false,
    onions: false,
    greenPepper: false,
    dicedTomatos: false,
    blackOlives: false,
    roastedGarlic: false,
    artichokeHearts: false,
    threeCheese: false,
    pineapple: false,
    extraCheese: false,
    // checkbox substitute
    substitute: false,
    // input special instructions
    instructions:'', 
    // input username
    username:'',
    // input quantity
    quantity:1
}

const initialFormErrors = {
 //dropdown size
 size: '', 
 //radio buttons sauce
 sauce: '', 
 //checkboxes toppings
 pepperoni: false, 
 sousage: false,
 canadianBacon: false,
 spicyItalianSauce: false,
 grilledChicken: false,
 onions: false,
 greenPepper: false,
 dicedTomatos: false,
 blackOlives: false,
 roastedGarlic: false,
 artichokeHearts: false,
 threeCheese: false,
 pineapple: false,
 extraCheese: false,
 // checkbox substitute
 substitute: false,
 // input special instructions
 instructions:'', 
 // input username
 username:'',
 // input quantity
 quantity:0
}

const initialPizza = []
const initialDisabled = true 
const toppingsList = ["pepperoni", 
                      "sousage",
                      "canadianBacon",
                      "spicyItalianSauce",
                      "grilledChicken",
                      "onions",
                      "greenPepper",
                      "dicedTomatos",
                      "blackOlives",
                      "roastedGarlic",
                      "artichokeHearts",
                      "threeCheese",
                      "pineapple",
                      "extraCheese"]





const App = () => {

    //////////////// STATES ////////////////
    const [pizza, setPizza] = useState(initialPizza) // array of pizza objects
    const [formValues, setFormValues] = useState(initialFormValues) // object
    const [formErrors, setFormErrors] = useState(initialFormErrors) // object
    const [disabled, setDisabled] = useState(initialDisabled)       // boolean
  
  
    //////////////// HELPERS ////////////////
    const getPizza = () => {
      // 🔥 STEP 5- IMPLEMENT! ON SUCCESS PUT pizzaIN STATE
      //    helper to [GET] all pizza from `http://buddies.com/api/pizza`
      axios.get("https://reqres.in/api/orders")
        .then(res => {
          setPizza(res.data);
        }).catch(err => console.error(err))
    }
  
    const postNewPizza = newPizza => {
      // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
      //    helper to [POST] `newPizza` to `http://buddies.com/api/Friends`
      //    and regardless of success or failure, the form should reset
      axios.post("https://reqres.in/api/orders", newPizza)
        .then(res => {
          setPizza([res.data, ...pizza]);
        }).catch(err => console.error(err))
        .finally(() => setFormValues(initialFormValues))
    }
  
    const validate = (name, value) => {
      yup.reach(schema, name)
        .validate(value)
          .then(() => setFormErrors({ ...formErrors, [name]: "" }))
          .catch(err => {
            
            console.log('FORM ERROR :: [name] ', name)
            console.log('FORM ERROR :: [error] ' , err.errors[0])
            setFormErrors({ ...formErrors, [name]: err.errors[0]})
          })
    }
  



    //////////////// EVENT HANDLERS ////////////////
    const inputChange = (name, value) => {
      console.log('App onChange name ', name )
      console.log('App onChange name ', value )
      validate(name, value);  // yup Validation
      setFormValues({...formValues,[name]: value }) 
    }
  
    const formSubmit = () => {
      const newPizza = {
        username: formValues.username.trim(),
        email: formValues.email.trim(),
        role: formValues.role.trim(),
        civil: formValues.civil.trim(),
        toppings:toppingsList.filter(topping => !!formValues[topping])
      }
      postNewPizza(newPizza);
    }
  
    useEffect(() => {
      schema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])
  

  /* RENDER APP /////////////////////////////////////////////////////////////////
  *
  */////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <Header />
      <Switch>
        <Route path='/pizza/'>
          {/* <MovieCard titlePage={setDocTitle}  /> */}
          <OrderForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>

        <Route path='/'>
          <Home  /* titlePage={setDocTitle} */ ></Home>
        </Route>       
      </Switch>
 

    </>
  );
};
export default App;

