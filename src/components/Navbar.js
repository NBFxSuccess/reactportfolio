import React from 'react';
function Navbar({ currentPage, handlePageChange }) {
return ( 
<nav styles="display:flex;">
<div class="flex justify-center">
    <a onClick={() => handlePageChange('Contact')}><button styles="border-radius:30px;width:180px;" class="bg-black pop hover:bg-gray-800 text-gray-500 hover:text-gray-400 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-base font-light mx-24 platformbuttons">
   Contact
    </button></a><div class="space"/>
    <a onClick={() => handlePageChange('Pastwork')}><button styles="border-radius:30px;width:180px;" onclick="window.location.href='https://open.spotify.com/artist/7nI5WmPUaxUvCEb5xQIkgJ'" class="bg-black pop hover:bg-gray-800 text-gray-500 hover:text-gray-400 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-base font-light mx-24 platformbuttons">
    Portfolio
    </button></a><div class="space"/>
    <a onClick={() => handlePageChange('About')}><button styles="border-radius:30px;width:180px;" onclick="window.location.href='https://soundcloud.app.goo.gl/ePqQpocHfcfWp6uFA'" class="bg-black pop hover:bg-gray-800 text-gray-500 hover:text-gray-400 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-base font-light mx-24 platformbuttons">
   About me
    </button></a><div class="space"/>
    <a onClick={() => handlePageChange('Resume')}><button styles="border-radius:30px;width:180px;" class="bg-black pop hover:bg-gray-800 text-gray-500 hover:text-gray-400 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-base font-light mx-24 platformbuttons">
    Resume
    </button></a><div class="space"/>
</div>
</nav>)
}
export default Navbar;