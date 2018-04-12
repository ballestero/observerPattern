class Subscriber {
    constructor(name) {

      this.name = name;
      console.log("Se ha creado el suscriptor: " + name);
    
    }

    inbox(edition) {

      console.log("El suscriptor " + this.name + " recibió una nueva edición: " + edition);
    
    }
  }