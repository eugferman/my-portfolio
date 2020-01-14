//SENTENCIAS JQUERY PARA HACER FUNCIONAR LOS BOTONES
$('#show-beer-pagination-1').click(() => {
    beerPaginationP1();
  })
  
  $('#show-beer-pagination-2').click(() => {
    document.getElementById('main-beer-pagination-p1').innerHTML = '';
    beerPaginationP2();
  })
  
  $('#show-beer-pagination-3').click(() => {
    document.getElementById('main-beer-pagination-p2').innerHTML = '';
    beerPaginationP3();
  })
  $('#show-beer-pagination-4').click(() => {
    document.getElementById('main-beer-pagination-p3').innerHTML = '';
    beerPaginationP4();
  })
  $('#show-beer-pagination-5').click(() => {
    document.getElementById('main-beer-pagination-p4').innerHTML = '';
    beerPaginationP5();
  })
  
  
  
  async function beerPaginationP1(){
      const arrayBeers = await axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=80');
          for(var x = 0; x < arrayBeers.data.length ; x++){
  
          var nameDivBeer = 'div-pagination-beer-p1-';
          nameDivBeer = nameDivBeer+x;
          var nodeContenedor = document.createElement("DIV");
          nodeContenedor.setAttribute('id', nameDivBeer);
          document.getElementById('beer-pagination-p1').appendChild(nodeContenedor);
  
          var nodeName = document.createElement("H4");
          var textnodeName = document.createTextNode(arrayBeers.data[x].name);
          nodeName.appendChild(textnodeName);
          document.getElementById(nameDivBeer).appendChild(nodeName);
  
          var nodeDesc = document.createElement("H6");
          var textNodeDesc = document.createTextNode(arrayBeers.data[x].description);
          nodeDesc.appendChild(textNodeDesc);
          document.getElementById(nameDivBeer).appendChild(nodeDesc);
  
          var nodeImage = document.createElement("IMG");
          nodeImage.setAttribute('src', arrayBeers.data[x].image_url );
          document.getElementById(nameDivBeer).appendChild(nodeImage);
               
        }
      
    }
  
    async function beerPaginationP2(){
      const arrayBeers = await axios.get('https://api.punkapi.com/v2/beers?page=2&per_page=80');
          for(var x = 0; x < arrayBeers.data.length ; x++){
  
          var nameDivBeer = 'div-pagination-beer-p2-';
          nameDivBeer = nameDivBeer+x;
          var nodeContenedor = document.createElement("DIV");
          nodeContenedor.setAttribute('id', nameDivBeer);
          document.getElementById('beer-pagination-p2').appendChild(nodeContenedor);
  
          var nodeName = document.createElement("H4");
          var textnodeName = document.createTextNode(arrayBeers.data[x].name);
          nodeName.appendChild(textnodeName);
          document.getElementById(nameDivBeer).appendChild(nodeName);
  
          var nodeDesc = document.createElement("H6");
          var textNodeDesc = document.createTextNode(arrayBeers.data[x].description);
          nodeDesc.appendChild(textNodeDesc);
          document.getElementById(nameDivBeer).appendChild(nodeDesc);
  
          var nodeImage = document.createElement("IMG");
          nodeImage.setAttribute('src', arrayBeers.data[x].image_url );
          document.getElementById(nameDivBeer).appendChild(nodeImage);
               
        }
      
    }
  
    async function beerPaginationP3(){
      const arrayBeers = await axios.get('https://api.punkapi.com/v2/beers?page=3&per_page=80');
          for(var x = 0; x < arrayBeers.data.length ; x++){
  
          var nameDivBeer = 'div-pagination-beer-p3-';
          nameDivBeer = nameDivBeer+x;
          var nodeContenedor = document.createElement("DIV");
          nodeContenedor.setAttribute('id', nameDivBeer);
          document.getElementById('beer-pagination-p3').appendChild(nodeContenedor);
  
          var nodeName = document.createElement("H4");
          var textnodeName = document.createTextNode(arrayBeers.data[x].name);
          nodeName.appendChild(textnodeName);
          document.getElementById(nameDivBeer).appendChild(nodeName);
  
          var nodeDesc = document.createElement("H6");
          var textNodeDesc = document.createTextNode(arrayBeers.data[x].description);
          nodeDesc.appendChild(textNodeDesc);
          document.getElementById(nameDivBeer).appendChild(nodeDesc);
  
          var nodeImage = document.createElement("IMG");
          nodeImage.setAttribute('src', arrayBeers.data[x].image_url );
          document.getElementById(nameDivBeer).appendChild(nodeImage);
               
        }
      
    }
  
    async function beerPaginationP4(){
      const arrayBeers = await axios.get('https://api.punkapi.com/v2/beers?page=4&per_page=80');
          for(var x = 0; x < arrayBeers.data.length ; x++){
  
          var nameDivBeer = 'div-pagination-beer-p4-';
          nameDivBeer = nameDivBeer+x;
          var nodeContenedor = document.createElement("DIV");
          nodeContenedor.setAttribute('id', nameDivBeer);
          document.getElementById('beer-pagination-p4').appendChild(nodeContenedor);
  
          var nodeName = document.createElement("H4");
          var textnodeName = document.createTextNode(arrayBeers.data[x].name);
          nodeName.appendChild(textnodeName);
          document.getElementById(nameDivBeer).appendChild(nodeName);
  
          var nodeDesc = document.createElement("H6");
          var textNodeDesc = document.createTextNode(arrayBeers.data[x].description);
          nodeDesc.appendChild(textNodeDesc);
          document.getElementById(nameDivBeer).appendChild(nodeDesc);
  
          var nodeImage = document.createElement("IMG");
          nodeImage.setAttribute('src', arrayBeers.data[x].image_url );
          document.getElementById(nameDivBeer).appendChild(nodeImage);
               
        }
      
    }
  
    async function beerPaginationP5(){
      const arrayBeers = await axios.get('https://api.punkapi.com/v2/beers?page=5&per_page=80');
          for(var x = 0; x < arrayBeers.data.length ; x++){
  
          var nameDivBeer = 'div-pagination-beer-p5-';
          nameDivBeer = nameDivBeer+x;
          var nodeContenedor = document.createElement("DIV");
          nodeContenedor.setAttribute('id', nameDivBeer);
          document.getElementById('beer-pagination-p5').appendChild(nodeContenedor);
  
          var nodeName = document.createElement("H4");
          var textnodeName = document.createTextNode(arrayBeers.data[x].name);
          nodeName.appendChild(textnodeName);
          document.getElementById(nameDivBeer).appendChild(nodeName);
  
          var nodeDesc = document.createElement("H6");
          var textNodeDesc = document.createTextNode(arrayBeers.data[x].description);
          nodeDesc.appendChild(textNodeDesc);
          document.getElementById(nameDivBeer).appendChild(nodeDesc);
  
          var nodeImage = document.createElement("IMG");
          nodeImage.setAttribute('src', arrayBeers.data[x].image_url );
          document.getElementById(nameDivBeer).appendChild(nodeImage);
               
        }
      
    }