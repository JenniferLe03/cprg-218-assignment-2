document.getElementById("intro").addEventListener("click", displayIntro);
document.getElementById("gen_1").addEventListener("click", displayGen1);
document.getElementById("gen_2").addEventListener("click", displayGen2);
document.getElementById("gen_3").addEventListener("click", displayGen3);
document.getElementById("gen_6").addEventListener("click", displayGen6);


function displayIntro(){
    document.getElementById("pokemon_content").innerHTML = "Welcome to the Evolution of Pokemon Game Graphics! On this website, we briefly examine the different generations and how the series has transformed its art style to captivate players over the years. Join us as we review the subtle changes that have occurred and how it has impacted players.";
    document.getElementById("banner").src="images/default.jpg";
    document.getElementById("banner").alt="The evolution of Pokemon graphics from the first-generation to the 8th";
    console.log("Intro complete")
}

function displayGen1(){
    document.getElementById("pokemon_content").innerHTML = "The graphics of Pokemon Generation 1 games (Pokemon Red, Blue and Yellow) feature simplistic yet iconic pixel art. From top to bottom, the original graphics were known to be blocky and monochromatic. While the game lacked detail and colour, it made up for it with a sense of adventure and fun. As a result, the first-generation designs remain deeply nostalgic for many players worldwide.";
    document.getElementById("banner").src="images/gen1.jpg";
    document.getElementById("banner").alt="The graphics for the Pokemon game, first-generation";
    console.log("Gen1 complete")
}

function displayGen2(){
    document.getElementById("pokemon_content").innerHTML = "The graphics of Pokemon Generation 2 games (Pokemon Gold, Silver and Crystal) were the first in the series to incorporate colour. The Pokemon were colour-coded based on their primary types: Grass types were green, Fire types were orange and Water types were blue. Despite the limited colours, each building, character and Pokemon had its distinct palette, making it a memorable experience for its players.";
    document.getElementById("banner").src="images/gen2.jpg";
    document.getElementById("banner").alt="The graphics for the Pokemon game, second-generation";
    console.log("Gen2 complete")
}

function displayGen3(){
    document.getElementById("pokemon_content").innerHTML = "The graphics of Pokemon Generations 3-5 showcase the evolution of 2D-pixel designs and dynamic environments. Shadows, animation and camera angles were introduced, offering a more engaging, visually appealing and immersive experience. The combined generations marked significant advancements in user interface design, delivering a charming and increasingly cinematic adventure for players.";
    document.getElementById("banner").src="images/gen3.jpg";
    document.getElementById("banner").alt="The graphics for the Pokemon game, third-generation";
    console.log("Gen3 complete")
}

function displayGen6(){
    document.getElementById("pokemon_content").innerHTML = "The graphics of Pokemon Generation 6-8 highlight the transition to 3D models for its characters and landscapes. With more dynamic environments, detailed animations and versatile camera angles, the game became more engaging and immersive. Additionally, the game expanded beyond fixed adventures and dialogue, introducing characters with greater expression, relatability and depth. As technology advances and player expectations evolve, it will be exciting to see how Pokemon continues to enhance its visual designs and interface.";
    document.getElementById("banner").src="images/gen6.jpg";
    document.getElementById("banner").alt="The graphics for the Pokemon game, sixth-generation";
    console.log("Gen6 complete")
}

