import { emberekLISTA } from "./adat.js";
import { szuresNevSzerint, tablazatRendez } from "./adatkezelo.js";
import { megjelenites, tablazatOsszeallit } from "./fuggvenyek.js";

/*jelenítsük meg az adatainkat egy tábéázatban az adatok divben,
    az urlap divben pedig legyen egy űrlap, amivel ilyen adatokat tudunk a táblázatba beletenni.

1. ha a táblázat fejlécére kattuntnuk, akko razon mező szerint tudjuk rendezni a táblázatot
2. tudjuk törölni az adott sorát
3. legyen egy szűrő mező, ahova beírva szavakat tudunk szűrni név szerint. 

Milyen füfggvények kellenek?
1. tablazatOsszeallít(lista)->txt - összeállítja a html kódot szöveges formátumban, minden sor végén legyen egy kuka
2. megjelenites(txt)->nincs - megjeleníti a html szöveget egy html elemben
3. tablazatbaTesz(lista) - összeszedi az űrlapadatokat és hozzáfűzi a listához, majd megjelníti újra a táblázatot.
    Akkor hívódik meg ha a hozzáad gombra kattintunk.
4. tablazatRendez(lista) - adott mező szerint rendezi a táblázatot. akkor hívódik meg, ha a táblázat név fejlécmezőjére kattintunk.
    berendezzük a listá é smegjelenítjük újra a táblázatot.
5. sorTorles(lista, index) - minden sor végén legyen egy kuka a sor indexével, erre kattintva töröljük az adott sort a listából, 
    és újra megjelenítjük a táblázatot a módosult listával.
6. szuresNevSzerint(lista, szurtSzoveg)->szurtLista - a szürőbe írt szó alapján kilistázza azoakt az adatokat a listából, 
    amelyekben szerepel a név mezőjében az adott szó. Ezután  megjelenítjük a szűrt listát az oldalon.
    Akkor fog lefutni, amikor megváltozik a szűrőmező tartalma
*/

// szorgalmi: lehessen rendezni kor szerint is
// vagy tetszoleges mezi szerint akár!!!
// mia hiba a programban TESZTELÖS

let nevIrany=1
init(emberekLISTA)


export function init(lista){
    let txt=tablazatOsszeallit(lista)
    megjelenites(txt)
    nevRendezEsemeny(lista)
    sorTorlesEsemeny()
}


function nevRendezEsemeny(lista, ){

    //ha a táblázat név fejlécmezőjére kattintunk, berendezzük a listá é smegjelenítjük újra a táblázatot.
    const nevekElem=$(".adatok th").eq(0)   // elso fejlec th elem
    nevekElem.on("click", function(){
        const LISTA = tablazatRendez(lista, nevIrany)
        //console.log(LISTA)
        nevIrany*=(-1)
        
        init(LISTA)
    })

}

/* a szürőbe írt szó alapján kilistázza azoakt az adatokat a listából, 
    amelyekben szerepel a név mezőjében az adott szó. Ezután  megjelenítjük a szűrt listát az oldalon.
    Akkor fog lefutni, amikor megváltozik a szűrőmező tartalma */
const szuroELEM=$("#szNev")
szuroELEM.on("keyup", function(){
    let szuroSZoveg=szuroELEM.val() //value
    const LISTA = szuresNevSzerint(emberekLISTA, szuroSZoveg)
    init(LISTA)
})


function sorTorlesEsemeny(){
    const kukaELEM =$(".kuka")
    kukaELEM.on("click", function(event){
        let index=event.target.id // az aktualis kuka indexe
        const LISTA =sorTorles(emberekLISTA, index)
        init(LISTA)
    })

}