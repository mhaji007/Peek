import React, { Component } from 'react';

class GoogleAuth extends Component {

    state = {isSignedIn: null};

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:
                '16645536145-lge9eaisleg7erkuug4f98bvuucosge3.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.setState({isSignedIn:this.auth.isSignedIn.get()});
            this.auth.isSignedIn.listen(this.onAuthChanged);
    });
});
}

onAuthChanged = () => {
    this.setState({isSignedIn:this.auth.isSignedIn.get()})
}

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return null;
        }
        else if (this.state.isSignedIn === true){
            return (
                <button className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        }
        else{
            return (
                <button className="ui red google button">
                    <i className="google icon"/>
                    Sign In with Google
                </button>
            )
        }
}

render() {
    return <div>{this.renderAuthButton()}</div>
}

}


export default GoogleAuth;
