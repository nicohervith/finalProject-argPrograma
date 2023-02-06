export class persona {
  id?: number;
  nombre: String;
  apellido: String;
  img: String;

  constructor(nombre: String, apellido: String, img: String) {
    
    //Inicializo, el id no se pone porque es autogenerado
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
  }
}
