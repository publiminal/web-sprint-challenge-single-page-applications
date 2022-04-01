// Here goes the schema for the form
import * as yup from "yup";

const formSchema = yup.object().shape({
    size: yup // dropdown size choice
    .string()
    .oneOf(["small", "family", "jumbo"], "Don't forget to choose your size"),
    sauce: yup // radiobutons sauce choice
    .string()
    .oneOf(["original-red", 
            "garlic-ranch", 
            "bbq-sauce",
            "spinach-alfredo"
        ]
        , "You've gotta be married or single, pal!"),
    pepperoni: yup.boolean(),// toppings
    sousage: yup.boolean(),
    canadianBacon: yup.boolean(),
    spicyItalianSauce: yup.boolean(),
    grilledChicken: yup.boolean(),
    onions: yup.boolean(),
    greenPepper: yup.boolean(),
    dicedTomatos: yup.boolean(),
    blackOlives: yup.boolean(),
    roastedGarlic: yup.boolean(),
    artichokeHearts: yup.boolean(),
    threeCheese: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean(),
    substitute: yup.boolean(), // substitute
    username: yup // input username
    .string()
    .trim()
    .required("name must be at least 2 characters")
    .min(2, "name must be at least 2 characters"),
    instructions: yup // input special instructions
    .string()
    .trim()
    .required("Add any special detail to take care of your pizza")
    .min(0, "Nothing ?"),
    quantity: yup // input quantity
    .string()
    .trim()
    .required("You need  to buy something !")
    .min(1, "You need to buy at least 1")
/*   size: yup
    .string()
    .email("Must be a valid email, charlie!")
    .required("Email is required, boss!"), */ 
})

export default formSchema;

