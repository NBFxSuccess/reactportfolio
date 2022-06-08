import Navbar from './Navbar'
import profilepicture from '../profilepicture.png'

function Header() {
    return (<div id="header"><img id="profilepicture" class="mt-5" styles="width:100px;" src={profilepicture}></img><p id="nameplate" class="text-center mt-5 text-3xl">Nickolas Ferrer</p></div>)
    }
    export default Header;