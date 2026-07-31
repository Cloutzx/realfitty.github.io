// =====================================
// 🌌 MOVING PARTICLES
// =====================================

const particles = document.getElementById("particles");


for (let i = 0; i < 80; i++) {

    const particle = document.createElement("span");

    particle.className = "particle";


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.top =
        Math.random() * 100 + "%";


    particle.style.animationDelay =
        Math.random() * 5 + "s";


    particle.style.animationDuration =
        (5 + Math.random() * 10) + "s";


    particles.appendChild(particle);

}





// =====================================
// 💬 DISCORD MEMBER COUNT
// =====================================

const discordCount =
document.querySelector(".discord-count");


const SERVER_ID =
"1532504492342378596";



async function loadDiscord(){

    try{

        const response = await fetch(
            `https://discord.com/api/guilds/${SERVER_ID}/widget.json`
        );


        if(!response.ok){
            throw new Error("Discord unavailable");
        }


        const data =
        await response.json();



        discordCount.innerHTML =
        `💬 ${data.presence_count} Members Online`;


    }

    catch(error){

        console.log(error);


        discordCount.innerHTML =
        "💬 Discord Offline";

    }

}



loadDiscord();


setInterval(
    loadDiscord,
    300000
);







// =====================================
// 🔴 TWITCH LIVE STATUS
// =====================================


const liveStatus =
document.querySelector(".live-status");



const TWITCH_API =

"https://96255137-d4b4-4a4d-bfb9-48c9bc152988-00-3qf4o6h0bop86.janeway.replit.dev/twitch";





async function checkTwitch(){


    try{


        const response =
        await fetch(TWITCH_API);



        const data =
        await response.json();




        if(data.live){



            liveStatus.innerHTML = `

            🔴 LIVE NOW<br><br>

            🎮 ${data.game}<br>

            👥 ${data.viewers} viewers<br><br>

            ${data.title}

            `;



        }

        else{


            liveStatus.innerHTML =

            "⚫ Currently Offline";


        }



    }


    catch(error){


        console.log(error);


        liveStatus.innerHTML =

        "⚠️ Twitch Status Error";


    }


}




checkTwitch();



setInterval(

    checkTwitch,

    60000

);
