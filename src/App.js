import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
    <div className="shell">
      <section className="bg-header"  >
        <header id="home" className="header-top">
          <h1>Lambda Eats</h1>
          <nav className="links">
            <a href="index.html">Home</a>
            <a href="about.html">Help</a>
          </nav>  
        </header>
      </section>

      <section className="featured">
        <div className="f-box pic-feat pic-me ">
          <div className="sh-me">
            <div className="f-descr">
            <h2>Your favorite food,<br/> delivered while coding !</h2>
              <h3 className="bg-projects">
                <a href="projects.html">My Projects</a>
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





    </div> {/* end shell */}






      
     
    </>
  );
};
export default App;
