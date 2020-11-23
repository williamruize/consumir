// JavaScript Document
var informacion = []
const url='https://jsonplaceholder.typicode.com/todos/1';
function obtenerinformacion(){
axios({
	method: 'GET',
	url:url, 
	responseType:'json'
	
}).then(res=>{
	console.log(res.data);
	this.informacion= res.data;
	llenarinformacion();
}).catch(error=>{
	console.error(error)});
}
obtenerinformacion();

function llenarinformacion(){
	//document.querySelector('#tablainformacion tbody').innerHTML=``;
	
	document.querySelector('#tablainformacion tbody').innerHTML+=`<tr>
	<th scope="col">${informacion.userId}</th>
      <th scope="col">${informacion.id}</th>
      <th scope="col">${informacion.title}</th>
	<th scope="col">${informacion.completed}</th>
	<th scope="col"><button type="button" onclick="eliminar(${informacion.id})">X</button></th>
	</tr>`;
	
}

function eliminar(indice){
	console.log('eliminar el elemento con ID'+ indice)
	axios({
	method: 'DELETE',
	url:url +'?id='+indice, 
	responseType:'json'
	
}).then(res=>{
	console.log(res.data);
		
}).catch(error=>{
	console.error(error)});
}