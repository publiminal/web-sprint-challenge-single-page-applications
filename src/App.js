import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
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
  instructions: '',
  // input username
  username: '',
  // input quantity
  quantity: 0
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
  /* substitute: false, */
  // input special instructions
  /* instructions:'',  */
  // input username
  username: '',
  // input quantity
  quantity: 0
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
  const [redirectForm, setRedirectForm] = useState(false)


  //////////////// HELPERS ////////////////
  const getPizza = () => {
    // 🔥 STEP 5- IMPLEMENT! ON SUCCESS PUT pizzaIN STATE
    //    helper to [GET] all pizza from `https://reqres.in/api/orders`
    axios.get("https://reqres.in/api/orders")
      .then(res => {
        setPizza(res.data);
      }).catch(err => console.error(err))
  }

  const postNewPizza = newPizza => {
    // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
    //    helper to [POST] `newPizza` to `https://reqres.in/api/orders`
    //    and regardless of success or failure, the form should reset
    axios.post("https://reqres.in/api/orders/", newPizza)
      .then(res => {
        setPizza([res.data, ...pizza]);
      }).catch(err => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues) // reset form
        setRedirectForm(true); // enable  redirect 

      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => {

        // console.log('FORM ERROR :: [name] ', name)
        // console.log('FORM ERROR :: [error[0]] ' , err.errors[0])
        setFormErrors({ ...formErrors, [name]: err.errors[0] })
      })
  }




  //////////////// EVENT HANDLERS ////////////////
  const inputChange = (name, value) => {
    // console.log('App onChange name ', name )
    // console.log('App onChange name ', value )
    const doValidate = name in initialFormErrors
    // console.log(`is ${name} in FormValues ?` , doValidate)
    // console.log(`doValidate : ${name}`, doValidate)
    if (doValidate) { validate(name, value) };  // yup Validation
    setFormValues({ ...formValues, [name]: value })
  }

  const formSubmit = () => {
    // console.log('formSubmit')
    const newPizza = {
      username: formValues.username.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      quantity: formValues.quantity.trim(),
      toppings: toppingsList.filter(topping => !!formValues[topping])
    }
    // console.log('newPizza', newPizza)
    postNewPizza(newPizza)
  }

  /* Control Send form Button availability every time formValues changes. */
  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
      setRedirectForm(false); // disable redirect in orderForm
      if (!valid) {
     
        // console.log(`validate form uncomplete`)

      }
    })
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
            redirectForm={redirectForm}
          />
        </Route>

        <Route path='/'>
          <Home pizza={pizza} /* titlePage={setDocTitle} */ ></Home>
        </Route>
      </Switch>


    </>
  );
};
export default App;

