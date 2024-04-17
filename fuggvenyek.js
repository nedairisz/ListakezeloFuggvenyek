
//összeállítja a html kódot szöveges formátumban, minden sor végén legyen egy kuka
export function tablazatOsszeallit(lista){
    let txt=""
    txt+="<table class='table table-striped'>"
    txt+="<tr><th>Név</th><th>Kor</th><th>Nem</th><th></th></tr>"
    lista.forEach((element,i) => {
        txt+=`<tr>`
        for (const key in element){
            // console.log("key: ", key, "akt.elem: ", element[key])
            txt+= `<td>${element[key]}</td>`
        }
        /* 
        txt+= `<td>${element.nev}</td>
                  <td>${element.kor}</td>
                  <td>${element.nem}</td>` */
        txt+= `<td id="${i}" class="kuka">🗑️</td>
              </tr>`
    });
    txt+="</table>"
    return txt
}

//megjeleníti a html szöveget egy html elemben
export function megjelenites(txt){
    const adatokElem= $(".adatok")
    adatokElem.html(txt)
}