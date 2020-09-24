import React from 'react';

import HeaderMenu from '../HeaderMenu/HeaderMenu';
import BodyContainer from '../BodyContainer/BodyContainer';
import  './RecipeLayout.module.css';

const RecipeLayout = () => {
    return(
        <div className="RecipeLayout" >
             <p className="maintitle">Chris's Recipe Sharing Site</p>
            <HeaderMenu />
            <BodyContainer />          
        </div> 
    );
};

export default RecipeLayout