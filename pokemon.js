document.getElementById("intro").addEventListener("click", displayIntro);
document.getElementById("gen_1").addEventListener("click", displayGen1);
document.getElementById("gen_2").addEventListener("click", displayGen2);
document.getElementById("gen_3").addEventListener("click", displayGen3);
document.getElementById("gen_6").addEventListener("click", displayGen6);


function displayIntro(){
    document.getElementById("pokemon_content").innerHTML = "Welcome to the Evolution of Pokémon Game Graphics! On this website, we briefly examine the different generations and how the series has transformed its art style to captivate players over the years. Join us as we review the subtle changes that have occurred and how it has impacted players.";
    document.getElementById("banner").src="images/default.jpg";
    document.getElementById("banner").alt="The evolution of Pokémon graphics from the first-generation to the 8th";
    console.log("Gotta Catch 'Em All")
}

function displayGen1(){
    document.getElementById("pokemon_content").innerHTML = "The graphics of Pokémon Generation 1 games (Pokémon Red, Blue and Yellow) feature simplistic yet iconic pixel art. From top to bottom, the original graphics were known to be blocky and monochromatic. While the game lacked detail and colour, it made up for it with a sense of adventure and fun. As a result, the first-generation designs remain deeply nostalgic for many players worldwide.";
    document.getElementById("banner").src="images/gen1.jpg";
    document.getElementById("banner").alt="The graphics for the Pokémon game, first-generation";
    console.log("Gen1 Pokédex Complete")
}

function displayGen2(){
    document.getElementById("pokemon_content").innerHTML = "The graphics of Pokémon Generation 2 games (Pokémon Gold, Silver and Crystal) were the first in the series to incorporate colour. The Pokémon were colour-coded based on their primary types: Grass types were green, Fire types were orange and Water types were blue. Despite the limited colours, each building, character and Pokémon had its distinct palette, making it a memorable experience for its players.";
    document.getElementById("banner").src="images/gen2.jpg";
    document.getElementById("banner").alt="The graphics for the Pokémon game, second-generation";
    console.log("Gen2 Pokédex Complete")
}

function displayGen3(){
    document.getElementById("pokemon_content").innerHTML = "The graphics of Pokémon Generations 3-5 showcase the evolution of 2D-pixel designs and dynamic environments. Shadows, animation and camera angles were introduced, offering a more engaging, visually appealing and immersive experience. The combined generations marked significant advancements in user interface design, delivering a charming and increasingly cinematic adventure for players.";
    document.getElementById("banner").src="images/gen3.jpg";
    document.getElementById("banner").alt="The graphics for the Pokémon game, third-generation";
    console.log("Gen3 Pokédex Complete")
}

function displayGen6(){
    document.getElementById("pokemon_content").innerHTML = "The graphics of Pokémon Generation 6-8 highlight the transition to 3D models for its characters and landscapes. With more dynamic environments, detailed animations and versatile camera angles, the game became more engaging and immersive. Additionally, the game expanded beyond fixed adventures and dialogue, introducing characters with greater expression, relatability and depth. As technology advances and player expectations evolve, it will be exciting to see how Pokémon continues to enhance its visual designs and interface.";
    document.getElementById("banner").src="images/gen6.jpg";
    document.getElementById("banner").alt="The graphics for the Pokémon game, sixth-generation";
    console.log("Gen6 Pokédex Complete")
}

