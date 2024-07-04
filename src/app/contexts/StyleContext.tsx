import React, { createContext, useState } from 'react';

type ThemeContextType = false | true;

const StyleContext = createContext<ThemeContextType>(false);

const StyleContextProvider = (props: any) => {
    
    const [darkMode] = useState<ThemeContextType>(false);

    return (
        <div>
            <StyleContext.Provider value={ darkMode }>
                {props.children}
            </StyleContext.Provider>
        </div>
    )
} 

export { StyleContext, StyleContextProvider };