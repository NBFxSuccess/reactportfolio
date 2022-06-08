import React from 'react';
function Navbar({ currentPage, handlePageChange }) {
return ( 
<nav>
<div class="spacer"></div>
<div id="navcon">
    <a onClick={() => handlePageChange('Contact')}><button styles="border-radius:30px;width:180px;" class="bg-black pop hover:bg-gray-800 text-gray-500 hover:text-gray-400 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-base font-light mx-24 platformbuttons">
   Contact
    </button></a>
    <a onClick={() => handlePageChange('Pastwork')}><button  class="port bg-black pop hover:bg-gray-800 text-gray-500 hover:text-gray-400 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-base font-light mx-24 platformbuttons">
    Portfolio
    </button></a>
    <a onClick={() => handlePageChange('About')}><button styles="border-radius:30px;width:180px;"  class="bg-black pop hover:bg-gray-800 text-gray-500 hover:text-gray-400 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-base font-light mx-24 platformbuttons">
   About me
    </button></a>
</div><div class="spacer"></div><div class="spacer"></div>
<div class="flex justify-center halfspacertop">
    <a onClick={() => handlePageChange('Resume')}><button styles="border-radius:30px;width:180px;" class="port bg-black hover:bg-gray-800 text-gray-500 hover:text-gray-400 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-base font-light platformbuttons">
    Resume
    </button></a><div class="space"></div>
    </div>
    <div class="spacer"/>
</nav>)
}
export default Navbar;