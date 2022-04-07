
import React from 'react'
import { Redirect } from "react-router-dom";

/* import { uuid } from 'uuidv4'; */



/* Error Field Component */
function ErrorField(props) {
    return (
        <>
            { props.name && <div className='errors required'>{props.name}</div>}
        </>
    )
}

/* RadioButton Component */
function RadioButton(props) {
    return (
        <label >
            <input
                name={props.name}
                type="radio"
                value={props.value}
                onChange={props.onChange}
                checked={props.checked}
            />
            <p className="labeltag" >{props.text}</p>
            <ErrorField name={props.errors[props.name]} />
        </label>
    )
}


/* RadioButton Component */
function CheckBox(props) {
    return (
        <label >
            <input
                name={props.name}
                type="checkbox"
                onChange={props.onChange}
                checked={props.checked}
            />
            <p className="labeltag" >{props.text}</p>
            <ErrorField name={props.errors[props.name]} />
        </label>
    )
}

/* DropDown component */
function DropDown(props) {
    // { onChange, value, name, info } = props
    return (
        <label><p className="labeltag" >size : </p>
            <select id="size-dropdown"
                onChange={props.onChange}
                value={props.value}
                name={props.name}
            >
                <option value=''>Select an option</option>
                <option value={props.info.valueName1}>{props.info.valueDesc1}</option>
                <option value={props.info.valueName2}>{props.info.valueDesc2}</option>
                <option value={props.info.valueName3}>{props.info.valueDesc3}</option>
            </select>
            { props.errors &&<ErrorField name={props.errors[props.name]} /> }
        </label>
    )
}

/* ///////////////////////////////////// 
* Article Component 
* props : @title : string : H3 text
* props : isRequired : boolean : conditional to display is required info
* props : requiredText : string : display is required info
* props : errorsName : string : hand over name props to ErrorField to display error message
*///////////////////////////////////////
function Article(props) {
    return (
        <article className="bg-header bg-banner"  >
            <div className="header-banner">
                <h3>{props.title}</h3>
                {props.isRequired && <p className="required">{props.requiredText}</p>}
                {props.errorsName &&<ErrorField name={props.errorsName} />}

            </div>
            <div className="bg-label" >
                {props.children} {/* display nested form Components */}
            </div>
        </article>

    )
}

