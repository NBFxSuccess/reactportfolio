import downloadbuttonimg from '../resumedownload.png'
function Aboutme() {
    return (<section class="card spacerbottom">
    <div class="cardheader">
<div class="spacer"/>
<a href="https://www.dropbox.com/s/zair1gf5ra24brb/resume-sample.pdf?dl=1">
<img id="downloadbutton" class="opaqueme" src={downloadbuttonimg}/><p class="text-center spacerbottom">Download Resume</p></a>
</div>
<div class="spacer"/>
<div class="cardtext">
<p class="spacerbottom">Proficient in the following: MongoDB, Express, React, Node.js, SQL, GraphQL, JavaScript, CSS, and server-side APIs,</p>
</div>
<div class="spacer"/>
</section>)
    }
    export default Aboutme;