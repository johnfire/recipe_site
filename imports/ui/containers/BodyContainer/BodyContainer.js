import React, { useState, Fragment } from 'react';
import { Switch, Route } from 'react-router';
import { useTracker } from 'meteor/react-meteor-data';
// import { compareSync } from 'bcrypt';

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
    console.log("in the BodyContainer function");
    const user = useTracker(() => Meteor.user());
    console.log(user);
    //console.log(user._id)

    if(user) {
        console.log("we should have a user")
        console.log(user)
        console.log(user.username)
    }
    const logout = () => Meteor.logout();
    
    return (
        <div className="BodyContainer">
            <div>
                <div className="user" onClick={logout}>
                </div>
                <Switch>
                    <Route path="/" component={Intro} exact />
                    <Route path="/ShowRecipe" component={Showrecipe} />
                    <Route path="/Breakfasts" component={Breakfasts} />
                    <Route path="/Lunches"component={Lunches} />
                    <Route path="/Dinners"component={Dinners} />
                    <Route path="/Login"component={Login} />
                    { user ? <Route path="/AddRecipe"component={Addrecipe} /> : null}
                    <Route path="/Impressum" component={Impressum} />
                </Switch> 
            </div> 
        </div>
    );
};

export default BodyContainer