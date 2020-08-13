
let tip1 = document.getElementById("card1")
let tip2= document.getElementById("card2")
let tip3 = document.getElementById("card3")
let tip4 = document.getElementById("card4")
let tip5 = document.getElementById("card5")
let tip6 = document.getElementById("card6")
let tip7 = document.getElementById("card7")
let tip8 = document.getElementById("card8")
let tip9 = document.getElementById("card9")

let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")
let img5 = document.getElementById("img5")
let img6 = document.getElementById("img6")
let img7 = document.getElementById("img7")
let img8 = document.getElementById("img8")
let img9 = document.getElementById("img9")

let opcion2 = document.getElementById("opcion2")

// funcion
const mostrar = () =>{
    img1.src = "./assets/img/fusibles.jpg"
    tip1.innerHTML = "En cada carro hay una caja de fusibles y en la tapa de esta dice para que es cada fusible, Si no encuentras tu caja de fusible probablemente este debajo del volante y en algunos casos puede estar junto a la bateria puede tener la leyenda: Power Engine..Hay automóviles que tienen  su s fusibles de repuesto e incluso herramienta para poder cambiarlos"
    img2.src = "./assets/img/fuel.jpg"
    tip2.innerHTML = " En alguno carros la bomba de combustible ya no funciona, en este caso se busca el fusible que diga fuel pump"
    img3.src =" ./assets/img/"
    tip3.innerHTML = " La falta de chispa es algo común y la chispa es indispensable para la combustión.Esa chispa la provee un transformador o bobina y ese circuito esta protegido por un fusible,cuando el fusible se quema  no hay chispa, en la tapa de fusibles hay que buscar la que dice spark."
    
    img4.src =" ./assets/img/clip.jpg"
    tip4.innerHTML =" Si cuentas con un fusible, puedes poner un clip o pedazo de cable para poder cerrar el circuito"
    img5.src =" ./assets/img/"
    tip5.innerHTML =" si ya revisaste todos los fusibles, puede que en algunos casos sea un relevador"
    img6.src =" ./assets/img/fusibles1.jpg"
    tip6.innerHTML =" El relevador puede estar junto a la bateria, antes de revisar debes de checar las terminales de la bateria que esten sujetas correctamente."
    img7.src =" ./assets/img/bateria.jpg"
    tip7.innerHTML =" si no hay arranque es posible que te hayas quedado sin bateria, si tu auto es estandar puedes enceder con un empujon."
    img8.src =" ./assets/img/preguntas.jpg"
    tip8.innerHTML =" Si tu problema aun no se soluciona da click en preguntas frecuentes, seguro encuentras una respuesta que te ayude."
    img9.src =" ./assets/img/mecanico.jpg"
     tip9.innerHTML =" Si no se soluciono tu problema puedes revisar algun mecanico de tu localidad"
     
}
opcion2.addEventListener("click", mostrar )