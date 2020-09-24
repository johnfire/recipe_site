import React from 'react';
//import axios from 'axios';

import styles from './Showrecipe';
import Ingredient from '../ingredient/Ingredient';
import Amount from '../Amount/Amount';

import './Showrecipe.module.css';

const Showrecipe = () =>  {

   /*  const getDataForBreakfasts = () => {
        axios.get( 'https://recipes-3a6e0.firebaseio.com/recipes/breakfasts.json' )
        .then( response => {
            console.log(response)
        } )
        .catch( error => {
            console.log("error on get")
        } );   
    } */

    return (
         <div className="Showrecipe">
        <p>
            ingredients go here
            <ul>
                <li className={styles.li}>
                    <div>
                        <Ingredient />
                        <Amount />
                    </div>
                </li>
                <li> 
                    <div>
                        <Ingredient />
                        <Amount />
                    </div>
                </li>
                <li> 
                    <div>
                        <Ingredient />
                        <Amount />
                    </div>
                </li>
                <li>
                    <div>
                        <Ingredient />
                        <Amount />
                    </div>
                </li>
                <li>
                    <div>
                        <Ingredient />
                        <Amount />
                    </div>
                </li>
            </ul>
        </p>
        <p>
            this is how to make the dish
        </p>
    </div>
    );
};

export default  Showrecipe 
