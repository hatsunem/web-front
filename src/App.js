import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {

    const header =
      <div>
        <div className="intro-bar">
          <p>Wantedlyは、月間200万人が利用する国内最大のビジネスSNSです</p>
        </div>
        <div>
          <header>
            <div className="logo-and-search">
              <p>
                <img alt="Wantedly" src="https://de7iszmjjjuya.cloudfront.net/assets/beta/header-logo-loggedout-0d3e0bf2ed7533fe5ace8e585e3b6dafe93a13ec41f0f9c396d28435a35e9a6a.png"></img>
              </p>
              <form className="form-group">
                <input type="text" className="form-control" placeholder="人や会社、募集を検索"></input>
              </form>
            </div>
            <div className="menu">
              <ul>
                <li>採用担当者の方はこちら</li>
                <li>Facebookで無料登録</li>
                <li>ログイン</li>
              </ul>
            </div>
          </header>
        </div>
      </div>;


    return (
      <div>{header}</div>
    );
  }
}

export default App;
