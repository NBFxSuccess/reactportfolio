import linkedinlogo from '../linkedin.png'
import githublogo from '../github.png'
function Footer() {
    return (
    <div id="footercontainer">
<a href="https://google.com"><img class="footerlogos" src={linkedinlogo}/></a><div class="space2"/><a href="https://github.com/NBFxSuccess"><img class="invert footerlogos spacerbottom" src={githublogo}/></a>
</div>)
    }
    export default Footer;