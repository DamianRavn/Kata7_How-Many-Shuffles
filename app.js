function shuffleCount(deckSize)
{
    const originalDeck = ([...Array(deckSize).keys()].map(x => ++x)); //The map makes sure we start from 1
    let shuffledDeck = shuffleDeck(originalDeck);
    let count = 1;
    let same = false;

    while(!same)
    {
        shuffledDeck = shuffleDeck(shuffledDeck);
        count++;
        same = compareArrays(originalDeck, shuffledDeck);
    }
    return count;
}
function shuffleDeck(deck)
{
    const half = Math.ceil(deck.length / 2);    

    const result = [];
    for (let i = 0; i < half; i++) 
    {
        result.push(deck[i]); 
        result.push(deck[i+half]);
    }
    return result;
}

function compareArrays(arr1, arr2)
{
    if(arr1.length != arr2.length) return false;

    var i = arr1.length;
    while (i--) 
    {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true
}

console.log(shuffleCount(8));

console.log(shuffleCount(14));

console.log(shuffleCount(52));