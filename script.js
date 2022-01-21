function msg(){
    console.log('Trabalhando com funções em JS');
    document.querySelector('h1').innerText = "Trabalhando com funções em JS"
}
msg ();

function myName(name){
    console.log(`Meu nome é: ${name} `);
    document.querySelector('p').innerText= name
    
}
myName("Brendon")

function aboutMe(nome,idade,generoMusical){
    console.log(`Meu nome é ${nome}, tenho ${idade} e meu gosto genero musical favorito é ${generoMusical}.`)
    document.getElementById('favmusic.filme').innerText= `Meu nome é ${nome}, tenho ${idade} e meu gosto genero musical favorito é ${generoMusical}.`
}
aboutMe("Brendon", "23", "R&B")

function myFavs(film,music){
    console.log(`Meu filme favorito é ${film} e minha música favorita é ${music}`)
    document.getElementById('favmusic.filme').innerText= `Meu filme favorito é: "${film}" e minha música favorita é: "${music}"`
}
myFavs("Moonlight","Eu não tenho um barco, disse a árvore - Cícero")