var personnage = document.getElementById('container');
var body = document.body;




$(function() {
    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data, statuts, response) {
            data.forEach(element => {
                
                body.innerHTML = body.innerHTML + `
                
                <div class="perso">
                <img src="${element.imageUrl}" class="image_perso" alt="">
                <p class="prenom">${element.firstName}</p><p class="nom"> ${element.lastName}</p>
                <p class="titre">${element.title}</p>
            </div>`

            })
        }
    })
})
function afficherlist(list) {
    personnage.innerHTML = ""
    list.forEach(element => {
        personnage.innerHTML = personnage.innerHTML + `
            <div class="perso">
                <img src="${element.imageUrl}" class="image_perso" alt="">
                <p class="prenom">${element.firstName}</p><p class="nom"> ${element.lastName}</p>
                <p class="titre">${element.title}</p>
            </div>
        
        `
    })
}
