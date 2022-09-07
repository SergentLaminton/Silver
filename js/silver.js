if(document.getElementById('nos_produits')) {



  //1
  let listElement = document.querySelectorAll(".list-group-item a");
  console.log(listElement);
  //4
  let Blocs = document.querySelectorAll(".bloc-produit");
  console.log(Blocs);

  // homme/femme
  let hommeFemme = document.querySelectorAll("#filtre_homme, #filtre_femme");


  //2
  for (let i = 0; i < listElement.length; i++) {
    listElement[i].addEventListener("click", function (e) {
      if(i !=0) {
      e.preventDefault();
      }
      //3
      console.log(this.textContent);

      //5
      for (let i = 0; i < Blocs.length; i++) {
        Blocs[i].getAttribute("data-categorie");

        if (Blocs[i].getAttribute("data-categorie") == this.textContent) {
          Blocs[i].style.display = "block";
        } 
        else { Blocs[i].style.display = "none";
        }
      }
    
    });
  }

  for (let i = 0; i < hommeFemme.length; i++) {
    hommeFemme[i].addEventListener("click", function (e) {

      //3
      console.log(this.textContent);
      let choix = this.textContent;

      //5
      for (let i = 0; i < Blocs.length; i++) {
        let cat = Blocs[i].getAttribute("data-categorie");

        if (choix == 'Hommes' && (cat == 'Vestes' || cat == 'Pantalons' || cat == 'Chemises')) {
          Blocs[i].style.display = "block";
        } else if (choix == 'Femmes' && (cat == 'Chaussures' || cat == ' Pantalons' || cat == 'Robes')) {
          Blocs[i].style.display = "block";
        } 
        else { Blocs[i].style.display = "none";
        }
      }
    
    });
  }

}