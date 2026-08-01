/* =========================================
   REALFITTY WEBSITE SCRIPT
========================================= */


/* =========================================
   PARTICLES
========================================= */


const particles =
document.getElementById("particles");



for(let i = 0; i < 100; i++){


    const particle =
    document.createElement("span");



    particle.className =
    "particle";



    particle.style.left =
    Math.random() * 100 + "%";



    particle.style.top =
    Math.random() * 100 + "%";



    particle.style.animationDelay =
    Math.random() * 8 + "s";



    particle.style.animationDuration =
    (6 + Math.random() * 12) + "s";



    const size =
    2 + Math.random() * 5;



    particle.style.width =
    size + "px";



    particle.style.height =
    size + "px";



    particles.appendChild(particle);


}





/* =========================================
   CURSOR GLOW
========================================= */


const cursorGlow =
document.getElementById("cursorGlow");



document.addEventListener(
"mousemove",
(e)=>{


    cursorGlow.style.left =
    e.clientX + "px";



    cursorGlow.style.top =
    e.clientY + "px";


});







/* =========================================
   DISCORD STATUS
========================================= */


const discordCount =
document.querySelector(".discord-count");



const SERVER_ID =
"1532504492342378596";



async function loadDiscord(){


    try{


        const response =
        await fetch(

        `https://discord.com/api/guilds/${SERVER_ID}/widget.json`

        );



        if(!response.ok){

            throw new Error(
            "Discord unavailable"
            );

        }



        const data =
        await response.json();



        discordCount.innerHTML =


        `

        💬 ${data.presence_count}

        Members Online

        `;



    }


    catch(error){


        console.log(error);



        discordCount.innerHTML =


        `

        💬 Discord Offline

        `;


    }


}




loadDiscord();



setInterval(

    loadDiscord,

    300000

);

/* =========================================
   TWITCH LIVE SYSTEM
========================================= */


const liveStatus =
document.querySelector(".live-status");



const streamInfo =
document.getElementById("streamInfo");



const twitchEmbed =
document.getElementById("twitch-embed");



const TWITCH_API =

"https://realfitty-twitch-api.onrender.com/twitch";



let twitchLoaded = false;





function loadTwitchPlayer(){


    if(twitchLoaded)
    return;



    twitchLoaded = true;



    const script =
    document.createElement("script");



    script.src =
    "https://player.twitch.tv/js/embed/v1.js";



    script.onload = ()=>{


        new Twitch.Player(

            "twitch-embed",

            {

                width:"100%",

                height:480,

                channel:"fittyknowsball",

                autoplay:true,

                muted:false,

            }

        );


    };



    document.body.appendChild(script);


}







function removeTwitchPlayer(){


    twitchLoaded = false;



    if(twitchEmbed){


        twitchEmbed.innerHTML = "";


    }


}







async function checkTwitch(){



    try{



        const response =

        await fetch(TWITCH_API);



        const data =

        await response.json();






        if(data.live){



            liveStatus.classList.add(
            "live"
            );



            liveStatus.innerHTML =


            `

            🔴 LIVE NOW

            `;





            streamInfo.innerHTML =


            `

            <h3>

            🎮 ${data.game}

            </h3>


            <br>


            <p>

            👥 ${data.viewers}

            viewers

            </p>


            <br>


            <p>

            ${data.title}

            </p>


            `;






            loadTwitchPlayer();





        }

        else{



            liveStatus.classList.remove(
            "live"
            );



            liveStatus.innerHTML =


            `

            ⚫ Currently Offline

            `;





            streamInfo.innerHTML =


            `

            <p>

            RealFitty is currently offline.

            Check back during the next stream!

            </p>


            `;





            removeTwitchPlayer();


        }




    }



    catch(error){



        console.log(

        "Twitch Error:",

        error

        );



        liveStatus.innerHTML =


        `

        ⚠️ Twitch Error

        `;



        streamInfo.innerHTML =


        `

        <p>

        Unable to load stream data.

        </p>

        `;


    }


}





checkTwitch();



setInterval(

checkTwitch,

60000

);

/* =========================================
   SCROLL REVEAL
========================================= */


const observer =

new IntersectionObserver(

(entries)=>{


    entries.forEach(

    (entry)=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
            "show"
            );


        }


    });


},


{

    threshold:.15

}


);






document

.querySelectorAll(".fade")

.forEach(

(section)=>{


    observer.observe(section);


}

);







/* =========================================
   BUTTON RIPPLE EFFECT
========================================= */


document

.querySelectorAll(".btn")

.forEach(

(button)=>{


    button.addEventListener(

    "click",

    function(e){



        const ripple =
        document.createElement("span");



        ripple.style.position =
        "absolute";



        ripple.style.width =
        "20px";



        ripple.style.height =
        "20px";



        ripple.style.background =
        "rgba(255,255,255,.5)";



        ripple.style.borderRadius =
        "50%";



        ripple.style.transform =
        "translate(-50%,-50%)";



        ripple.style.pointerEvents =
        "none";



        ripple.style.left =
        e.offsetX + "px";



        ripple.style.top =
        e.offsetY + "px";



        ripple.style.animation =
        "ripple .6s linear";



        this.appendChild(ripple);



        setTimeout(()=>{


            ripple.remove();


        },600);



    });


});







/* =========================================
   PAGE LOAD FADE
========================================= */


window.addEventListener(

"load",

()=>{


    document.body.style.opacity =
    "1";


}

);







/* =========================================
   SMOOTH CARD TILT
========================================= */


document

.querySelectorAll(".card, .hero-card")

.forEach(

(card)=>{


card.addEventListener(

"mousemove",

(e)=>{


    const rect =
    card.getBoundingClientRect();



    const x =
    e.clientX - rect.left;



    const y =
    e.clientY - rect.top;



    const centerX =
    rect.width / 2;



    const centerY =
    rect.height / 2;



    const rotateX =
    (y-centerY)/25;



    const rotateY =
    (centerX-x)/25;



    card.style.transform =

    `

    perspective(1000px)

    rotateX(${rotateX}deg)

    rotateY(${rotateY}deg)

    translateY(-5px)

    `;


});





card.addEventListener(

"mouseleave",

()=>{


    card.style.transform =
    "";


});


});







/* =========================================
   RIPPLE ANIMATION STYLE
========================================= */


const style =
document.createElement("style");



style.innerHTML =


`

@keyframes ripple{


from{

transform:
translate(-50%,-50%)
scale(1);

opacity:1;

}



to{

transform:
translate(-50%,-50%)
scale(15);

opacity:0;

}


}

`;



document.head.appendChild(style);
