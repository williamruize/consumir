// JavaScript Document
var informacion = [];
var actualiza ;
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
	document.querySelector('#tablainformacion tbody').innerHTML=``;
	
	document.querySelector('#tablainformacion tbody').innerHTML+=`<tr>
	<th scope="col">${informacion.userId}</th>
      <th scope="col">${informacion.id}</th>
      <th scope="col">${informacion.title}</th>
	<th scope="col">${informacion.completed}</th>
	<th scope="col"><button type="button" onclick="eliminar(${informacion.id})">X</button>
<button type="button" onclick="editar(${informacion.id})">Editar</button></th>
	</tr>`;
	
}

function eliminar(indice){
	console.log('eliminar el elemento con ID'+ indice)
	axios({
	method: 'DELETE',
	url:url +'?id='+indice, 
	responseType:'json',
	
}).then(res=>{
	console.log(res.data);
	obtenerinformacion();	
}).catch(error=>{
	console.error(error)});
}
function guardar(){
	let informacion={
		userId: document.getElementById('userId').value,
		id: document.getElementById('id').value,
		title: document.getElementById('title').value,
		completed: document.getElementById('completed').value,
	}
	console.log ('informacion a guardar ', informacion)
axios({
	method: 'POST',
	url:url, 
	responseType:'json',
	data:informacion
}).then(res=>{
	console.log(res);
	limpiar();
	llenarinformacion();
}).catch(error=>{
	console.error(error);
});
}
function limpiar(){
	
	document.getElementById('userId').value=null;
	document.getElementById('id').value=null;
	document.getElementById('title').value=null;
	document.getElementById('completed').value=null;
	document.getElementById('btn_guardar').style.display='inline';
	document.getElementById('btn_actualizar').style.display='none';
	}
function Actualizar(){
	
		let informacion={
		userId: document.getElementById('userId').value,
		id: document.getElementById('id').value,
		title: document.getElementById('title').value,
		completed: document.getElementById('completed').value,
	}
	console.log ('informacion a actualizar ', informacion)
axios({
	method: 'PUT',
	url:url, 
	responseType:'json',
	data:informacion
}).then(res=>{
	console.log(res);
	limpiar();
	llenarinformacion();
}).catch(error=>{
	console.error(error);
});
	}	
function editar(indice){
	actualiza= indice ;
		console.log('Se selecciono '+indice)
	axios({
	method: 'GET',
	url:url, 
	responseType:'json'
	
}).then(res=>{
	console.log(res.data);
	document.getElementById('userId').value=res.data.userId;
	document.getElementById('id').value=res.data.id;
	document.getElementById('title').value=res.data.title;
	document.getElementById('completed').value=res.data.completed;
	document.getElementById('btn_guardar').style.display='none';
	document.getElementById('btn_actualizar').style.display='inline';	
}).catch(error=>{
	console.error(error)});
}
			
		