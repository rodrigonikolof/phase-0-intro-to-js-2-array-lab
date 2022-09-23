// const cats = [];

// cats.push("Milo", "Otis", "Garfield");




// function destructivelyAppendCat(name) {
// cats.push(name);
// }

// function destructivelyPrependCat(name) {
// cats.unshift (name);
// }

// function destructivelyRemoveLastCat(name){
//     cats.pop();
// }

// function destructivelyRemoveFirstCat(){
//     cats.shift();
// }

// function appendCat(name){
// const copyOfCats = [...cats];
// copyOfCats.push (name);
// return copyOfCats;

// }

// function prependCat(name){
//     const copyOfCats = [...cats];
//     copyOfCats.unshift (name);
//     return copyOfCats;
// }

// function removeLastCat(name){
//     const copyOfCats = [...cats];
//     copyOfCats.pop ();
//     return copyOfCats;
// }

// function removeFirstCat(name){
//     const copyOfCats = [...cats];
//     copyOfCats.shift ();
//     return copyOfCats;
// }












const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
     cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    let moreCats = [...cats];
    moreCats.push(name);
    return moreCats;
}
function prependCat(name){
    let moreCats = [...cats];
    moreCats.unshift(name);
    return moreCats;
}
function removeLastCat(){
    let moreCats = [...cats];
    moreCats.pop();
    return moreCats; 
}
function removeFirstCat(){
    let moreCats = [...cats];
    moreCats.shift();
    return moreCats; 
}