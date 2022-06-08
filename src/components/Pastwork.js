import projects from './project-data'
function Pastwork() {
    return (
    <section>
        <div class="card2">
         {projects.map((project, index) => {
            return (
                <div key={index} class="cardtext">
                    <div class="halfspacer"/>
    <div class="borderdiv">
<p class="text-xl spacerbottom">{project.name}</p>
    <a href={project.depolink}><img class="preview roundme spacerbottom opaqueme borderme" alt="Weather App" src={project.piclink} width="360px"/></a>
    <a href={project.depolink}><button styles="border-radius:30px;width:180px;" class="bg-black pop hover:bg-gray-800 text-gray-500 hover:text-gray-400 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-base font-light mx-24 platformbuttons halfspacerbottom">
    View webpage live
    </button></a><br/>
    <a href={project.repolink}><button styles="border-radius:30px;width:180px;" class="bg-black pop hover:bg-gray-800 text-gray-500 hover:text-gray-400 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-base font-light mx-24 platformbuttons">
    Link to repo
    </button></a>
    </div><div class="space spacerbottom"/>
       
   
    
    
</div>
            )
        })}
        <div class="spacer"></div>
        </div>
</section>)
    }
    export default Pastwork;
