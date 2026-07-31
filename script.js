// 🌌 PARTICLES


const particles =
document.getElementById("particles");



for(let i = 0; i < 80; i++){


let particle =
document.createElement("span");



particle.className =
"particle";



particle.style.left =
Math.random()*100+"%";



particle.style.top =
Math.random()*100+"%";



particle.style.animationDelay =
Math.random()*5+"s";



particle.style.animationDuration =
(5 + Math.random()*10)+"s";



particles.appendChild(particle);


}






// 💬 DISCORD MEMBER COUNTER


const discord =
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

throw new Error();

}



const data =
await response.json();



discord.innerHTML =

`💬 ${data.presence_count} Members Online`;



}

catch(error){


console.log(error);


discord.innerHTML =

"💬 Discord Unavailable";


}


}



loadDiscord();



setInterval(

loadDiscord,

300000

);
