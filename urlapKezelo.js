import { init } from "./main.js"

// összegyűjti az űrlapról az adatokat és beleteszi a listába, ha rákattintunk a hozzáad gombra
export function adatokFelvListaba(lista){
    // összegyűjti az űrlapról az adatokat
    let adat={
        nev: "",
        kor:0,
        nem:true
    }
     
    const submitELEM =$("#submit")

    //beleteszi a listába, ha rákattintunk a hozzáad gombra
    submitELEM.on("click",function(event){

        // submit gombról levesszük az alapértelmezett esemlnykezelőt
        event.preventDefault()

        // megfogjuk az űrlap mezőket  
        const nevELEM=$("#nev")
        const korELEM=$("#kor")
        const nemELEM=$("input [name='nem']:checked")
        adat={
            nev:nevELEM.val(),
            kor:korELEM.val(),
            nem:nemELEM.val()==="false"?false:true
        }
        const valisELEMEK = $(".valid-feedback")
        console.log(valisELEMEK.eq(0).css("display"))

        if (valisELEMEK.eq(0).css("display")==="block" && valisELEMEK.eq(0).css("display"))

        console.log(adat)
        lista.push(adat)
        console.log(lista)
        init(lista)
    })
}