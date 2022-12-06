// l programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


//recupero elemento in pagina  
const moneyElement = document.getElementById("money");

//chiederre l'età all'utente    
const userAge = parseInt(prompt("Quanti anni hai?" , 28).trim());
console.log(userAge);

//chiedere all'utente quanti km deve percorrere 
const userDistance = parseInt(prompt("Quanti km devi percorrere?" , 50).trim());
console.log(userDistance);


//calcola il prezzo del biglietto
const userPrice = (0.21 * userDistance);
console.log(userPrice);

//stabilire sconto del 20%
let discountSmall = ((userPrice * 20) / 100 )
console.log(discountSmall);

//stabilire sconto del 40%
let discountBig = ((userPrice * 40) / 100)
console.log(discountBig);
 

//se è under 18...
if (isNaN (userAge) || isNaN (userDistance)) {
    document.getElementById("money").innerText = "HAI INSERITO CARATTERI INVALIDI. RIPROVA";
 }
else if (userAge < 18){
    moneyElement.innerText = "il prezzo del tuo biglietto è di €" + (userPrice - discountSmall).toFixed(2)
}else if (userAge >= 65){
    moneyElement.innerText = "il prezzo del tuo biglietto è di €" + (userPrice - discountBig).toFixed(2) }
else { moneyElement.innerText = "il prezzo del tuo biglietto è di €" + userPrice.toFixed(2)};
