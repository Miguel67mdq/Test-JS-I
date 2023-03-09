// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  let mujer = {
    usuario: "Mujer",
    nombre: "Mariangeles",
    email: "kenaa@example.com",
    password: "123456",
  }
  class Usuario {
    constructor(opciones) {
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
    }
    saludar() {
      console.log(`Hola, mi nombre es  ${this.nombre}`);
    }
  }
}
  let nuevoUsuario = new Usuario(mujer);
  nuevoUsuario.saludar();


function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
    Constructor.prototype.saludar = function () {
      return `Hello World!`;
    }
}


function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  // Tu código:

 /* String.prototype.reverse = function () {
    let palabra = this.length;
	let cadena = "";
	while (palabra>=0) {
		cadena = cadena + this.charAt(palabra);
		palabra--;
	}
	return cadena;
	
}


let palabra = new String("Hola");
console.log(palabra.reverse());*/
}

// ---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: { 
//   Nombre: 'Juan',
//   Apellido: 'Perez',
//   Edad: 22,
//   Domicilio: 'Saavedra 123'
//  }
//Escribir el constructor aquí:
class Persona {
  constructor(nombre, apellido, edad, domicilio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
    this.detalle = function () {
      return {
        Nombre:this.nombre,
        Apellido:this.apellido,
        Edad : this.edad,
        Domincilio:this.domicilio,
    }
  }
}
}
let detallePersona = new Persona("Juan", "Perez", 22,"Saavedra 123");
console.log(detallePersona.detalle());


function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  //Tu código:
  const NuevaPersona = new Persona(nombre, apellido, edad, domicilio);
  return NuevaPersona;

}
crearInstanciaPersona("Juan", "Perez", 22,"Saavedra 123");

function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  //Tu código:
  Persona.prototype.datos = function () {
    return `${this.nombre}, ${this.edad} años`;
  }

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo,
  Persona
};
