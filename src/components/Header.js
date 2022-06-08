import Navbar from './Navbar'
import profilepicture from '../profilepicture.png'

function Header() {
    return (<div><img id="profilepicture" class="invert" src={profilepicture}></img><p id="nameplate" class="text-center mt-5 text-3xl">Nickolas Ferrer</p><div class="spacer"></div></div>)
    }
    export default Header;