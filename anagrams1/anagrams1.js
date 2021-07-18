
const button = document.getElementById("findButton");
const found = document.querySelector('.result__found')
const anagrams = document.querySelector('.result__anagrams')

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

let getAnagramsOf = (x) => {
    let palavrasEncontradas = ''
    for (let i = 0; i < palavras.length; i++){
        if (alphabetize(x) === alphabetize(palavras[i])){
            palavrasEncontradas += palavras[i] + ' '
        }
    }
    return palavrasEncontradas
}

button.addEventListener("click", function () {
    let typedText = document.getElementById("input").value;
    found.innerHTML = 'Foram encontrados os seguintes anagramas para a sua busca:'
    anagrams.innerHTML = getAnagramsOf(typedText)
  });
