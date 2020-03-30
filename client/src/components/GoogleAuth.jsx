import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions'

class GoogleAuth extends Component {

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:
                '16645536145-lge9eaisleg7erkuug4f98bvuucosge3.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthChanged(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChanged);
    });
});
}

onAuthChanged = (isSignedIn) => {
  if(isSignedIn) {
      this.props.signIn();
  }else {
      this.props.signOut();
  }
};

onSignInClick = () => {
    this.auth.signIn();
}

onSignOutClick = () => {
    this.auth.signOut();

}

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;
        }
        else if (this.props.isSignedIn === true){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        }
        else{
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
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

const mapStateTOProps = (state) =>{
    return {isSignedIn: state.auth.isSignedIn};
}

export default connect(mapStateTOProps, {signIn,signOut}) (GoogleAuth);
