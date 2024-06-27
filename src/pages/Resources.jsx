import NavBar from "../components/NavBar"
import Space from "../components/Space"
import Desc from "../components/Desc"
import Card from "../components/Card"

function Resources() {

    const sectionStyle = {
        backgroundColor: "#EF611F"
    }
    return(
        <>
        <NavBar />
        <Space />
        <Desc
                title="enlaces vitales"
                content="Aquí tienes enlaces a recursos confiables donde puedes informarte sobre temas importantes que afectan tu bienestar físico, mental y emocional. ¡Explora, aprende y apoya a otros compartiendo esta página! Para una orientación completa, considera visitar el Servicio de Medicina del Adolescente en el Hospital del Niño y hablar con los profesionales. Si tienes alguna sugerencia de otra página importante, escribe a @forever_young_voluntariado <br/> En ForeverYoung, nuestro objetivo es apoyarte en tu camino hacia una vida saludable y feliz."
            />
        <section class="three-columns" style={sectionStyle}>
        <Card title="Salud Mental" subtitles={[
        {
            title: "Ansiedad",
            items: [
                { link: "https://www.who.int/es/news-room/fact-sheets/detail/adolescent-mental-health?gad_source=1&gclid=CjwKCAjw1K-zBhBIEiwAWeCOF-jcK_cc0_iwHcy30hIjx5amLlVUy9MRaH7JDM0j3XJZ6QDB9YTkMRoCEvcQAvD_BwE", text: "Salud mental del adolescente (who.int)" },
                { link: "https://www.healthychildren.org/Spanish/health-issues/conditions/emotional-problems/Paginas/Anxiety-Disorders.aspx", text: "La ansiedad en los adolescentes va en aumento: ¿qué está pasando? (HealthyChildren.org)" }
            ]
        },
        {
            title: "Depresión",
            items: [
                { link: "https://www.mayoclinic.org/es/diseases-conditions/teen-depression/symptoms-causes/syc-20350985", text: "Depresión en adolescentes - Síntomas y causas (Mayo Clinic)" },
                { link: "https://www.nimh.nih.gov/sites/default/files/documents/health/publications/espanol/la-depresion-en-la-adolescencia/19-mh-8089s.pdf", text: "La depresión en la adolescencia (National Institute of Mental Health)" }
            ]
        },
        {
            title: "Transtornos Alimenticios",
            items: [
                { link: "https://kidshealth.org/es/teens/eat-disorder.html", text: "Trastornos de la conducta alimentaria para Adolescentes (Nemours KidsHealth)" },
                { link: "https://www.nimh.nih.gov/health/publications/espanol/los-trastornos-de-la-alimentacion", text: "Los trastornos de la alimentación: Un problema que va más allá de la comida (National Institute of Mental Health)" },
                { link: "https://www.youtube.com/watch?v=2UcCN6fztmM", text: "Signos de un Trastorno Alimentario (Psych Hub)" }
            ]
        }]}/>
        <Card title="Salud Sexual" subtitles={[
        {
            title: "Enfermedades de Transmisión Sexual",
            items: [
                { link: "https://www.who.int/es/news-room/fact-sheets/detail/sexually-transmitted-infections-(stis)", text: "Infecciones de transmisión sexual (ITS) (who.int)" },
                { link: "https://www.stanfordchildrens.org/es/topic/default?id=sexually-transmitted-diseases-in-adolescents-90-P04757", text: "Enfermedades de transmisión sexual en adolescentes (stanfordchildren.org)" }
            ]
        },
        {
            title: "Metodos Anticonceptivos",
            items: [
                { link: "https://www.gob.pe/21781", text: "Métodos anticonceptivos-Ministerio de Salud-Plataforma del Estado Peruano (gob.pe)" },
                { link: "https://www.plannedparenthood.org/es/temas-de-salud/anticonceptivos", text: "Anticonceptivos I Métodos anticonceptivos (Planned Parenthood)" }
            ]
        },

        {
            title: "Derechos sexuales y reproductivos",
            items: [
                { link: "https://peru.unfpa.org/sites/default/files/pub-pdf/final02julioatencion_ssr_y_ma_para_adolescentes_20200702.pdf", text: "Atención en Salud Sexual y Reproductiva y Métodos Anticonceptivos para Adolescentes (gob.pe)" },
                { link: "https://www.youtube.com/watch?v=vNmwB7BD0qo", text: "Nuestros derechos sexuales y reproductivos (Plan Interancional Perú)" }
            ]
        }
    ]} />
        <Card title="Salud Física" subtitles={[
    {
                title: "Nutrición",
                items: [
                    { link: "https://www.stanfordchildrens.org/es/topic/default?id=healthy-eating-during-adolescence-90-P04711", text: "Alimentación sana en la adolescencia - Stanford Medicine Children's Health (stanfordchildrens.org)" },
                    { link: "https://www.elsevier.es/es-revista-farmacia-profesional-3-articulo-lanutricion-del-adolescente-habitos-13129194", text: "La nutrición del adolescente. Hábitos saludables | Farmacia Profesional (elsevier.es)" }
                ]
            },
            {
                title: "Actividad Física",
                items: [
                    { link: "https://www.unicef.org/chile/media/3086/file/La%20actividad%20F%C3%ADsica.pdf", text: "La actividad Física.pdf (unicef.org)" },
                    { link: "https://www.stanfordchildrens.org/es/topic/default?id=exercise-and-adolescents-90-P04702", text: "La ansiedad en los adolescentes va en aumento: ¿qué está pasando? (HealthyChildren.org)" }
                ]
            },
            {
                title: "Vacunación",
                items: [
                    { link: "https://www.healthychildren.org/Spanish/safety-prevention/immunizations/Paginas/Immunizations-for-Teenagers-and-Young-Adults.aspx#:~:text=Empezando%20alrededor%20de%20los%207,%2C%20ceguera%2C%20sordera%20y%20c%C3%A1ncer.", text: "Vacunas para Adolescentes (healthychildren.org)" },
                    { link: "https://kidshealth.org/es/teens/immunizations.html", text: "¿Por qué es importante vacunarse? (TeensHealth)" },
                    { link: "https://www.cdc.gov/vaccines/parents/by-age/years-13-18-sp.html", text: "Vacunas a los 13-18 años (Centros para el Control y la Prevención de Enfermedades)" }
                ]
    }

        ]} />
        <Card title="Violencia y Abuso" subtitles={[
    {
        title: "Bullying",
        items: [
            { link: "https://www.youtube.com/watch?v=gODzdiZ4Gj8", text: "\"Es hora de romper la ley del silencio sobre el ‘bullying’. Iñaki Zubizarreta (Youtube)" },
            { link: "https://kidshealth.org/es/teens/bullies.html", text: "Cómo afrontar el acoso o bullying: para Adolescentes (Nemours KidsHealth)" }
        ]
    },
    {
        title: "Violencia de pareja",
        items: [
            { link: "https://kidshealth.org/es/teens/abuse-relationships.html", text: "Relaciones de maltrato para Adolescentes (Nemours KidsHealth)" },
            { link: "https://www.achn.net/es/acerca-de-access/que-hay-de-nuevo/recursos-para-salud/senales-de-advertencia-de-violencia-en-el-noviazgo-adolescente2/", text: "Señales de Advertencia de Violencia en el Noviazgo Adolescente (achn.net)" }
        ]
    },
    {
        title: "Abuso Sexual",
        items: [
            { link: "https://www.mimp.gob.pe/direcciones/dgnna/contenidos/articulos.php?codigo=32", text: "Ministerio de la Mujer y Poblaciones Vulnerables - MIMP" },
            { link: "https://www.unicef.org/peru/quitemonoslavenda", text: "#QuitémonosLaVenda contra la violencia sexual | UNICEF" }
        ]
    }
]} />
    <Card title="Problemas Personales" subtitles={[
    {
        title: "Imagen Corporal",
        items: [
            { link: "https://kidshealth.org/es/teens/body-image.html", text: "Imagen corporal y autoestima para Adolescentes (Nemours KidsHealth)" },
            { link: "https://www.youtube.com/watch?v=O2TFcDNjATw", text: "¿Qué es la Aceptación de la Imagen Corporal? | Top Doctors (Youtube)" }
        ]
    },
    {
        title: "Problemas Personales",
        items: [
            { link: "https://www.familiaysalud.es/salud-joven/para-padres-de-adolescentes-y-publico-en-general/cuando-tenemos-problemas-en-la-familia", text: "Cuando tenemos problemas en la familia | Familia y Salud" },
            { link: "https://kidshealth.org/es/teens/fight.html", text: "¿Por qué discuto tanto con mis padres? para Adolescentes (Nemours KidsHealth)" }
        ]
    },
    {
        title: "Baja autoestima",
        items: [
            { link: "https://www.youtube.com/watch?v=mT8qVzEhiEA", text: "Cuatro pilares para una buena autoestima. A Mi Yo Adolescente (Youtube)" },
            { link: "https://kidshealth.org/es/teens/self-esteem.html", text: "¿Cómo puedo mejorar mi autoestima? para Adolescentes (Nemours KidsHealth)" }
        ]
    }
]} />
    <Card title="Conductas Riesgosas" subtitles={[
    {
        title: "Consumo de sustancias",
        items: [
            { link: "https://medlineplus.gov/spanish/drugsandyoungpeople.html#:~:text=Las%20drogas%20m%C3%A1s%20usadas%20por,incluso%20murieron%20despu%C3%A9s%20de%20vapear.", text: "Drogas y menores de edad (MedlinePlus)" },
            { link: "https://www.mayoclinic.org/es/diseases-conditions/drug-addiction/symptoms-causes/syc-20365112", text: "Drogadicción trastorno de consumo de sustancias - Síntomas y causas (Mayo Clinic)" }
        ]
    },
    {
        title: "Consumo de tabaco",
        items: [
            { link: "https://www.cigna.com/es-us/knowledge-center/hw/consumo-de-tabaco-en-los-adolescentes-uq2423", text: "Consumo de tabaco en los adolescentes (Cigna)" },
            { link: "https://www.mayoclinic.org/es/healthy-lifestyle/quit-smoking/in-depth/nicotine-craving/art-20045454", text: "Dejar de fumar: 10 formas de resistir el deseo de consumir tabaco (Mayo Clinic)" }
        ]
    },
    {
        title: "Embarazo Adolescente",
        items: [
            { link: "https://www.savethechildren.org.pe/wp-content/uploads/2020/08/Estudio-de-embarazo-adolescente-final.pdf", text: "Estudio del Embarazo Adolescente (savethechildren.org.pe)" },
            { link: "https://peru.unfpa.org/es/news/se-debe-visibilizar-el-embarazo-y-la-maternidad-adolescentes-para-construir-un-mejor-futuro", text: "Construir un mejor futuro para las niñas y adolescentes del Perú (UNFPA Perú)" }
        ]
    }
]} />
    </section>
    </>

);
}

export default Resources
