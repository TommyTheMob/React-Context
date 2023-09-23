import React from "react";
import ThemedButton from './ThemedButton.jsx'

const App = () => {
    return (
        <>
            <ThemedButton content={'Dynamic Theme'}></ThemedButton>
            <ThemedButton content={'Default Theme'}></ThemedButton>
        </>
    )
}

export default App