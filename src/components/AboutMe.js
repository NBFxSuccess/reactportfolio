// import picturename from '..'
function Aboutme() {
    return (<section class="card">
    <div class="cardheader">
    <section id="tophalf">
    <img alt="profile avatar" id="pfp" width="200" src={picturename}></img>
    <img alt="Nick Ferrer gif" width="250" src="./assets/img/name.gif"></img>
</section>
<h1 id="about-me">About Me</h1>
</div>
<div class="cardtext">
<p>I'm an experienced software and web developer with many years of experience. My core strengths are in php and JS.</p>
</div>
</section>)
    }
    export default Aboutme;