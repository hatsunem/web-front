import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {

    const header =
      <div>
        <div className="intro-bar">
          <p>ポムポムプリンは、月間200万人が利用する国内最大のビジネスSNSです</p>
        </div>
        <div>
          <div className="logo-and-search">
            <p>
              <img alt="Pompom" src="https://image.rakuten.co.jp/popcute/cabinet/00056355/img62568229.jpg"></img>
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
        </div>
      </div>;

    const article_header =
      <div className="article-header">
        <h1>経験無いけどアプリ開発やりたい！という人へ。わかりました、大歓迎です!!</h1>
        <div className="company-name">
          <img alt="icon" src="https://rr.img.naver.jp/mig?src=https%3A%2F%2Fstatic-s.aa-cdn.net%2Fimg%2Fgp%2F20600000246966%2F2lyQyOKBaf5AbKnd49k2S9jJf6cBwhT3xoBbzs7FpkH92XI610bAgD6Vs2GOWAtnCgzE%3Dw300&twidth=1200&theight=1200&qlt=80&res_format=jpg&op=r"></img>
          <p>株式会社ポムポムテクノロジーズ</p>
        </div>
        <div className="sns">
          <ul>
            <li>f</li>
            <li>s</li>
          </ul>
        </div>
        <div className="company-info">
          <img alt="Wantedly" src="https://image.rakuten.co.jp/popcute/cabinet/00056355/img62568229.jpg"></img>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2 row-item">2016/11/25</div>
              <div className="col-sm-4 row-item">社員とのつながり (0) ログインしてください</div>
              <div className="col-sm-2 row-item">30773</div>
              <div className="col-sm-4 row-item-last">応援する</div>
            </div>
          </div>
        </div>
      </div>;

    const article =
      <div className="article">
        {article_header}
      </div>;

    return (
      <div>
        {header}
        {article}
      </div>
    );
  }
}

export default App;
