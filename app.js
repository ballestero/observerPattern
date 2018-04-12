window.addEventListener('load', init, false);

function init() {

      var magazine = new Publisher();

      var btnSubcriber= document.getElementById('btnSubscriber');

      var btnPublish= document.getElementById('btnPublish');


      btnSubcriber.addEventListener("click",function(){
            var nameSubscriber = document.getElementById('nameSubscriber').value;
            console.log(nameSubscriber);
            var newSubscriber = new Subscriber(nameSubscriber);
            magazine.subscribe(newSubscriber);

            var tbody = document.getElementById('subscriberList'),
                tr = document.createElement('tr'),
                td = document.createElement('td');

            tbody.appendChild(tr);
            tr.appendChild(td);
            td.innerHTML = nameSubscriber;

      });

      btnPublish.addEventListener("click",function(){
            var publishedEdition = document.getElementById('edition').value;
            console.log(publishedEdition);
            magazine.notify(publishedEdition);
      });



      
}
