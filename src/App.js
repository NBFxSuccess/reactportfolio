import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
function App() {
  return ( <div><Navbar/>
 <section id="tophalf">
    <img alt="profile avatar" id="pfp" width="200" src="./assets/img/profile.png"></img>
    <img alt="Nick Ferrer gif" width="250" src="./assets/img/name.gif"></img>
</section>
<section class="card">
    <div class="cardheader">
<h1 id="about-me">About Me</h1>
</div>
<div class="cardtext">
<p>I'm an experienced software and web developer with many years of experience. My core strengths are in php and JS.</p>
</div>
</section>
<section class="card">
    <div class="cardheader">
<h1 id="contact">Contact</h1>
</div>
<div class="cardtext">
<p>Please contact me via email @ <a href="mailto:nick@getmighty.net">nick@getmighty.net</a></p>
</div>
</section>
<section class="card">
    <div class="cardheader">
<h1 id="past-work">Past Work</h1>
</div>
<div class="cardtext">
    <a href="https://nbfxsuccess.github.io/weatherrepo/"><img alt="Weather App" src="https://raw.githubusercontent.com/NBFxSuccess/weatherrepo/main/assets/Capture.png" width="360px"/></a>
<p>(Weather App)</p>
<a href="https://github.com/NBFxSuccess/weatherrepo"><p>Link to repo</p></a>
<a href="https://lindybriggs.github.io/Project-1/"><img alt="Project 1" src="./public/logo192.png" width="300px"/></a>
<p>(Project 1)</p>
<a href="https://github.com/lindybriggs/Project-1"><p>Link to repo</p></a>
<a href="https://nbfxsuccess.github.io/passwordgeneratorhomework/"><img alt="Password Generator" src="https://raw.githubusercontent.com/NBFxSuccess/passwordgeneratorhomework/main/Assets/screenshot.png" width="300px"/></a>
<p>(Password generator)</p>
<a href="https://github.com/NBFxSuccess/passwordgeneratorhomework"><p>Link to repo</p></a>
<a href="https://nbfxsuccess.github.io/Planner/"><img alt="Day Planner" src="https://raw.githubusercontent.com/NBFxSuccess/Planner/main/assets/screenshot.png" width="300px"/></a>
<p>(Day Planner)</p>
<a href="https://github.com/NBFxSuccess/Planner"><p>Link to repo</p></a>
</div>
</section></div>
    
  );
}

export default App;
