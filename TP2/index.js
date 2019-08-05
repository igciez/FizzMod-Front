
let a = document.querySelectorAll("a");
let xhr;
let main;

main=document.querySelector("main");

for (let index = 0; index < a.length; index++) {
    a[index].addEventListener("click", (e) => {
        e.preventDefault();
        xhr = new XMLHttpRequest;

       /* xhr.addEventListener("readystatechange", () => {
            console.log(`Nuevo Estado ${xhr.readyState}`);
        }); */

        //readyState = 1
        //XHR.open(metodo String,url String)
        xhr.open("get", a[index].href);

        xhr.addEventListener("load", () => {
            if (xhr.status == 200) {                
                main.innerHTML = xhr.response;                
            }
        });        
        //XHR.send([{String|FormData|Blob}])
        xhr.send();       
    });
}



