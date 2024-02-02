function firstRecursion(n){
    if(n === 0) return;
    console.log('GFG');
    firstRecursion(n - 1)
}

firstRecursion(3)