import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import LoginComponent from '../../components/loginComponent/LoginComponent';
import "./login.scss"
import RegisterComponent from '../../components/registerComponent/RegisterComponent';
export default class Login extends Component {

    state = {
        isRegistering: false
    }

    toggleForm = () => {

        this.setState((prev) => ({
            isRegistering: !prev.isRegistering

        }))
    }
    render() {
        return (
            <div>
                <Navbar />

                {this.state.isRegistering ? <RegisterComponent toggleForm={this.toggleForm} /> :
                    <LoginComponent toggleForm={this.toggleForm} />}

                <Footer />
            </div>
        )
    }
}
