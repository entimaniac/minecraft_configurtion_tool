import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Properties from "./components/Properties";

function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Header/>
            <Properties/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
