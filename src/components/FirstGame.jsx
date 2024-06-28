

import React, { useState, useEffect, useRef } from "react";



const FirstGame = () => {
    const animation = [
        "public/personita1.png",
        "public/personita2.png",
        "public/personita3.png",
        "public/personita4.png",
        "public/personita5.png",
        "public/personita7.png"
    ];
    
    let words = [
        {
            word: "adolescencia",
            hint: "Etapa de transición entre la niñez y la edad adulta"
        },
        {
            word: "autoestima",
            hint: "Percepción que una persona tiene de su propio valor"
        },
        {
            word: "consentimiento",
            hint: "Aprobación libremente otorgada para realizar una actividad"
        },
        {
            word: "tolerancia",
            hint: "Respeto y aceptación de las diferencias entre personas"
        },
        {
            word: "ansiedad",
            hint: "Sentimiento de miedo o preocupación intensa"
        },
        {
            word: "autocuidado",
            hint: "Práctica de cuidar de uno mismo para mantener la salud"
        },
        {
            word: "derechos",
            hint: "Privilegios legales que todas las personas tienen"
        },
        {
            word: "higiene",
            hint: "Prácticas para mantener la salud y prevenir enfermedades"
        },
        {
            word: "resiliencia",
            hint: "Capacidad de recuperarse frente a la adversidad"
        },
        {
            word: "violencia",
            hint: "Uso de la fuerza para dañar a alguien o algo"
        },
        {
            word: "amistad",
            hint: "Relación de afecto entre personas"
        },
        {
            word: "bienestar",
            hint: "Estado de satisfacción y comodidad"
        },
        {
            word: "convivencia",
            hint: "Vida en común con otras personas"
        },
        {
            word: "crecimiento",
            hint: "Desarrollo físico y mental a lo largo del tiempo"
        },
        {
            word: "dignidad",
            hint: "Calidad de ser digno y merecedor de respeto"
        },
        {
            word: "diversidad",
            hint: "Variedad de características humanas en una sociedad"
        },
        {
            word: "familia",
            hint: "Grupo de personas relacionadas por parentesco"
        },
        {
            word: "igualdad",
            hint: "Estado de ser igual en derechos y oportunidades"
        },
        {
            word: "infancia",
            hint: "Período de la vida que abarca desde el nacimiento hasta la adolescencia"
        },
        {
            word: "integridad",
            hint: "Cualidad de una persona recta y honesta"
        },
        {
            word: "madurez",
            hint: "Etapa de desarrollo en la que una persona alcanza su pleno potencial"
        },
        {
            word: "optimismo",
            hint: "Actitud de ver y juzgar las cosas en su aspecto más positivo"
        },
        {
            word: "paciencia",
            hint: "Capacidad de soportar contratiempos con serenidad"
        },
        {
            word: "respeto",
            hint: "Consideración y valoración especial hacia alguien o algo"
        },
        {
            word: "solidaridad",
            hint: "Apoyo incondicional a causas o intereses ajenos"
        },
        {
            word: "valores",
            hint: "Principios que guían el comportamiento humano"
        },
        {
            word: "voluntariado",
            hint: "Trabajo de ayuda desinteresada realizado por una persona"
        },
        {
            word: "adversidad",
            hint: "Situación desfavorable o difícil"
        },
        {
            word: "equilibrio",
            hint: "Estado de armonía y estabilidad"
        },
        {
            word: "gratitud",
            hint: "Sentimiento de aprecio por algo recibido"
        },
        {
            word: "honestidad",
            hint: "Cualidad de ser sincero y justo"
        },
        {
            word: "independencia",
            hint: "Condición de no depender de otros"
        },
        {
            word: "perseverancia",
            hint: "Firmeza y constancia en la realización de algo"
        },
        {
            word: "prueba",
            hint: "Examen o evaluación para demostrar conocimientos o habilidades"
        },
        {
            word: "responsabilidad",
            hint: "Capacidad de responder por los propios actos"
        },
        {
            word: "tenacidad",
            hint: "Firmeza y perseverancia en los propósitos"
        },
        {
            word: "tranquilidad",
            hint: "Estado de calma y sosiego"
        },
        {
            word: "voluntad",
            hint: "Capacidad humana para decidir y actuar según el propio criterio"
        }
    ]

    const [correctWord, setCorrectWord] = useState("");
    const [scrambledWord, setScrambledWord] = useState("");
    const [hint, setHint] = useState("");
    const [timer, setTimer] = useState(30);
    const [score, setScore] = useState(0);
    const [userWord, setUserWord] = useState("");
    const [message, setMessage] = useState("¡Con 10 aciertos ganas! ¡Tú puedes!");
    const [characterSrc, setCharacterSrc] = useState(animation[0]);
    const [gameOver, setGameOver] = useState(true);
    const [showButton, setButton] = useState(false);
    const [showContainer2, setContainer2] = useState(false);
    const [showContainer1, setContainer1] = useState(true);
    const [backgroundImage, setBackgroundImage] = useState('public/ordena_y_gana_thumbnail.png'); // State for background image

    const divStyle = {
        backgroundImage: `url(${backgroundImage})`
    };

    const intervalRef = useRef(null);

    useEffect(() => {
        if (timer === 0) {
            handleTimeOut();
        } else {
            intervalRef.current = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
        }
        return () => clearInterval(intervalRef.current);
    }, [timer]);

    const initGame = () => {
        setTimer(30);
        clearInterval(intervalRef.current);

        let randomObj = words[Math.floor(Math.random() * words.length)];
        let wordArray = randomObj.word.split("");
        for (let i = wordArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }

        setScrambledWord(wordArray.join(""));
        setHint(randomObj.hint);
        setCorrectWord(randomObj.word.toLowerCase());
        setUserWord("");
        setCharacterSrc(animation[0]);
    };

    const startGame = () => {
        setContainer2(true);
        setContainer1(false);
        setButton(true);
        setBackgroundImage(false)
        initGame();

    };

    const checkWord = () => {
        if (!userWord) {
            setMessage("Escribe una palabra para evaluar");
            return;
        }

        if (userWord.toLowerCase() !== correctWord) {
            if (score > 0) {
                setScore(prev => prev - 1);
            }
            setMessage(`Oops! ${userWord} no es la palabra`);
            initGame();
        } else {
            setMessage(`Si! ${correctWord.toUpperCase()} es la palabra`);
            setScore(prev => prev + 1);
            playAnimation();
            if (score > 9) { 
                winGame();
            } else {
                initGame();
            }
        }
    };

    const handleTimeOut = () => {
        setBackgroundImage("public/paralaproxima-03.png")
        setContainer1(true)
        setContainer2(false)

    };

    const winGame = () => {
        setBackgroundImage("public/felicidades-03.png")
        setContainer1(true)
        setContainer2(false)
    };


    const playAnimation = () => {
        let index = 0;
        let loops = 0;
        const maxLoops = 3;

        const interval = setInterval(() => {
            setCharacterSrc(animation[index]);
            index = (index + 1) % animation.length;
            if (index === 0) {
                loops++;
                if (loops === maxLoops) {
                    clearInterval(interval);
                    setCharacterSrc(animation[0]);
                }
            }
        }, 50);
    };


    
    return (
        <section>
            <div id="word_scramble_game" style={divStyle}>
                {!showButton && (
                <div >
                            <img src="public/start_button_image.png" className="startBtn" alt="Start Button" onClick={startGame}></img>
                        <div/>
                    </div>
                )}
                {!showContainer1 && (
                <div className="container">
                    <h3>ORDENA Y GANA</h3>
                    
                        <div className="content">
                            <p className="word">{scrambledWord}</p>
                            <div className="details">
                                <p className="pista">Pista: <span>{hint}</span></p>
                                <p className="time">Tiempo: <span><b>{timer}</b>s</span></p>
                            </div>
                            <div className="details2">
                                <input
                                    type="text"
                                    spellCheck="false"
                                    placeholder="Escribe la palabra"
                                    value={userWord}
                                    onChange={(e) => setUserWord(e.target.value)}
                                />
                                <div className="buttons">
                                    <button className="refresh-word" onClick={initGame}>Refrescar</button>
                                    <button className="check-word" onClick={checkWord}>Check</button>
                                </div>
                            </div>
                            <div className="score-area">
                                <span>Puntaje: </span><span className="score">{score}</span>
                            </div>
                        </div>
                    
                </div>
                )}
                {showContainer2 && (
                <div className="container2">
                    
                        <img id="littlecharacter" src={`./${characterSrc}`} alt="Little Character" />
                    
                    
                        <div id="cajita" className="modal">
                            <div className="box-content">
                                <p id="box-text">{message}</p>
                            </div>
                        </div>
                    
                </div>
                )}
            </div>
        </section>
    );
};



export default FirstGame;