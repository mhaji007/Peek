import React, { Component } from 'react'

class GoogleAuth extends Component {

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'16645536145-lge9eaisleg7erkuug4f98bvuucosge3.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return (
            <div>
                Google Auth
            </div>
        )
    }
}
export default GoogleAuth;
