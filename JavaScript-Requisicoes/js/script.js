// Aula 2 - O que é JSON
// let pessoa = {nome:"Vitor", idade:20, estetica: {altura:900, peso:10}};

// console.log(pessoa.estetica.peso);


// Aula 3 - JSON parse
// let pessoa = JSON.parse('{"nome": "vitor", "idade": 20}');


// Aula 4 - JSON stringify
// JSON.stringify({nome: 'Vitor', idade: 90});

// let pessoa = {nome: 'Vitor', idade: 90, algo: null};

// let pessoaString = JSON.stringify(pessoa);

// console.log(pessoa);

// let busca = {input: 'bon'};

// buscaString = JSON.stringify(busca);

//  console.log(busca);

// let resultado = {
//     lista: [
//         'vitor',
//         'vitor silva',
//         'bonito'
//     ]
// };

// JSON.stringify(resultado);

// let res = '{"lista":["vitor", "silva", "bonito"]}';

// let resJson = JSON.parse(res);

// console.log(resJson);


// Aula 5 - Código síncrono vs assíncrono
// Código Síncrono
// let nome = 'vitor';
// let sobrenome = 'silva';
// let completo = nome+' '+sobrenome;

// Código Assíncrono
// let nome = 'vitor';
// let sobrenome = 'silva';
// let temperatura = Maquininha.pegarTemperatura(); // Assíncrona
// let completo = nome+' '+sobrenome;


// Aula 6 - Callbacks
//CALLBACK
// I'm gonna call you back = Eu te ligo de volta

// function alertar() {
//     console.log("Opa, tudo bem?");
// }

// let nome = 'Vitor';
// setTimeout(alertar, 2000);
// let sobrenome = 'Silva';
// console.log("NOME COMPLETO = "+nome+' '+sobrenome);


// Aula 7 - Promises
// function pegarTemperatura() {
//     return new Promise(function(resolve, reject) {
//         console.log("Pegando temperatura...");

//         setTimeout(function() {
//             resolve('40 na sombra');
//         }, 2000);
//     });
// }

// USANDO A PROMISE
// console.log("Código antes!")

// let temp = pegarTemperatura();

// console.log("Código durante")

// temp.then(function(resultado) {
//     console.log("TEMPERATURA "+resultado);
// });
// temp.catch(function(error) {
//     console.log("Eita, deu erro");
// });
// console.log("Código depois!")


// Aula 8 - Fetch 1
// function loadPosts() {
//     document.getElementById("posts").innerHTML = "Carregando...";


//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(function(resultado) {
//             return resultado.json();
//         })
//         .then(function(json) {
//             document.getElementById("posts").innerHTML = json.length+' posts';
//         })
//         .catch(function(error) {
//             console.log("Deu problema!");
//         });
// }


// Aula 9 - Fetch 2
// function loadPosts() {
//     document.getElementById("posts").innerHTML = "Carregando...";


//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(function(resultado) {
//             return resultado.json();
//         })
//         .then(function(json) {
//             montarBlog(json);
//         })
//         .catch(function(error) {
//             console.log("Deu problema!");
//         });
// }

// function montarBlog(lista) {
//     let html = '';

//     for(let i in lista) {
//         html += '<h3>'+lista[i].title+'</h3>';
//         html += lista[i].body+'<br/>';
//         html += '<hr/>';
//     }

//     document.getElementById("posts").innerHTML = html;
// }

// Aula 10 - Async e Await
// async function loadPosts() {
//     document.getElementById("posts").innerHTML = "Carregando...";

//     let req = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let json = await req.json();

//     montarBlog(json);


//      fetch('https://jsonplaceholder.typicode.com/posts')
//          .then(function(resultado) {
//              return resultado.json();
//          })
//          .then(function(json) {
//              montarBlog(json);
//          })
//          .catch(function(error) {
//              console.log("Deu problema!");
//          });
// }

// function montarBlog(lista) {
//     let html = '';

//     for(let i in lista) {
//         html += '<h3>'+lista[i].title+'</h3>';
//         html += lista[i].body+'<br/>';
//         html += '<hr/>';
//     }

//     document.getElementById("posts").innerHTML = html;
// }


// Aula 11 - Fetch com POST
// async function inserirPost() {
//     document.getElementById("posts").innerHTML = "Carregando...";

//     let req = await fetch('http://jsonplaceholder.typicode.com/posts', {
//         method: 'GET',
//         body: JSON.stringify({
//             title: 'Título de teste',
//             body: 'Corpo de teste',
//             userId: 4
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }

//     });
//     let json = await req.json();

//     console.log(json);

// }


// Aula 12 - Upload de arquivos com JS
// async function enviar() {
//     let arquivo = document.getElementById('arquivo').files[0];

//     let body = new FormData();
//     body.append('title', 'Bla bla bla');
//     body.append('arquivo', arquivo);
    
//     let req = await fetch('https://www.meusite.com.br/upload', {
//         method: 'POST',
//         body: body,
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         }
//     });
// }


// Aula 13 - Thumbnails com JS
// function mostrar() {
//     let imagem = document.getElementById("imagem").files[0];

//     let img = document.createElement('img');
//     img.src = URL.createObjectURL(imagem);
//     img.width = 200;

//     document.getElementById("area").appendChild(img);
// }


// Aula 14 - Thumbnails com FileReader
function mostrar() {
    let reader = new FileReader();
    let imagem = document.getElementById('imagem').files[0];

    reader.onloadend = function() {
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;

        document.getElementById('area').appendChild(img);
    }

    reader.readAsDataURL(imagem);
}