const OrderForm = (props) => {

    const {
        values,
        change,
        submit,
        disabled,
        errors,
        redirectForm
    } = props

    const onSubmit = evt => {
        // console.log('onSubmit', evt);
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        // console.dir('evt', evt.target)
        const valueToUse = type === "checkbox" ? checked : value
        // console.log('Form onChange name ', name )
        // console.log('Form onChange name ', value )
        change(name, valueToUse)
    }

    const radiosInfo = [
        { value:'original-red', text: 'Original Red' },
        { value:'garlic-ranch', text: 'Garlic Ranch' },
        { value:'bbq-sauce', text: 'BBQ Sauce' },
        { value:'spinach-alfredo', text: 'Spinach Alfredo' },
    ]

    const checkBoxesInfo = [
        { name:'pepperoni' , text: 'Pepperoni'},
        { name:'sousage' , text: 'Sousage'},
        { name:'canadianBacon' , text: 'Canadian Bacon'},
        { name:'spicyItalianSauce' , text: 'Spicy Italian Sauce'},
        { name:'grilledChicken' , text: 'Grilled Chicken'},
        { name:'onions' , text: 'Onions'},
        { name:'greenPepper' , text: 'Green Pepper'},
        { name:'dicedTomatos' , text: 'Diced Tomatos'},
        { name:'blackOlives' , text: 'Black Olives'},
        { name:'roastedGarlic' , text: 'Roasted Garlic'},
        { name:'artichokeHearts' , text: 'Artichoke Hearts'},
        { name:'threeCheese' , text: 'Three Cheese'},
        { name:'pineapple' , text: 'Pineapple'},
        { name:'extraCheese' , text: 'Extra Cheese'}
    ]

    const formInfo = {
        radios:{name:'sauce', data:[...radiosInfo]},
        checkboxes:{name:'', data:[...checkBoxesInfo]}
    }

    // console.log('formInfo', formInfo)

    /* render OrderForm Markup  */
    return (

        <form id="pizza-form" >
            <section className="featured">
                <div className="f-box pic-feat pic-me ">
                    <div className="sh-me">
                        <div className="f-descr">
                            <h2>Build your own Pizza</h2>
                            <h3 className="bg-projects">
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            <Article 
                title={'Choice of Size'} /* display text header H3 */ 
                isRequired={true} /* display required small caption   */
                requiredText={'Required'}  /* required caption text below H3 */
                errorsName={errors.size}  /* YUP error. Send empty string if no YUP error message required */
            >
                <DropDown
                    name='size'
                    value={values.size}
                    onChange={onChange}
                    info={{
                        valueName1: 'small', valueDesc1: 'Personal / Small',
                        valueName2: 'family', valueDesc2: 'Med / Family',
                        valueName3: 'jumbo', valueDesc3: 'Jumbo / Large'
                    }}
                    /* errors={errors} */ /* uncomment to display YUP error inline dropdown */
                />
            </Article>
            <Article title={'Choice of Sauce'} isRequired={true} requiredText={'Required'} errorsName={errors.sauce} >
                {formInfo.radios.data.map(item => (
                    <RadioButton 
                        key={Math.random()*99999} 
                        name={formInfo.radios.name}
                        value={item.value} 
                        onChange={onChange} 
                        checked={item.value ===  values.sauce} 
                        text={item.text}
                        errors={errors} 
                    />
                ))}
            </Article>
            <Article title={'Add Toppings'} isRequired={true} requiredText={'Required. Choose up to 10'} errorsName={errors.toppings} >
                {checkBoxesInfo.map(checkbox => (
                    <CheckBox 
                        key={Math.random()*99999} 
                        name={checkbox.name}
                        onChange={onChange} 
                        checked={values[checkbox.name]} 
                        text={checkbox.text}
                        errors={errors} 
                    />
                ))}
            </Article>
            <Article title={'Choice of Substitute'} isRequired={false} requiredText={''} errorsName={''} >
                <CheckBox 
                    key={Math.random()*99999} 
                    name={'substitute'}
                    onChange={onChange} 
                    checked={values['substitute']} 
                    text={'Gluten Free Crust (+ $1.00)'}
                    errors={errors} 
                />
            </Article>

            <Article title={'Special instructions'} isRequired={false} requiredText={'Fill this out!'} errorsName={''} >
                <label>
                    <p className="labeltag" >Anything else you'd like to add ?</p>
                    <input id="special-text"
                        name='instructions'
                        value={values.instructions}
                        onChange={onChange}
                        type='text'
                        size="90"
                    />
                </label>
            </Article>

            {/* input for : name */}
            <Article title={'Who are you ?'} isRequired={true} requiredText={'*Required'} errorsName={errors.username} >
                <label>
                    <p className="labeltag" >Your name</p>
                    <input id="name-input"
                        name='username'
                        value={values.username}
                        onChange={onChange}
                        type='text'
                        size="90"
                    />
                </label>
            </Article>

            {/* number for : quantity */}
            <Article title={'Quantity'} isRequired={true} requiredText={'*Required'} errorsName={errors.quantity} >
                <label>
                    <p className="labeltag" >Quantity</p>
                    <input 
                        value={values.quantity}
                        onChange={onChange}
                        min="1"
                        max="100"
                        name='quantity'
                        type='number'
                        size="10"
                    />
                    <button id='order-pizza' onClick={onSubmit} className="sendBtn" disabled={disabled}>{`Add to order   %17.99 `}</button>
                    {redirectForm && <Redirect to='/' />}
                </label>
            </Article>
        </form>

    )
}

export default OrderForm