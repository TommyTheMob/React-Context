import React from "react";
import ThemedButton from './ThemedButton.jsx'
import {ThemeContext, themes} from "./themes-context.js";

class App extends React.Component {
    state = {
        theme: themes.dark,
    }

    toggleTheme = () => {
        const newTheme = this.state.theme === themes.dark
            ? themes.light
            : themes.dark

        this.setState({
            theme: newTheme
        })
    }

    render() {
        return (
            <>
                <ThemeContext.Provider value={this.state.theme}>
                    <ThemedButton onClick={this.toggleTheme}>Dynamic Theme</ThemedButton>
                </ThemeContext.Provider>
                    <ThemedButton onClick={this.toggleTheme}>Default Theme</ThemedButton>
            </>
            )

    }
}

export default App