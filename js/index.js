/**
 * Chiedere la destinazione/ numeri km da percorrere
 */
var chilometri = parseInt(prompt('Quanti km vuoi percorrere??'));
console.log(chilometri);

/**
 * Età del passeggero
 */
var età = parseInt(prompt('Quanti anni hai?'));
console.log(età);


/**
 * Calcolare prezzo biglietto in base a:
 * 
 * 1. il prezzo del biglietto è definito in base ai km (0.21 € al km)
 * 2. va applicato uno sconto del 20% per i minorenni
 * 3. va applicato uno sconto del 40% per gli over 65.
 * 4. L'output del prezzo finale va messo a schermo in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
 */

/**
 * PREZZO BIGLIETTO STANDARD
 */
var prezzoBiglietto = 0.21 * chilometri;
console.log(prezzoBiglietto);

/**
 * SCONTO DEL 20%
 */
var scontoMinorenni = 20 * prezzoBiglietto / 100;
var scontoSenior = 40 * prezzoBiglietto / 100;

if (età <17) {
    // console.log('Hai diritto allo sconto del 20%');
    var prezzoBiglietto = prezzoBiglietto - scontoMinorenni;
    document.getElementById('prezzoFinale').innerHTML = 'Hai diritto allo sconto del 20%. Il prezzo del tuo biglietto sarà: ' + prezzoBiglietto.toFixed(2) + '€';
    // console.log(prezzoBiglietto);
} else if (età >65) {
    // console.log('Hai diritto allo sconto del 40%');
    var prezzoBiglietto = prezzoBiglietto - scontoSenior;
    document.getElementById('prezzoFinale').innerHTML = 'Hai diritto allo sconto del 40%. Il prezzo del tuo biglietto sarà: ' + prezzoBiglietto.toFixed(2) + '€';

} else {
    // console.log('Non hai diritto allo sconto.')
    document.getElementById('prezzoFinale').innerHTML = 'Non hai diritto allo sconto. Il prezzo del tuo biglietto sarà: ' + prezzoBiglietto.toFixed(2) + '€';

}