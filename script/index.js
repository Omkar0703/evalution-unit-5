let click=0
let count=document.getElementById('count');
count.innerText=click;
  fetch('https://masai-api.herokuapp.com/coffee/menu')
  .then(function(response) {
    return response.json();
  }).then(function(res2){
   
    console.log(res2.menu.data)

    var menu = res2.menu.data;
    var grid = document.getElementById('grid');
    for(var i = 0; i < menu.length; i++){
      var div = document.createElement('div');
      div.setAttribute('id', 'product');
      // add title 
      
      // add image
      var image = document.createElement('img');
      image.setAttribute('src', menu[i].image);
      div.appendChild(image);
      var title = document.createElement('h1');
      // title margine -10px
      title.setAttribute('style', 'margin-top: -10px');
      title.innerHTML = menu[i].title;
      div.appendChild(title);
      // add price
      var price = document.createElement('p');
      // price margin top -10p
      price.setAttribute('style', 'margin-top: -10px');
      price.innerHTML = menu[i].price;
      div.appendChild(price);
      // add add to bucket button
      // button in center

      var button = document.createElement('button');
      button.setAttribute('id', 'add_to_bucket');
      button.innerHTML = 'Add to Bucket';
      button.addEventListener('click', function(){
      click+=1
      count.innerText=click;
      });

      div.appendChild(button);
      grid.appendChild(div);
     
    }
    // Users should be able to add the items to the bucket when clicked on add to bucket button.

  })
