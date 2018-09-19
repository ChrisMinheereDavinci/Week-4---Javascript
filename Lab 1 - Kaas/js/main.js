alert("VRAGEN BEANDWOORDEN MET ja OF nee");

var gelekaas = prompt("Is de kaas geel?");
var gaten
var blauweschimmel



if(gelekaas == 'ja'){
    console.log('geel dus he! zeg je');
    gaten = prompt("Zitten er gaten in?");

} else if(gelekaas == 'nee'){
    console.log('niet geel? Welke kleur dan wel?');
    blauweschimmel = prompt("heeft de kaas blauwe schimmels?");
}

var duur
var steen

if(gaten == 'ja'){
    console.log('met gaten dus! MMmmm');
    duur = prompt("Is de kaas belachelijk duur?");
    
} else if(gaten == 'nee'){
    console.log('Geen gaten dus!');
    steen = prompt("Is de kaas hard als steen?");
}

var KorstJa
var KorstNee

if(blauweschimmel == 'ja'){
    console.log('blauw? wat zeg je me nouw');
    KorstJa = prompt("Heeft de kaas een Korst?");
} else if(blauweschimmel == 'nee'){
    console.log('niet blauw? dat is raar!');
    KorstNee = prompt("Heeft de kaas een Korst?");
}

var Camembert
var Mozzarella

if(KorstNee == 'ja'){
    console.log('met een korst, aparte keuze');
    Camembert = document.write("Uw keuze is de Camembert kaas.");
} else if(KorstNee == 'nee'){
    console.log('ik vind die korst ook vies hoor');
    Mozzarella = document.write("Uw keuze is de Mozzarella kaas.");
}

var Rochbaron
var Foume

if(KorstJa == "ja"){
    console.log('lekker zn korst');
    Rochbaron = document.write("Uw keuze is de Bleu de Rochbaron kaas.");
} else if(KorstJa == "nee") {
    console.log('ik vind die korst ook vies hoor');
    Foume = document.write("Uw keuze is de Foume d'Ambert kaas.");
}

var emmenthaler
var leerdammer

if(duur == 'ja'){
    console.log('dat is duur zeg');
    emmenthaler = document.write("Uw keuze is de Emmenthaler kaas.");
} else if(duur == 'nee') {
    console.log('ik zou ook geen duure kaas willen hoor');
    leerdammer = document.write("Uw keuze is de Leerdammer kaas.");
}

var pammigiano
var goudsekaas

if(steen == 'ja'){
    console.log('lekker zn harde kaas');
    pammigiano = document.write("Uw keuze is de Pammigiano Reggiano kaas.");
} else if(steen == 'nee') {
    console.log('ik vind zn harde kaas ook vies');
    goudsekaas = document.write("Uw keuze is de Goudse kaas.");
}