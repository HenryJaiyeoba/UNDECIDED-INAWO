
function loadSignaturesAnimation(){

    const outerSignatureContainer = document.querySelector(".outer-sign-container");
    outerSignatureContainer.style.display = "grid";


    let signatures = document.querySelectorAll(".sign");

    signatures.forEach( signature => {

        let signaturePaths = signature.querySelectorAll("path");

        function run(){

            let delay = range(2,10) * 1000;
            let duration = range(1,3) * 1000;

            signaturePaths.forEach( path => path.style.opacity = 1);

            anime({
                targets: signature,
                easing: 'linear',
                translateX: range(-50,50) + "%",
                translateY: range(-40,40) + "px",
                scale: range(4, 10) / 10,
            });  

            anime({
                targets: signaturePaths,
                strokeDashoffset: [anime.setDashoffset, 0],
                keyframes: [
                    {   
                        delay: delay + duration,
                        opacity: 0, 
                    }
                ],
                easing: 'linear',
                duration: duration,
                delay,
                complete: run
            });

            }

            run();

    })
}


function loadChampagneAnimation(){

    const outerChampagneContainer = document.querySelector(".outer-gold-container");
    outerChampagneContainer.style.display = "grid";

    const champagneBubblesContainer =  document.querySelector(".champagne-bubbles-container");

    for (let i = 0; i < 300; i++) {
        const neutralChampagneBubble = document.createElement("div");
        neutralChampagneBubble.className = "neutral champagne-bubble";
        neutralChampagneBubble.style.left = `${range(0,100)}%`;
        neutralChampagneBubble.style.height = `${range(6,10)}px`;

        const negativeChampagneBubbles = document.createElement("div");
        negativeChampagneBubbles.className = "negative champagne-bubble";
        negativeChampagneBubbles.style.left = `${range(0,100)}%`;

        const positiveChampagneBubbles = document.createElement("div");
        positiveChampagneBubbles.className = "positive champagne-bubble";
        positiveChampagneBubbles.style.left = `${range(0,100)}%`;

        champagneBubblesContainer.append(negativeChampagneBubbles);
        champagneBubblesContainer.append(neutralChampagneBubble);
        champagneBubblesContainer.append(positiveChampagneBubbles);
    }

    var positiveChampagneBubbles = document.querySelectorAll('.positive.champagne-bubble');
    var negativeChampagneBubbles = document.querySelectorAll('.negative.champagne-bubble');
    var neutralChampagneBubbles = document.querySelectorAll('.neutral.champagne-bubble');

    function redoNegative(){
        anime({
            targets: positiveChampagneBubbles,
            keyframes: [
                { 
                    translateY: () => -1000, 
                    translateX: range(0, 100), 
                    opacity: 0,
                    scale: 0.5,
                    backgroundColor: '#ffdea8'     
                },
            ],
            loop: true,
            duration: 8000,
            delay: anime.stagger(50),
            easing: "linear",
            complete: redoNegative
        });
    }

    function redoPositive(){
        anime({
        targets: negativeChampagneBubbles,
        keyframes: [
            { 
                translateY: () => -1000, 
                translateX: -range(0, 100), 
                opacity: 0,
                scale: 0.8,
                backgroundColor: '#ffdea8'     
            },
        ],
        loop: true,
        duration: 5000,
        easing: "linear",
        delay: anime.stagger(50),
        complete: redoPositive
        });
    }

    function redoNeutral(){
        anime({
        targets: neutralChampagneBubbles,
        keyframes: [
            { 
                translateY: () => -1000, 
                opacity: 0,
                backgroundColor: '#ffdea8'     
            },
        ],
        loop: true,
        duration: () => range(6000, 10000),
        easing: "linear",
        delay: anime.stagger(70),
        complete: redoNeutral
    });
    }

    redoNeutral();
    redoPositive();
    redoNegative();
}
