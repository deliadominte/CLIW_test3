let incercari=1000000;

let c=0;
let nr=0;
for(let i=0; i<incercari; i+=100000)
{
	let worker = new Worker('worker.js');
	worker.postMessage([100000]);

	worker.onmessage = event =>{
	   c=c+parseInt(event.data[1]);
	   let pi = c*4/incercari;
       document.body.innerHTML = pi;
       document.body.innerHTML += "<br>"+Math.PI;
	   console.log(c);
	}
	
}



