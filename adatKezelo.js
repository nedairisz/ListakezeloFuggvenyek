
//adott mező szerint rendezi a táblázatot.
export function tablazatRendez(lista, irany){
    lista.sort(function(a,b){
        /* if (a.nev>b.nev){
            return 1
        }else{
            return -1
        } */
        return a.nev.toUpperCase>b.nev? 1*irany :-1*irany
        // szorgalim: a.nev elso betujenek karakterkodja alapjan
    })
    return lista
}

/* function atalakit(szoveg){
    A-À E-È
    replaceAll()
} */

//szurtLista - a szürőbe írt szó alapján kilistázza azoakt az adatokat a listából amelyekben szerepel a név mezőjében az adott szó.
export function szuresNevSzerint(lista, szuroSZoveg){
    const SZURTLISTA=lista.filter(function(elem){
        return elem.nev.includes(szuroSZoveg)
    })
    console.log(SZURTLISTA)
    return SZURTLISTA
}


// minden sor végén legyen egy kuka a sor indexével, erre kattintva töröljük az adott sort a listából, és újra megjelenítjük a táblázatot a módosult listával.
export function sorTorles(lista, index){
    lista.splice(index, 1)
    return lista
}