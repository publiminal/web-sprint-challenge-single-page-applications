import { Link } from 'react-router-dom';



const Header = (props) => {

    /* render Header Markup */
    return(
        <>
        <section className="bg-header"  >
            <header id="home" className="header-top">
              <h1>Lambda Eats</h1>
              <nav className="links">
                {/* <a href="index.html">Home</a> */}
                {/* <a href="about.html">Help</a> */}
                <Link to={`/`} >Home</Link>
                <Link to={`/help/`} >Help</Link>
                <Link to={`/pizza/`} >Pizza</Link>
              </nav>  
            </header>
        </section>
        </>


    )

}

export default Header