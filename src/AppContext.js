// App context to store the user role and provide it to the 
// pages and components across the app without prop drilling
import { createContext, useState } from 'react';

const AppContext = createContext({
    role: null,
    setRole: () => {},
});


export default AppContext;