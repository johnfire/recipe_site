import React from 'react';
//import axios from 'axios';

import './Addrecipe.module.css';

const Addrecipe = () =>  {

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
        <div>
            <p>would you like to add a recipe? everyone would be very happy if you did </p>
            <p>to add a recipe use the input boxes below to add ingredients, then the last one to add instructions on how to assemble</p>
        </div>
    );
};

export default  Addrecipe 
