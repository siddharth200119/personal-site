import React, {useState, useEffect} from 'react';
import "./NavBar.css"
import NavBarItems from './NavBaritems';
import links from './links';

function NavBar(){

    const [hide, setHide] = useState(true);

    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", () =>
          setHide(window.scrollY < window.innerHeight * 0.5)
        );
      }
    }, []);

    return(
        <div className={`NavBar`}>
            <div className={`logo ${hide ? "hide" : ""}`}>
              <h1>Siddharth</h1>
            </div>
            <div className='NavBarItems'>
                {NavBarItems.map((item) => (
                    <a href={'#' + item.title} className='NavBarItem'>{item.title.charAt(0).toUpperCase() + item.title.slice(1)} </a>
                ))}
            </div>
            <div className='links'>
                {
                  links.map((link) => (
                    <div>
                      <a href={link.url}><img src={link.icon}></img></a>
                    </div>
                  ))
                }
            </div>
        </div>
    )
}

export default NavBar