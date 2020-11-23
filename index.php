<!doctype html>
<html>
<head>
<meta charset="utf-8">
	
<title>Consumer</title>
</head>

<body>
	
	
	    
	    <div>"userId"<input id="userId"  type="number"></div>
	    <div>"Id"<input  id="id" type="number"></div>
		<div>"title"<input id="title"  type="text"></div>
	    <div>"completed"<input id="completed"  type="text"></div>
	 
	<button type="button" id="btn_guardar" onclick="guardar()">Guardar</button>
	<button type="button" id="btn_actualizar" onclick="Actualizar()"  style="display:none">Actualizar</button>
	<button type="button" onclick="limpiar()">Limpiar</button>
	
	
	<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
	<script src="js/controlador.js"></script>

	
<table id="tablainformacion" width="200" border="1">
  <thead>
    <tr>
      <th scope="col">UserId</th>
      <th scope="col">ID </th>
      <th scope="col">Title </th>
      <th scope="col">Completed</th>
	<th scope="col">Acciones</th>
    </tr>
	</thead>
    <tbody>
  </tbody>
</table>

		

</body>
</html>