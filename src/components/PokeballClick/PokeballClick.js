import '../PokeballClick/Style.css'
export function Pokeball(props){
    return(
       <section style={{display: props.name}}>
        <div id="ball">
        <div id="bottom-half"></div>
            <div id="top-half">
                <h1 id="rocket">R</h1>
                <div id="center-click">
                <div id="center-click-inner"></div>
            </div>
        </div>
        </div>
       </section>
    )
}

export default Pokeball
