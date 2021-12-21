
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empledo',
  //template:"<p>Aqui iria un empleado</p>",
  templateUrl: './empledo.component.html',
  styleUrls: ['./empledo.component.css']
  //styles:["p{background-color:yellow;}"]
})
export class EmpledoComponent implements OnInit {

  nombre="Elio";
  apellido="Cordova";
  edad= 8;
  empresa="Elio";

habilitacionCuadro=false;

usuRegistrado=false;
testtoDeRegistro="No hay nada registrado";

//
cambiarEmpresa(event:Event)
{
this.empresa=(<HTMLInputElement>event.target).value;

}


getRegistroUsuario(){

  this.usuRegistrado=false;
}

setusuarioRegistrado(event:Event){

//alert("El usuario se acaba de regitraar")

//this.testtoDeRegistro="El usuario se acaba de registrar"

//alert(event.target)

if((<HTMLInputElement>event.target).value=="Si"){
this.testtoDeRegistro="El usuario se acaba de registrar"

}else{

  this.testtoDeRegistro="No hay nadie registrado"
}




}
  //empresa="Mi empresa";
 
  /*getEdad(){

    return this.edad;
  }*/

  /*llamaEmpresa(value:String){

  }*/

  constructor() { }

  ngOnInit(): void {
  }

}
