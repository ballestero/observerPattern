class Subscriber {
    constructor(name) {

      this.name = name;
      this.tbody=document.getElementById('notify');
      this.tr=document.createElement('tr');
      this.td=document.createElement('td');
      console.log("Se ha creado el suscriptor: " + name);
    
    }

    inbox(edition) {

            this.tbody.appendChild(this.tr);
            this.tr.appendChild(this.td);
            this.td.innerHTML = "El suscriptor " + this.name + " recibió una nueva edición: " + edition;

    
    }
  }