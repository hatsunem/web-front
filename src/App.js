import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    const company_name = "株式会社ポムポムテクノロジーズ";

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
          <p>{company_name}</p>
        </div>
        <div className="sns">
          <ul>
            <li>f</li>
            <li>s</li>
          </ul>
        </div>
        <div className="company-info">
          <img alt="Wantedly" src="https://image.rakuten.co.jp/popcute/cabinet/00056355/img62568229.jpg"></img>
          <div className="container-fluid row">
            <div className="col-sm-2 row-item">2016/11/25</div>
            <div className="col-sm-4 row-item">社員とのつながり (0) ログインしてください</div>
            <div className="col-sm-2 row-item">30773</div>
            <div className="col-sm-4 row-item-last">応援する</div>
          </div>
        </div>
      </div>;

    const support =
      <div className="support">
        <button type="button" className="btn btn-info btn-lg btn-block">応援する</button>
        <a className="entry-info" href="#support-button-help-modal">応援について詳しく</a>
        {
          (() => {
            const items = [];
            for (let i = 0; i < 12; i++) {
              items.push(<li key={i}><img alt="support" src="http://arservice.toppan.co.jp/SATCH/201809_suntory/photoCP/frame/android/data/images/pompom/stamp01_on.png"></img></li>)
            }
            return <ul>{items}</ul>;
          })()
        }
        <div className="support-description">
          応援している人の数が多いと、
            <a href="/companies/ranking">会社ランキング</a>
          にランクインします
        </div>
      </div>;

    const article_body_left =
      <div id="article_body_left">
        <div className="member-header">
          <h3>{company_name}のメンバー</h3>
          <button type="button" className="btn btn-info btn-sm">全員見る(4)</button>
        </div>
        <ul className="member-list">
          <li>
            <img alt="member1" src="https://imgcdn.sanrio.co.jp/wp-content/uploads/2013/09/purin_sub_011.png"></img>
            <h4>パパ</h4>
            <span>探偵</span>
          </li>
          <li>
            <img alt="member2" src="https://imgcdn.sanrio.co.jp/wp-content/uploads/2013/09/purin_sub_021.png"></img>
            <h4>ママ</h4>
            <span>ケーキ屋</span>
          </li>
          <li>
            <img alt="member3" src="https://imgcdn.sanrio.co.jp/wp-content/uploads/2014/07/purin_sub_14.png"></img>
            <h4>マカロン</h4>
            <span>ゴールデンレトリバー</span>
          </li>
          <li>
            <img alt="member4" src="https://imgcdn.sanrio.co.jp/wp-content/uploads/2014/07/purin_sub_10.png"></img>
            <h4>カスタード</h4>
            <span>とりさん</span>
          </li>
        </ul>
        <ul className="member-comment">
          <li className="balloon">
            <p>こんにちは！<br></br>ポムポムテクノロジーズ（PT）のパパです！
            <br></br><br></br>
              PTでは、未経験のエンジニアをプロのエンジニアに育成するノウハウがいっぱいです。これまで100名以上の未経験者を育成してきました。
              <br></br><br></br>
              また、「毎月２回のiOS開発の勉強会」や「月に１回、アプリをリリースしていくチーム開発」など、楽しみながらスキルアップする仕組みが盛りだくさん。
              <br></br><br></br>
              研修後も、自他共育。<br></br>
              プロのエンジニアとして活躍している先輩がスキルアップのフォロー。
              <br></br><br></br>
              まずは会社案内しますので、少しでも興味が持てたら、お気軽に応募ください！
            </p>
          </li>
        </ul>
        {support}
      </div>;

    const article_body_right =
      <div id="article_body_right">
        <div className="side-menu-item">
          <button type="button" className="btn btn-success btn-lg btn-block">話を聞きに行きたい</button>
          <div className="entry-count">現在652人がエントリーしています</div>
          <div className="entry-info">
            エントリー状況は公開されません<br></br>
            <a href="https://www.wantedly.com/projects/77244#entry-help-modal">さらに詳しく</a>
          </div>
          <button type="button" className="btn btn-default btn-lg btn-block">あとで見る</button>
        </div>
        <div className="side-menu-item">
          <span>応援している人(119)</span>
          <span className="show-supporters">全員見る</span>
        </div>
        <div className="side-menu-item">
          {support}
        </div>
        <div className="side-menu-item">
          地図
        </div>
        <div className="side-menu-item">
          東京都品川区大崎5-1-5 高徳ビル4階
        </div>
      </div>;

    const article_body =
      <div className="article_body">
        <div className="container-fluid row">
          <div className="col-sm-8">{article_body_left}</div>
          <div className="col-sm-4">{article_body_right}</div>
        </div>
      </div>;

    const article =
      <div className="article">
        {article_header}
        {article_body}
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
