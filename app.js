window.addEventListener('load', init, false);

function init() {

      var magazine = new Publisher();
       
      var subscriber1 = new Subscriber('Mario');
      var subscriber2 = new Subscriber('Luigi');
      var subscriber3 = new Subscriber('Peach');
        

    
      console.log("--- Primera edición ---");
       
      magazine.subscribe(subscriber1);
       
      magazine.subscribe(subscriber2);
       
      magazine.notify("Nueva edicion");
       
      console.log("--- Segunda edición ---");
       
      magazine.subscribe(subscriber3); 
       
      magazine.notify("Segunda edicion"); 
       
      console.log("--- Tercera edición ---");
       
      magazine.notify("Tercera edicion");
}