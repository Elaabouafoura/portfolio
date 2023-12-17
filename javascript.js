document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('myForm');
    form.addEventListener('submit', function (event) {
       
        event.preventDefault();

        
        var nom = document.getElementById('nom').value;
        var prenom = document.getElementById('prenom').value;
        var email = document.getElementById('email').value;
        var numTel = document.getElementById('numTel').value;
        var appreciationOui = document.getElementById('oui').checked;
        var appreciationNon = document.getElementById('non').checked;
		var robot= document.getElementById('robot').checked;

        
        if (nom.trim() === '' || prenom.trim() === '' || email.trim() === '' || numTel.trim() === '') {
            alert('Veuillez remplir tous les champs.');
            return;
        }
        var lettersOnly = /^[a-zA-Z]+$/;

        if (!nom.match(lettersOnly) || nom.length < 3) {
            alert('Veuillez saisir un nom contenant au moins 3 lettres et ne contient pas des chiffres.');
            return;
		}
        if (!prenom.match(lettersOnly) || prenom.length < 3) {
            alert('Veuillez saisir un prenom contenant au moins 3 lettres et ne contient pas des chiffres.');
            return;
		}
        if (!/^\d{8}$/.test(numTel)) {
            alert('Le numéro de téléphone doit contenir exactement 8 chiffres.');
            return;
        }

        
        if (!(appreciationOui || appreciationNon)) {
            alert('Veuillez sélectionner une option pour l\'appréciation.');
            return;
        }
        
        if (!robot) {
            alert('Veuillez cocher la case a cocher.');
            return;
        }
     
        alert('Formulaire soumis avec succès !');
        form.reset();
    });
});
