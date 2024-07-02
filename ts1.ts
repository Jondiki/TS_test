function damage(characterToDamage : {life : number}, amount: number):number{
    characterToDamage.life -= amount;
    return characterToDamage.life;
}
const result: number = damage({ life: 100 }, 12);

    const  element  = document.getElementById("myResult");
    
    // Vérifier que l'élément existe
    if (element) {
        // Afficher le nombre dans l'élément
        element.textContent = result.toString();
    }
console.log(result);



