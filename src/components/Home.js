// import React from "react";
import { Link} from 'react-router-dom';


const Home = (props) => {
   



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
                <Link id='order-pizza' to={`/pizza/`} >Pizza</Link>
                </h3>
            </div>
            </div>
        </div>
        </section>
    
        <section className="articles">
            <div className="a-box bg-1">
                <div className="a-box-sh"><p>I love strings</p></div>
            </div>
            <div className="a-box bg-2">
                <div className="a-box-sh"><p>in instruments</p></div>
            </div>
            <div className="a-box bg-3">
                <div className="a-box-sh"><p>cat hair</p></div>
            </div>
    
        </section>  
        
        </>        

    )
}

export default Home;