function Section1() {
    const sectionStyle = {
        backgroundColor: "white"
    }


    return(
        <section style={sectionStyle} class="flexbox-section">
            <div class="left-container">
                <img class="left-image border" src="public/group-photo1.jpeg" alt="Group Photo"></img>
            </div>
            <div class="right-container">
                <img class="right-image" src="public/logo-foreveryoung2.png" alt="Logo"></img>
                <p>Somos un grupo de voluntariado de Servicio de Medicina del Adolescente del Hospital del Niño de Breña, Lima, Perú. Nuestro objetivo es apoyar a los adolescentes mediante actividades y promover su salud sexual, integral, mental y física. Fomentamos el amor, comprensión y tolerancia. Además, difundimos información y concientizamos sobre los derechos de los adolescentes y la prevención de actitudes riesgosas.</p>
            </div>
        </section>
    )
}
export default Section1 