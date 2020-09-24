import React from 'react';

import styles from './BodyContainer.module.css';
import { Switch, Route } from 'react-router';
import Intro from  '../../components/Intro/Intro'
import Showrecipe from '../../components/showrecipe/Showrecipe';
import Breakfasts from '../../components/Meals/Breakfasts/Breakfasts';
import Addrecipe from '../../components/Addrecipe/Addrecipe';
import Login from '../../components/Login/Login';
import Lunches from '../../components/Meals/Lunches/Lunches';
import Dinners from '../../components/Meals/Dinners/Dinners';
import Impressum from '../../components/Impressum/Impressum';
import './BodyContainer.module.css';

const BodyContainer = () => {

    console.log("in the BodyContainer Folder");

    return (

        <div className="BodyContainer">
                <Switch>
                    <Route path="/" component={Intro} exact />
                    <Route path="/ShowRecipe" component={Showrecipe} />
                    <Route path="/Breakfasts" component={Breakfasts} />
                    <Route path="/Lunches"component={Lunches} />
                    <Route path="/Dinners"component={Dinners} />
                    <Route path="/Login"component={Login} />
                    <Route path="/AddRecipe"component={Addrecipe} />
                    <Route path="/Impressum" component={Impressum} />
                </Switch>  
        </div>
    );
};

export default BodyContainer