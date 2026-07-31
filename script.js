/* =========================================
   REALFITTY WEBSITE SCRIPT
========================================= */


/* =========================================
   PARTICLES
========================================= */


const particles = document.getElementById("particles");


for(let i = 0; i < 100; i++){

    const particle = document.createElement("span");

    particle.className = "particle";


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
   MOUSE GLOW
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
   DISCORD MEMBER COUNT
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
   TWITCH LIVE STATUS
========================================= */


const liveStatus =
document.querySelector(".live-status");


const streamInfo =
document.getElementById("streamInfo");



const TWITCH_API =

"https://96255137-d4b4-4a4d-bfb9-48c9bc152988-00-3qf4o6h0bop86.janeway.replit.dev/twitch";





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

            </p>

            `;



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
   PAGE LOAD ANIMATION
========================================= */


window.addEventListener(
"load",
()=>{


document.body.style.opacity = "1";


}

);
