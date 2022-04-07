// import React from "react";
import { Link} from 'react-router-dom';


const Home = (props) => {
    
    function Order(props) {

        const {username, size, sauce, createdAt} = props.info
        const stamp = new Date(createdAt).getSeconds()

        return(
        <>
            <div className="a-box bg-1">
                <div className="a-box-sh"><p>{`${username}`}</p><p className='low'>asked for ...</p></div>
            <div className="a-box"><p className='info'>{` ${size} pizza with ${sauce} ${stamp}'sec ago`}</p></div>
            </div>
        </>
    )}

    function Featured(props) {
        const { orders } = props
        return(
            <section className="articles">
                
                {orders.map(order => (
                     <Order info={order}  />
                ))}



{/*                 <div className="a-box bg-1">
                    <div className="a-box-sh"><p>I love strings</p></div>
                </div>
                <div className="a-box bg-2">
                    <div className="a-box-sh"><p>in instruments</p></div>
                </div>
                <div className="a-box bg-3">
                    <div className="a-box-sh"><p>and cat hair</p></div>
                </div> */}
            {props.children}
        </section> 
        )
    }


    /* render Home Markup */

    return (

        <>
            
        <section className="featured">
        <div className="f-box pic-feat pic-me ">
            <div className="sh-me">
            <div className="f-descr">
            <h2>Your favorite food,<br/> delivered while coding !</h2>
                <h3 className="bg-projects">
                {/* <a href="projects.html">My Projects</a> */}
                <Link id='order-pizza' to={`/pizza`} >Pizza</Link>
                </h3>
            </div>
            </div>
        </div>
        </section>
    
        {props.pizza.length && <Featured orders={props.pizza} >

            
        </Featured> }
        
        </>        

    )
}

export default Home;