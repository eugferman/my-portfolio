///// UI

      //AXIOS SIN ASYNC AWAIT
      /*
      function getBeer(){
        axios.get('https://api.punkapi.com/v2/beers/random')
        .then(response => {
        document.getElementById('beer-name').innerHTML = response.data[0].name;
        document.getElementById('first-brewed').innerHTML = response.data[0].first_brewed;
        document.getElementById('description').innerHTML = response.data[0].description;
        document.getElementById('image').setAttribute('src', response.data[0].image_url);
        })
      }
      getBeer();
      */

      //SENTENCIAS JQUERY PARA HACER FUNCIONAR LOS BOTONES
      $('#show-beer').click(() => {
        getNameBeer();
      })

      $('#hide-beer').click(() => {
        $( ".show-one-beer" ).remove();
      })

      $('#show-25-beers').click(() => {
        list25Beers();
      })

      $('#hide-25-beers').click(() => {
        $( ".array-of-beers" ).remove();
      })

      $('#show-50-beers').click(() => {
        list50Beers();
      })

      $('#hide-50-beers').click(() => {
        $( ".array-of-50-beers" ).remove();
      })

      $('#go-to-show-beers').click(() => {
        showBeerNumSelected();
        showBeerSelected();
      })

      $('#go-to-hide-beers').click(() => {
        $( ".array-of-selected-beers" ).remove();
      })

      $('#capture-beer-name').click(() => {
        searchBeerFormByName();
      })

      $('#hide-capture-beer-name').click(() => {
        $( ".beer-to-search-by-name" ).remove();
        document.getElementById('name-beer-form').value = '';
        $( ".show-one-beer" ).remove();
      })

      $('#capture-date-beer').click(() => {
        searchBeerFormByDate();
      })
      $('#hide-capture-date-beer').click(() => {
        $( ".main-array-of-beers-by-date" ).remove();
      })

      $('#capture-beer-id').click(() => {
        searchBeerFormById();
      })

      $('#hide-capture-beer-id').click(() => {
        $( ".beer-to-search-by-id" ).remove();
        document.getElementById('id-beer-form').value = '';
        $( ".show-one-beer" ).remove();
      })

      //FUNCIÓN PARA QUE NOS DE UNA CERVEZA AL AZAR
      async function getNameBeer(){
        
        const beer = await axios.get('https://api.punkapi.com/v2/beers/random');

        const title = 'One Beer Showed';
        document.getElementById('beer-name-async').innerHTML = beer.data[0].name;
        document.getElementById('first-brewed-async').innerHTML = beer.data[0].first_brewed;
        document.getElementById('description-async').innerHTML = beer.data[0].description;
        document.getElementById('image-async').setAttribute('src', beer.data[0].image_url);

        document.getElementById('beer-name-async').className = "class-beer-name";
        document.getElementById('first-brewed-async').className = "class-first-brewed";
        document.getElementById('description-async').className = "class-description";
        document.getElementById('image-async').className = "class-image";
      }

      //FUNCIÓN PARA QUE NOS DE 25 CERVEZAS POR DEFECTO
      async function list25Beers(){

        const arrayBeers = await axios.get('https://api.punkapi.com/v2/beers?page=1&page');

          for(var x = 0; x < arrayBeers.data.length ; x++){

            var nameDivBeer = 'div-beer-';
            nameDivBeer = nameDivBeer+x;
            var nodeContenedor = document.createElement("DIV");
            nodeContenedor.setAttribute('id', nameDivBeer);
            document.getElementById('array-of-beers').appendChild(nodeContenedor);

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

      //FUNCIÓN PARA QUE NOS DE LO QUE LE INDIQUEMOS EN LA URL
      async function list50Beers(){

        const arrayBeers = await axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=50');

          for(var x = 0; x < arrayBeers.data.length ; x++){

            var nameDivBeer = 'div-50-beer-';
            nameDivBeer = nameDivBeer+x;
            var nodeContenedor = document.createElement("DIV");
            nodeContenedor.setAttribute('id', nameDivBeer);
            document.getElementById('array-of-50-beers').appendChild(nodeContenedor);

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

      //FUNCIÓN PARA SACAR LAS CERVEZAS QUE QUERAMOS SEGUN EL VALOR QUE SELECCIONEMOS
      function showBeerNumSelected() {

        let beersToShow = document.getElementById('beers-to-show').value;
        document.getElementById('beers-to-be-showed').innerHTML = 'Beer to show: '+beersToShow;

        return beersToShow;

      }

      async function showBeerSelected(){

        let numToShow = showBeerNumSelected();
        let url = 'https://api.punkapi.com/v2/beers?page=1&per_page='+numToShow;
        const arrayBeers = await axios.get(url);
        for(var x = 0; x < arrayBeers.data.length ; x++){
        var nameDivNumBeer = 'div-num-beer-';
        nameDivNumBeer = nameDivNumBeer+x;
        var nodeContenedor = document.createElement("DIV");
        nodeContenedor.setAttribute('id', nameDivNumBeer);
        document.getElementById('array-of-selected-beers').appendChild(nodeContenedor);

        var nodeName = document.createElement("H4");
        var textnodeName = document.createTextNode(arrayBeers.data[x].name);
        nodeName.appendChild(textnodeName);
        document.getElementById(nameDivNumBeer).appendChild(nodeName);

        var nodeDesc = document.createElement("H6");
        var textNodeDesc = document.createTextNode(arrayBeers.data[x].description);
        nodeDesc.appendChild(textNodeDesc);
        document.getElementById(nameDivNumBeer).appendChild(nodeDesc);

        var nodeImage = document.createElement("IMG");
        nodeImage.setAttribute('src', arrayBeers.data[x].image_url );
        document.getElementById(nameDivNumBeer).appendChild(nodeImage);
        }
      }

      

      //FUNCIÓN PARA CAPTURAR EL VALOR DE LA CERVEZA QUE BUSCAMOS
      async function searchBeerFormByName() {

        let beerName = document.getElementById('name-beer-form').value;
        document.getElementById('beer-to-search-by-name').innerHTML = 'Beer to search: '+beerName;
        let url = 'https://api.punkapi.com/v2/beers?beer_name='+beerName;
        const beer = await axios.get(url);
        if(beerName === beer.data[0].name){
          document.getElementById('show-beer-by-name').innerHTML = beer.data[0].name;
          document.getElementById('show-beer-first-brewed-by-name').innerHTML = beer.data[0].first_brewed;
          document.getElementById('show-description-by-name').innerHTML = beer.data[0].description;
          document.getElementById('image-by-name').setAttribute('src', beer.data[0].image_url);

          document.getElementById('show-beer-by-name').className = "class-beer-name";
          document.getElementById('show-beer-first-brewed-by-name').className = "class-first-brewed";
          document.getElementById('show-description-by-name').className = "class-description";
          document.getElementById('image-by-name').className = "class-image";
        }
      }

      //FUNCIÓN PARA CAPTURAR EL VALOR DE LA CERVEZA QUE BUSCAMOS
      async function searchBeerFormByDate() {

        let monthBeer = document.getElementById('month-form').value;
        let yearBeer = document.getElementById('year-form').value;
        let dateBeer = monthBeer+'-'+yearBeer;
        let url = 'https://api.punkapi.com/v2/beers?brewed_before='+dateBeer;
        
        const arrayBeers = await axios.get(url);

        for(var x = 0; x < arrayBeers.data.length ; x++){

          var nameDivBeer = 'div-beer-';
          nameDivBeer = nameDivBeer+x;
          var nodeContenedor = document.createElement("DIV");
          nodeContenedor.setAttribute('id', nameDivBeer);
          document.getElementById('array-of-beers-by-date').appendChild(nodeContenedor);

          var nodeName = document.createElement("H4");
          var textnodeName = document.createTextNode(arrayBeers.data[x].name);
          nodeName.appendChild(textnodeName);
          document.getElementById(nameDivBeer).appendChild(nodeName);

          var nodeDesc = document.createElement("h6");
          var textNodeDesc = document.createTextNode(arrayBeers.data[x].description);
          nodeDesc.appendChild(textNodeDesc);
          document.getElementById(nameDivBeer).appendChild(nodeDesc);

          var nodeDesc = document.createElement("H5");
          var textNodeDesc = document.createTextNode(arrayBeers.data[x].first_brewed);
          nodeDesc.appendChild(textNodeDesc);
          document.getElementById(nameDivBeer).appendChild(nodeDesc);

          var nodeImage = document.createElement("IMG");
          nodeImage.setAttribute('src', arrayBeers.data[x].image_url );
          document.getElementById(nameDivBeer).appendChild(nodeImage);
              
          }
        
      }

      async function searchBeerFormById() {
        
        let beerId = document.getElementById('id-beer-form').value;
        document.getElementById('beer-to-search-by-id').innerHTML = 'Beer to search: '+beerId;
        let url = 'https://api.punkapi.com/v2/beers?ids='+beerId;
        const beer = await axios.get(url);
        let idParseInt = parseInt(beerId);
        if(idParseInt === beer.data[0].id){
          document.getElementById('show-beer-by-id').innerHTML = beer.data[0].name;
          document.getElementById('show-beer-first-brewed-by-id').innerHTML = beer.data[0].first_brewed;
          document.getElementById('show-description-by-id').innerHTML = beer.data[0].description;
          document.getElementById('image-by-id').setAttribute('src', beer.data[0].image_url);

          document.getElementById('show-beer-by-id').className = "class-beer-name";
          document.getElementById('show-beer-first-brewed-by-id').className = "class-first-brewed";
          document.getElementById('show-description-by-id').className = "class-description";
          document.getElementById('image-by-id').className = "class-image";
        }
      }
