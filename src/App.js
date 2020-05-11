import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Main from './components/Layout/Main'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App