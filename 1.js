var tabla="<tabla><tr><td>Se ve</td></tr></tabla>"
var estilo="<style>table,td {border-collapse: collapse;border: 5px solid red;color: blue;}</style>"

function crearTabla()
{
	resultado.innerHTML=estilo+tabla;
}

function sumar (n1,n2)
{
	var res=parseInt(n1)+parseInt(n2);
	resultadosuma.innerHTML=estilo+"<table><tr><td>"+n1+"</td><td>"+n2+"</td><td>"+res+"</td></tr></table>"
}

function cambiarTamano()
{
	imagen.width=100;
	imagen.height=100;
}
function redondearBordes()
{
	imagen.style="border-radius: 30px"
}

function cambiarAnchoAlto()
{
	imagen.width=ancho.value;
	imagen.height=alto.value;
}