import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderMenu.module.css';

const HeaderMenu = () => {  
    
    console.log("just starting the header component")
    
    return(
        <div className="HeaderMenu">
            <header>
                <section>
                    <p><Link to="/Login">Login</Link> </p>
                    <p><Link to="/">Infos</Link></p>
                    <p><Link to="/AddRecipe">Add recipes</Link></p>
                    <p><Link to="/Impressum">Impressum</Link></p>
                </section>
                <section>
                    <p><Link to="/Breakfasts">Breakfasts</Link></p>
                    <p><Link to="/lunches">Lunches</Link></p>
                    <p><Link to="/Dinners">Dinners</Link></p>
                </section>    
            </header>   
        </div>
    );
};

export default HeaderMenu