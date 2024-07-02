function damage(characterToDamage, amount) {
    characterToDamage.life -= amount;
    return characterToDamage.life;
}
var result = damage({ life: 100 }, 12);
var element = document.getElementById("myResult");
// Vérifier que l'élément existe
if (element) {
    // Afficher le nombre dans l'élément
    element.textContent = result.toString();
}
console.log(result);
