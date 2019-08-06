
/**--------------------TP3: FETCH Y PROMISE--------
 * Tabla de valores retornados:
 * -----------------------------
 * fetch()          =>         Promise
 * Promise          =>         Promise.then().catch()
 * fetch()          =>         Response
 * Response         =>         Response.metodo() *
 * .fn(()=>{Promise}) =>       .fn(()=>{ return Promise})
 * .fn(()=>{Promise,Promise}) =>   .fn(()=>{ return Promise.all([Promise,Promise]) })
 *---------
 * Nota:
 *---------
 * "Promise.all" --> devuelve una nueva Promise y recibe un arrray.
 * "fecth()", devuelve una Promise (then y catch),a traves de una respuesta dentro del then.
 * La respuesta tiene metodos*.
 * Si hay una "Promise" dentro de una funcion esta debe devolverse con un "return".
 * (recordar que un nuevo "fecth" equivale a una nueva "Promise")
 * Si hay mas de una "Promise" dentro de una funcion, 
 * esta debe devolverse con un array dentro de "Promise.all".
 * -----------------------------------------
 * (*)metodos : text / arrayBuffer / blob / json -->en que formato se devuelve la respuesta
 *  
 */

let a = document.querySelectorAll("a");
let main= document.querySelector("main");

a.forEach((aux)=>{
    aux.addEventListener("click", (e)=>{
        e.preventDefault();
        fetch(aux.href)
        .then(respuesta=>respuesta.text())
        .then(respuesta=>main.innerHTML=respuesta)
        .catch(console.error);
    });    
});