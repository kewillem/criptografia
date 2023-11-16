// const inputMensagem = 
const button = document.querySelector("#button")

button.addEventListener('click', criptografar)
function criptografar() {
    const outputMensagem = document.querySelector('#outputMensagem');
    const frase =document.querySelector('#mensagem');
    let fraseCriptografada = '';
    for (let i = 0; i < frase.length; i++) {
        fraseCriptografada += frase.charCodeAt(i).toString(2) + ' '; // Adiciona um espaço entre as representações binárias
    }
    outputMensagem.value = fraseCriptografada; // Remove o espaço extra no final da string
    console.log(fraseCriptografada);
}
function descriptografar(fraseCriptografada) {
    let frase = '';
    const partes = fraseCriptografada.split(' '); // Divide a string criptografada em partes separadas por espaços
    for (let i = 0; i < partes.length; i++) {
        const caractere = String.fromCharCode(parseInt(partes[i], 2)); // Converte a representação binária em um caractere
        frase += caractere;
    }
    return frase;
}

