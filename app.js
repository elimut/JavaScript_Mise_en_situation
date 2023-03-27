/*1: au chargement de la page, changez la couleur de fond de la page index.html*/
function backgroundRand(){
            document.body.style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+","+ Math.floor(Math.random()*256)+","+ Math.floor(Math.random()*256)+")";
}
/*2 :au chargement de la page, insérez un <li>Lorem</li> à la fin d'une liste*/
function listeLo(){
    let listeLorem = document.createElement("li");
    listeLorem.setAttribute("class", "item")
    listeLorem.innerText = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";
    document.getElementById("liste").appendChild(listeLorem);
}
window.addEventListener("DOMContentLoaded", (event) => {
    backgroundRand();
    listeLo();
/*3: Au clic sur le bouton 1, supprimez le dernier <li> dans la liste 1.*/
    // const effacer = document.getElementById("liste")
    // let listeDernier = effacer.lastElementChild;
    // document.querySelectorAll("#bouton1").forEach(element => {
    //     element.addEventListener("click", (event) => {
    //         listeDernier.style.visibility = "hidden";
    //         // listeDernier.removeChild(listeDernier.lastChild);
    //     });
    document.querySelectorAll("#bouton1").forEach(element => {
        element.addEventListener("click", (event) => {
            let menu = document.getElementById('liste');
            menu.removeChild(menu.lastElementChild);
        });
    });
});
/*4: Au clic sur le bouton 2, repliez la liste 2*/
//document.querySelectorAll("#bouton2").forEach(element => {
//     element.addEventListener("click", (event) => {
//         var deroulant = document.getElementById("ul");
//         deroulant.classList.toggle("reveal");
//     });
// });

/*5: Au clic sur le bouton 3, ajoutez une classe CSS au bouton 1 pour qu'il récupère une marge supérieure
supplémentaire.*/
document.querySelectorAll("#bouton3").forEach(element => {
    element.addEventListener("click", (event) => {
        var margeSuperieure = document.getElementById("bouton1");
        margeSuperieure.classList.toggle("active1");
    });
});
/*6: Au clic sur le bouton 4, changez de classe CSS pour qu'il change de couleur*/
document.querySelectorAll("#bouton4").forEach(element => {
    element.addEventListener("click", (event) => {
        var backMaj = document.getElementById("bouton4");
        backMaj.classList.toggle("active2");
    });
});
/*7 Au clic sur le bouton 5, chargez l'image “background.jpg” en image de fond sur la section
#section-1.*/
document.querySelectorAll("#bouton5").forEach(element => {
    element.addEventListener("click", (event) => {
        var sectionBG = document.getElementById("section1");
        // sectionBG.style.backgroundImage = "url(/img/background.jpg)";
        sectionBG.classList.toggle("BG");
    });
});
/*8 Au survol du bouton 6, changez la couleur de tous les boutons en vert.*/
var mosaique = document.querySelectorAll("button");
var changer = document.querySelector("#bouton6");
console.log(mosaique)
changer.addEventListener("mouseover", () => {
        Object.values(mosaique).map(el => {
        el.style.backgroundColor = 'green';
        // prend toutes les valeurs de l'obj mosaique pour en faire un tableau
    });    
});
changer.addEventListener("mouseout", () => {
    Object.values(mosaique).map(el => {
        el.style.backgroundColor = 'blueviolet';
        // prend toutes les valeurs de l'obj mosaique pour en faire un tableau
    });     
});
/*9: Annulez le clic sur le bouton 7 et changez sa
couleur lors d'un double clic*/
document.querySelectorAll("#bouton7").forEach(element => {
    element.addEventListener("dblclick", (event) => {
        var bouton7 = document.getElementById("bouton7");
        bouton7.classList.toggle("pink");
    });
});
/*10: Au clic sur le bouton 8, faites disparaître/apparaître tous les <h2> de la page*/
const bouton8 = document.getElementById("bouton8");
const potter = document.querySelectorAll("h2");
bouton8.addEventListener("click", () => {
    potter.forEach((element) => {
        element.classList.toggle("harry");
    });
});
/*1 Dans la #section-2, affichez une horloge dynamique au format suivant : HH:MM:SS où HH = heures, MM =minutes et SS = secondes, en nombre*/
let heuresDiv = document.querySelector('.heures');
let dateDiv = document.querySelector('.date');

let affichageHeure = function(){
    // Déclaration des variables qui seront utilisées : 
    var today, heures, minutes, secondes, deuxChiffres;
   // Récupérer la date actuelle : 
   today = new Date();
    //Afficher les heures, minutes et secondes toujours avec deux chiffres : 
    deuxChiffres = function(element){
        if(element < 10){
            return element = "0" + element;
        } else {
            return element;
        }
    }
    // Récupérer les heures : 
    heures = deuxChiffres(today.getHours());
    // Récupérer les minutes : 
    minutes = deuxChiffres(today.getMinutes());
    // Récupérer les secondes : 
    secondes = deuxChiffres(today.getSeconds());
    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
    // Lancer la fonction affichage heure toutes les 1000 ms, soit toute les secondes : 
    setTimeout(affichageHeure, 1000);
}
//Lancer la fonction une fois au début : 
affichageHeure();

/*A l'aide du formulaire #formulaire-title, utilisez javascript pour remplacer le contenu du <h1> de la
page par le contenu du champ texte du formulaire*/
let inputValue = "";
let affichage = document.createElement("form");
let affichage1 = document.createElement("input");

affichage1.setAttribute("type","text");
affichage1.setAttribute("id", "formulaire-title")
affichage.appendChild(affichage1);
document.body.appendChild(affichage);
let titre = document.querySelector("h1");
affichage.addEventListener("submit",e=>{
    e.preventDefault();
    inputValue = affichage1.value;
    titre.innerHTML = inputValue;
});





/*reste : 
4: Au clic sur le bouton 2, repliez la liste 2
*/


