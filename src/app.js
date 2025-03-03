let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', '.net', '.tv', '.us']
let numOfCombinations = 0

for (let i in pronoun){
  for (let j in adj){
    for (let k in noun){
      for (let a in domain){
        console.log(`${pronoun[i]}${adj[j]}${noun[k]}${domain[a]}`)
        numOfCombinations++
      }
    }
  }
}
console.log(`The number of combinations = ${numOfCombinations}`)