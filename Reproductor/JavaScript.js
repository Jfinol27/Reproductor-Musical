var jsMusic=[
{
    "title": "Chala Head Chala",
    "singer": "Ricardo Silva",
    "fecha": "2013",
    "path": "music/Chala_Head_Chala.mp3",
    "foto": "Images/chala.jpg"
},
{
    "title": "Vivo",
    "singer": "Guaco",
    "fecha": "2012",
    "path": "music/Vivo.mp3",
    "foto": "Images/guaco.jpeg"
},
{
  "title": "Rosas",
  "singer": "Oreja de Van Gogh",
  "fecha": "2003",
  "path": "music/Rosas.mp3",
  "foto": "Images/Rosas_-_La_Oreja_de_Van_Gogh.jpeg"
}, 

{
  "title": "Mii Channel Music",
  "singer": "Nintendo",
  "fecha": "2006",
  "path": "music/Mii Chanel.mp3",
  "foto": "Images/Mii Channel Soundtrack.png"
}


];



function getList() {
    var output = "";
    var data = jsMusic;

    for (var i in data) {
      console.log(data[i])

      output += "<tr>"+
        "<td>"+ data[i].title +"</td>"+
        "<td>"+
          "<button class='btnMusic' onclick='playMusic("+ JSON.stringify(data[i]) +")'> Reproducir </button>"+
        "</td>"+
      "</tr>";
    }

    document.querySelector("tbody").innerHTML = output;
}



function playMusic(music) {
    var player = document.getElementById("audioPlayer");

    document.querySelector(".titulo").innerHTML = music.title;
    document.querySelector(".artista").innerHTML = music.singer;
    document.querySelector(".fecha").innerHTML=music.fecha;
  
    var fotoElement = document.querySelector(".foto");fotoElement.innerHTML = ""; 

  var imgElement = document.createElement("img");
  imgElement.src = music.foto;
  imgElement.alt = music.title;
  fotoElement.appendChild(imgElement);
  

    player.src = music.path;
    player.play();

}

console.log(jsMusic);


var currentIndex = 0;
var player = document.getElementById("audioPlayer");

player.addEventListener("ended", function() {
  const nextIndex = (currentIndex + 1) % jsMusic.length;
  const nextSource = jsMusic[nextIndex].path;

  const titulo = document.querySelector(".titulo");
  const artista = document.querySelector(".artista");
  const fecha = document.querySelector(".fecha");
  const foto = document.querySelector(".foto img");

  titulo.textContent = jsMusic[nextIndex].title;
  artista.textContent = jsMusic[nextIndex].singer;
  fecha.textContent = jsMusic[nextIndex].fecha;
  foto.src = jsMusic[nextIndex].foto;

  player.src = nextSource;
  player.play();


  currentIndex = nextIndex;
});

nextbutton.addEventListener("click", function() {
  const currentSource = player.src;
  const nextIndex = (currentIndex + 1) % jsMusic.length;
  const nextSource = jsMusic[nextIndex].path;


  const titulo = document.querySelector(".titulo");
  const artista = document.querySelector(".artista");
  const fecha = document.querySelector(".fecha");
  const foto = document.querySelector(".foto img");

  titulo.textContent = jsMusic[nextIndex].title;
  artista.textContent = jsMusic[nextIndex].singer;
  fecha.textContent = jsMusic[nextIndex].fecha;
  foto.src = jsMusic[nextIndex].foto;

  player.src = nextSource;
  player.play();


  currentIndex = nextIndex;
});

prevbutton.addEventListener("click", function() {
  const currentSource = player.src;
  const previousIndex = (currentIndex - 1 + jsMusic.length) % jsMusic.length;
  const previousSource = jsMusic[previousIndex].path;


  const titulo = document.querySelector(".titulo");
  const artista = document.querySelector(".artista");
  const fecha = document.querySelector(".fecha");
  const foto = document.querySelector(".foto img");

  titulo.textContent = jsMusic[previousIndex].title;
  artista.textContent = jsMusic[previousIndex].singer;
  fecha.textContent = jsMusic[previousIndex].fecha;
  foto.src = jsMusic[previousIndex].foto;

  player.src = previousSource;
  player.play();


  currentIndex = previousIndex;
});


var player = document.getElementById("audioPlayer");
var repeatButton = document.getElementById("repeatButton");

player.addEventListener("ended", function() {
  player.currentTime = 0;
  player.play();
});

repeatButton.addEventListener("click", function() {
  player.currentTime = 0;
  player.play();
});

var form = document.querySelector('form');
var commentsList = document.querySelector('.historial');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var comment = document.getElementById('comment').value;


  var newComment = document.createElement('div');
  newComment.classList.add('comment');
  newComment.innerHTML = '<h3>' + name + '</h3><p>' + comment + '</p>';

  commentsList.appendChild(newComment);

  document.getElementById('name').value = '';
  document.getElementById('comment').value = '';
});


