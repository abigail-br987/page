



function SecondGame() {

    const imgStyle = {
        objectFit: "cover",
        maxWidth: "100%",
    }

    return(
        <section>
            <div id= "word_scramble_game">
            <img src="public/ponapruebatusaber-01.png" style={imgStyle}></img>
            
            <a href="https://abigail-br987.itch.io/juego-de-preguntas-trivia" target="_blank">
                <img src="public/start_button_image.png" class="startBtn"></img>
            </a>
            </div>
        </section>
    )
}

export default SecondGame