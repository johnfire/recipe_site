import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import RecipeLayout from '../ui/containers/RecipeLayout/RecipeLayout';
import { useState } from 'react';

export const App = () => (
  <div>
    <h3>Welcome to Meteor!</h3>
    <BrowserRouter>
      <div>
          <RecipeLayout />
      </div>
    </BrowserRouter> 
  </div>
);