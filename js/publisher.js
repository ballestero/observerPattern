class Publisher {
    
      constructor() {
        this.subscribers = [];
      }
   
      subscribe(newSubscriber) {
        this.subscribers.push(newSubscriber);
      }
    
      notify(event) {
        this.subscribers.forEach( item => {item.inbox.call(item, event);});
      }  
  }