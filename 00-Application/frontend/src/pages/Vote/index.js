import React from 'react'
import Chicken from '../../images/chicken.gif';
import Pasta from '../../images/pasta.gif';
import './Vote.css'

const VotePage = (props) => {
  return (
    <div className="vote-page">
      <div class="container">
        <span class="line-1">
          <h1 class="copy">Chicken or Pasta?</h1>
        </span>
        <span class="line-2"> 
          <h2 class="copy">Vote</h2>
        </span>
      </div>
      <div class="wrapper">
        <div class="hovereffect">
          <img class="img-responsive" src={Chicken} alt=""/>
          <div class="overlay">
            <h2>Chicken</h2>
            <p><a href="#">VOTE</a></p> 
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="hovereffect">
          <img class="img-responsive" src={Pasta} alt=""/>
          <div class="overlay">
            <h2>Pasta</h2>
            <p><a href="#">VOTE</a></p> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default VotePage