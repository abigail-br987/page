function Section3() {
    const sectionStyle = {
        backgroundColor: "white"
    }


    return(
        <section className="flexbox-section">
        <div className="left-container">
            <img className="left-image border" src="public/posters.png" alt="Posters Photo" />
        </div>
        <div className="right-container">
            <h1>Diseños que inspiran</h1>
            <button><a href="https://drive.google.com/drive/folders/1gNpCWpx-Tmdrjx7DPJAfCOhkjSf6tyLJ?usp=sharing" target="_blank">DESCARGAR GRATIS</a></button>
            <p>¿Necesitas un poco de inspiración para tu día a día? ✨ Aquí encontrarás una colección de frases motivacionales diseñadas especialmente para ti. Perfectas para compartir, usar como fondo de pantalla o simplemente tener un recordatorio diario
                . Si tienes sugerencias, envialas a <a href= "https://forms.gle/DJ2CsPpc4jYSNMhdA"> Forever Young Google Forms </a> o @abigail_br987 (ilustradora)
            </p>
        </div>
        </section>
    )
}
export default Section3 