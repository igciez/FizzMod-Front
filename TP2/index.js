
let a = document.querySelectorAll("a");
var xhr;
let main;

for (let index = 0; index < a.length; index++) {
    a[index].addEventListener("click", (e) => {
        e.preventDefault();

        xhr = new XMLHttpRequest;

        xhr.addEventListener("readystatechange", () => {
            console.log(`Nuevo Estado ${xhr.readyState}`);
            console.log(a[index].href);

        });      

        xhr.addEventListener("load", () => {
            if (xhr.status == 200) {
                main=document.querySelector("main");
                main.innerHTML = xhr.response;
                
            }
        });
        //readyState = 1
        //XHR.open(metodo String,url String)
        xhr.open("get", a[index].href);
        //XHR.send([{String|FormData|Blob}])
        xhr.send();       
    });
}



