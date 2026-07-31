// 🌌 PARTICLES

const particles =
document.getElementById("particles");


for(let i = 0; i < 80; i++){


let p =
document.createElement("span");


p.className="particle";


p.style.left =
Math.random()*100+"%";


p.style.top =
Math.random()*100+"%";


p.style.animationDelay =
Math.random()*5+"s";


particles.appendChild(p);


}






// 💬 DISCORD COUNTER


const discord =
document.querySelector(".discord-count");



const SERVER_ID =
"1532504492342378596";



async function loadDiscord(){


try{


let data =
await fetch(

`https://discord.com/api/guilds/${SERVER_ID}/widget.json`

)

.then(r=>r.json());



discord.innerHTML =
`💬 ${data.presence_count} Members Online`;



}

catch{


discord.innerHTML =
"💬 Discord Offline";


}


}


loadDiscord();






// 🔴 TWITCH STATUS


const live =
document.querySelector(".live-status");



async function checkTwitch(){


// Twitch API requires a backend token.
// This placeholder is ready for connection.


live.innerHTML =
"⚫ Currently Offline";


}



checkTwitch();
