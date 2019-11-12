
//Create an empty array to hold the promises
//Iterate 1-150
//Make the API request which returns a promise
//Add that promise to the promises array
//Use Promise.all() to wait for all requests to finish (in parallel)
//Get access to an array of Pokemon info with the results variable

const promises = [];
for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(res => res.json()));
}

// Used a Promise.all() to run asynchronous API calls all at once. We're making all 150 requests about the same time

Promise.all(promises).then(results => {
    console.log(results);
});

const pokemon = results.map(data => ({
    name: data.name,
    id: data.id,
    type: data.type,
    image: data.sprites["front_default"],
    type: data.type.map(type => type.type.name).join(", "),

}));

var displayPokemon = pokemon => {
    const pokemon = results.map(sata => ({
        name: data.name,
        id: data.id,
        type: data.type,
        image: data.sprites["front_default"],
        type: data.type.map(type => type.type.name).join(", "),

    }));
    displayPokemon(pokemon);
};