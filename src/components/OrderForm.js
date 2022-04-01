
const OrderForm = (props) => {

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

        <article className="bg-header bg-banner"  >
            <div className="header-banner">
              <h3>Choice of Size</h3>
              <p className="required">Required</p>             
            </div>

            {/* dropdown for : size */}
            <div className="bg-label" >  
                <label><p className="labeltag" >size : </p>
                    <select id="size-dropdown" /* onChange={onChange} value={values.role} */ name='choice'>
                        <option value=''>Select an option</option>
                        <option value='small'>Personal / Small</option>
                        <option value='family'>Med / Family</option>
                        <option value='jumbo'>Jumbo / Large</option>
                    </select>
                </label>
            </div>
        </article>
        <article className="bg-header bg-banner"  >
            <div className="header-banner">
              <h3>Choice of Sauce</h3>
              <p className="required">Required</p>             
            </div>

            {/* radio buttons for  : sauce */}
            <div className="bg-label" >  
                <label>
                <input
                    type="radio"
                    name="sauce"
                    value="original-red"
                    /* onChange={onChange} */
                    /* checked={values.civil === "single"} */
                />
                    <p className="labeltag" >Original Red</p>
                </label>
                <label>
                <input
                    type="radio"
                    name="sauce"
                    value="garlic-ranch"
                    /* onChange={onChange} */
                    /* checked={values.civil === "single"} */
                />
                    <p className="labeltag" >Garlic Ranch</p>
                </label>
                <label>
                <input
                    type="radio"
                    name="sauce"
                    value="bbq-sauce"
                    /* onChange={onChange} */
                    /* checked={values.civil === "single"} */
                />
                    <p className="labeltag" >BBQ Sauce</p>
                </label>
                <label>
                <input
                    type="radio"
                    name="sauce"
                    value="spinach-alfredo"
                    /* onChange={onChange} */
                    /* checked={values.civil === "single"} */
                />
                    <p className="labeltag" >Spinach Alfredo</p>
                </label>
            </div>
        </article>

        <article className="bg-header bg-banner"  >
            <div className="header-banner">
              <h3>Add Toppings</h3>
              <p className="required">Choose up to 10</p>             
            </div>

            {/* checkboxes for : toppings */}
            <div className="bg-label" >  
                <label>
                    <input
                        type="checkbox"
                        name="pepperoni"
                        /* onChange={onChange} */
                        /* checked={values.civil === "single"} */
                    />
                    <p className="labeltag" >Pepperoni</p>
                </label>
            
                <label>
                    <input
                        type="checkbox"
                        name="sousage"
                        /* onChange={onChange} */
                        /* checked={values.civil === "single"} */
                    />
                    <p className="labeltag" >Sousage</p>
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="canadian-bacon"
                        /* onChange={onChange} */
                        /* checked={values.civil === "single"} */
                    />
                    <p className="labeltag" >Canadian bacon</p>
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="spicy-italian-sauce"
                        /* onChange={onChange} */
                        /* checked={values.civil === "single"} */
                    />
                    <p className="labeltag" >Spicy Italian Sauce</p>
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="grilled-chicken"
                        /* onChange={onChange} */
                        /* checked={values.civil === "single"} */
                    />
                    <p className="labeltag" >Grilled Chicken</p>
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="onions"
                        /* onChange={onChange} */
                        /* checked={values.civil === "single"} */
                    />
                    <p className="labeltag" >Onions</p>
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="green-pepper"
                        /* onChange={onChange} */
                        /* checked={values.civil === "single"} */
                    />
                    <p className="labeltag" >Green Pepper</p>
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="Diced-tomatos"
                        /* onChange={onChange} */
                        /* checked={values.civil === "single"} */
                    />
                    <p className="labeltag" >Diced Tomatos</p>
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="black-olives"
                        /* onChange={onChange} */
                        /* checked={values.civil === "single"} */
                    />
                    <p className="labeltag" >Black Olives</p>
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="roasted-garlic"
                        /* onChange={onChange} */
                        /* checked={values.civil === "single"} */
                    />
                    <p className="labeltag" >Roasted Garlic</p>
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="artichoke-hearts"
                        /* onChange={onChange} */
                        /* checked={values.civil === "single"} */
                    />
                    <p className="labeltag" >Artichoke Hearts</p>
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="three-cheese"
                        /* onChange={onChange} */
                        /* checked={values.civil === "single"} */
                    />
                    <p className="labeltag" >Three Cheese</p>
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="pineapple"
                        /* onChange={onChange} */
                        /* checked={values.civil === "single"} */
                    />
                    <p className="labeltag" >Pineapple</p>
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="extra-cheese"
                        /* onChange={onChange} */
                        /* checked={values.civil === "single"} */
                    />
                    <p className="labeltag" >Extra Cheese</p>
                </label>
            </div>
        </article>    
         {/* checkbox for : substitute */} 
        <article className="bg-header bg-banner"  >
            <div className="header-banner">
              <h3>Choice of Substitute</h3>
              <p className="required">Choice up to 1</p>             
            </div>

            <div className="bg-label" >  
            <label>
                    <input
                        type="checkbox"
                        name="substitute"
                        /* onChange={onChange} */
                        /* checked={values.civil === "single"} */
                    />
                    <p className="labeltag" >Gluten Free Crust (+ $1.00)</p>
                </label>
            </div>
        </article>
         {/* input for : special instructions */} 
         <article className="bg-header bg-banner"  >
            <div className="header-banner">
              <h3>Special instructions</h3>
              {/* <p className="required">Choice up to 1</p>          */}    
            </div>

            <div className="bg-label" >  
            <label>
                <p className="labeltag" >Anything else you'd like to add ?</p>
                <input id="special-text"
                   /*  value={values.username} */
                    /* onChange={onChange} */
                    name='instructions'
                    type='text'
                    size="90" 
                />
                </label>
            </div>
        </article>

                 {/* input for : name */} 
                 <article className="bg-header bg-banner"  >
            <div className="header-banner">
              <h3>Who are you ?</h3>
              {/* <p className="required">Choice up to 1</p>          */}    
            </div>

            <div className="bg-label" >  
            <label>
                <p className="labeltag" >Your name</p>
                <input id="name-input"
                   /*  value={values.username} */
                    /* onChange={onChange} */
                    name='instructions'
                    type='text'
                    size="90" 
                />
                </label>
            </div>
        </article>

                 {/* number for : quantity */} 
                 <article className="bg-header bg-banner"  >
            <div className="header-banner">
              <h3>Quantity</h3>
              {/* <p className="required">Choice up to 1</p>          */}    
            </div>

            <div className="bg-label" >  
            <label>
                <p className="labeltag" >Quantity </p>
                <input
                   /*  value={values.username} */
                    /* onChange={onChange} */
                    min="1" 
                    max="100"
                    name='quantity'
                    type='number'
                    size="10"
                />
                <button className="sendBtn"/* disabled={disabled} */>{`Add to order   %17.99 `  }</button>
                </label>
            </div>
        </article>

        
    </form>
    )
}

export default OrderForm