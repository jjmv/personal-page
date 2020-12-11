import React from "react";
import "./_styles.scss";

export default function Home() {
  return (
    <>
      <section className="home-section">
        <div className="card">
          <div className="container">
            <div className="margin-top line-1">
              <p className="constWord">const</p>
              <p className="introduction-word"> introduction</p>
              <p className="equal-symbol"> = </p>
              <p className="parenthesis-symbol"> ()</p>
              <p className="arrow-symbol">{" =>"}</p>
              <p className="curlyBraces-symbol">{" {"}</p>
            </div>
            <div className="margin-top line-2">
              <p className="console-word">console</p>
              <p>.</p>
              <p className="log-word">log</p>
              <p className="parenthesis-symbol">(</p>
              <p className="text">
                {` `}"Hello! my name is Javier and I am a web developer"
              </p>
              <p className="parenthesis-symbol">{` `})</p>
            </div>
            <div className="margin-top line-3">
              <p className="curlyBraces-symbol">{"}"}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
