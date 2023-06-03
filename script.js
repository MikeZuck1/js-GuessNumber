let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => { 
    return Math.floor(Math.random() * 10);    
}; 

/** À UTILISER =>  appel à la fonction  
 * const target = generateTarget();
    console.log(target); 
 */ 
 

/**
* La fonction compareGuesses() prend trois paramètres : 
* userGuess (la supposition de l'utilisateur),   
* computerGuess (la supposition de l'ordinateur) et targetNumber 
* (le numéro cible secret à deviner).  
*/ 
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    // Math.abs retourne la valeur absolue 
    const userDifference = Math.abs(targetNumber - userGuess);   
    const computerDifference = Math.abs(targetNumber - computerGuess);  

    if (userDifference <= computerDifference) { 
        return true; // le jouer humain gagne 
    } else {  
        return false; // l'ordinateur gagne  
    } 
};   

const updateScore = winner => {  
    if (winner === 'human') {
      humanScore++; 
    } else if (winner === 'computer') {
      computerScore++;
    }  
  };   
  
/**
 * updateScore('human');
    console.log(humanScore); // Affiche : 1

    updateScore('computer');
    console.log(computerScore); // Affiche : 1
 */

// Cette fonction augmente la valeur de currentRoundNumberde 1. 
const advanceRound = () => {
    currentRoundNumber++; 
};   

/**
 // Exemple d'utilisation de la fonction advanceRound()
console.log(currentRoundNumber); // Affiche : 1 

advanceRound();
console.log(currentRoundNumber); // Affiche : 2

advanceRound();
console.log(currentRoundNumber); // Affiche : 3

 */