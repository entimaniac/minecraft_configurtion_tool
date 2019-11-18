import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/components/footer/Footer";
import PropertiesForm from "./components/PropertiesForm";

function App() {
    return (
        <React.Fragment>
            <Header/>
            <PropertiesForm/>
            <Footer/>
        </React.Fragment>

    );
}

export default App;
