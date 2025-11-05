const halloweenQuestions = [
  { sual: "Which spirit is said to return during Halloween night?", cavablar: ["Ghost", "Fairy", "Elf", "Goblin"], duzgun: "Ghost" },
  { sual: "What plant is associated with Halloween traditions?", cavablar: ["Pumpkin", "Sunflower", "Rose", "Cactus"], duzgun: "Pumpkin" },
  { sual: "Which creature is known for rising from the grave?", cavablar: ["Zombie", "Vampire", "Witch", "Cat"], duzgun: "Zombie" },
  { sual: "Which scary film is set on Halloween night?", cavablar: ["Halloween", "Jaws", "E.T.", "Frozen"], duzgun: "Halloween" },
  { sual: "Which candy is shaped like kernels of corn?", cavablar: ["Candy corn", "Gummy bears", "Lollipops", "Chocolate bars"], duzgun: "Candy corn" },
  { sual: "What color combination is most associated with Halloween?", cavablar: ["Orange and black", "Red and white", "Green and purple", "Blue and yellow"], duzgun: "Orange and black" },
  { sual: "What do people traditionally carve for Halloween?", cavablar: ["Pumpkin", "Apple", "Watermelon", "Coconut"], duzgun: "Pumpkin" },
  { sual: "Which animal is often linked to witches?", cavablar: ["Cat", "Dog", "Owl", "Bat"], duzgun: "Cat" },
  { sual: "What do children say when collecting candy?", cavablar: ["Trick or treat!", "Give me candy!", "Boo!", "Happy Halloween!"], duzgun: "Trick or treat!" },
  { sual: "Which month is Halloween celebrated?", cavablar: ["October", "November", "September", "December"], duzgun: "October" },
  { sual: "What day is Halloween celebrated on?", cavablar: ["October 31", "November 1", "October 30", "October 29"], duzgun: "October 31" },
  { sual: "What vegetable was originally used before pumpkins for lanterns?", cavablar: ["Turnip", "Potato", "Apple", "Cabbage"], duzgun: "Turnip" },
  { sual: "Who is said to fly on a broomstick?", cavablar: ["Witch", "Ghost", "Mummy", "Skeleton"], duzgun: "Witch" },
  { sual: "What does a vampire drink?", cavablar: ["Blood", "Juice", "Water", "Wine"], duzgun: "Blood" },
  { sual: "Which monster is afraid of silver?", cavablar: ["Werewolf", "Vampire", "Ghost", "Zombie"], duzgun: "Werewolf" },
  { sual: "What item do you wear to disguise yourself on Halloween?", cavablar: ["Costume", "Uniform", "Cape", "Jacket"], duzgun: "Costume" },
  { sual: "What bird is often seen as a bad omen?", cavablar: ["Crow", "Parrot", "Pigeon", "Owl"], duzgun: "Crow" },
  { sual: "What do bats use to see in the dark?", cavablar: ["Echolocation", "Night vision", "Magic", "Light"], duzgun: "Echolocation" },
  { sual: "What color cat is considered unlucky?", cavablar: ["Black", "White", "Orange", "Gray"], duzgun: "Black" },
  { sual: "What spooky sound does a ghost make?", cavablar: ["Boo!", "Meow!", "Woof!", "Ah!"], duzgun: "Boo!" },
  { sual: "What creature sucks blood at night?", cavablar: ["Vampire", "Werewolf", "Zombie", "Spider"], duzgun: "Vampire" },
  { sual: "Which famous magician died on Halloween?", cavablar: ["Harry Houdini", "David Copperfield", "Criss Angel", "David Blaine"], duzgun: "Harry Houdini" },
  { sual: "What is another name for Halloween?", cavablar: ["All Hallows' Eve", "Harvest Day", "Pumpkin Night", "Spirit Day"], duzgun: "All Hallows' Eve" },
  { sual: "What do spiders spin?", cavablar: ["Webs", "Nests", "Cocoons", "Traps"], duzgun: "Webs" },
  { sual: "What is a group of witches called?", cavablar: ["Coven", "Flock", "Pack", "Clan"], duzgun: "Coven" },
  { sual: "What’s the name of Dracula’s home?", cavablar: ["Transylvania", "London", "Paris", "Rome"], duzgun: "Transylvania" },
  { sual: "What fruit do you bob for on Halloween?", cavablar: ["Apples", "Oranges", "Pears", "Bananas"], duzgun: "Apples" },
  { sual: "Which ghost haunts Hamlet?", cavablar: ["His father", "His friend", "His enemy", "A stranger"], duzgun: "His father" },
  { sual: "What is the name of Frankenstein’s assistant?", cavablar: ["Igor", "Hugo", "Ivan", "Eric"], duzgun: "Igor" },
  { sual: "What do skeletons have but no flesh?", cavablar: ["Bones", "Teeth", "Blood", "Skin"], duzgun: "Bones" },
  { sual: "What shape are witch hats?", cavablar: ["Cone", "Square", "Round", "Flat"], duzgun: "Cone" },
  { sual: "What is said to happen if a black cat crosses your path?", cavablar: ["Bad luck", "Good luck", "Nothing", "Riches"], duzgun: "Bad luck" },
  { sual: "What is Dracula’s title?", cavablar: ["Count", "Lord", "Sir", "King"], duzgun: "Count" },
  { sual: "What do mummies wrap themselves in?", cavablar: ["Bandages", "Paper", "Cloth", "Silk"], duzgun: "Bandages" },
  { sual: "What do you light inside a pumpkin?", cavablar: ["Candle", "Lamp", "Flashlight", "Torch"], duzgun: "Candle" },
  { sual: "What country started Halloween?", cavablar: ["Ireland", "USA", "England", "France"], duzgun: "Ireland" },
  { sual: "What is the main symbol of Halloween?", cavablar: ["Jack-o'-lantern", "Bat", "Ghost", "Spider"], duzgun: "Jack-o'-lantern" },
  { sual: "Which movie features Michael Myers?", cavablar: ["Halloween", "Scream", "The Shining", "It"], duzgun: "Halloween" },
  { sual: "Which color is NOT typical for Halloween?", cavablar: ["Blue", "Orange", "Black", "Purple"], duzgun: "Blue" },
  { sual: "What is a vampire afraid of?", cavablar: ["Sunlight", "Water", "Silver", "Mirrors"], duzgun: "Sunlight" },
  { sual: "What do you call a ghost that helps people?", cavablar: ["Friendly ghost", "Scary ghost", "Evil spirit", "Watcher"], duzgun: "Friendly ghost" },
  { sual: "What night comes after Halloween?", cavablar: ["All Saints’ Day", "Thanksgiving", "New Year’s Eve", "Easter"], duzgun: "All Saints’ Day" },
  { sual: "Which bone protects your brain?", cavablar: ["Skull", "Spine", "Rib", "Leg bone"], duzgun: "Skull" },
  { sual: "What animal do vampires sometimes turn into?", cavablar: ["Bat", "Wolf", "Cat", "Crow"], duzgun: "Bat" },
  { sual: "What is another word for a ghost?", cavablar: ["Spirit", "Shadow", "Monster", "Phantom"], duzgun: "Spirit" },
  { sual: "Which monster is made from body parts?", cavablar: ["Frankenstein", "Zombie", "Vampire", "Mummy"], duzgun: "Frankenstein" },
  { sual: "What sense do zombies lack?", cavablar: ["Smell", "Taste", "Reason", "Touch"], duzgun: "Reason" },
  { sual: "Which Halloween figure laughs wickedly?", cavablar: ["Witch", "Mummy", "Skeleton", "Cat"], duzgun: "Witch" },
  { sual: "What’s the word for fear of Halloween?", cavablar: ["Samhainophobia", "Claustrophobia", "Arachnophobia", "Nyctophobia"], duzgun: "Samhainophobia" },
  { sual: "Which animal says 'hoo' at night?", cavablar: ["Owl", "Bat", "Cat", "Fox"], duzgun: "Owl" },
  { sual: "What do people wear on their faces on Halloween?", cavablar: ["Masks", "Glasses", "Crowns", "Hats"], duzgun: "Masks" }
];


const geographyQuestions = [
  { sual: "What is the capital of France?", cavablar: ["Paris", "London", "Berlin", "Madrid"], duzgun: "Paris" },
  { sual: "Which is the largest continent?", cavablar: ["Asia", "Africa", "Europe", "Australia"], duzgun: "Asia" },
  { sual: "Which ocean is the biggest?", cavablar: ["Pacific", "Atlantic", "Indian", "Arctic"], duzgun: "Pacific" },
  { sual: "What is the longest river in the world?", cavablar: ["Nile", "Amazon", "Yangtze", "Mississippi"], duzgun: "Nile" },
  { sual: "Which country has the largest population?", cavablar: ["China", "India", "USA", "Indonesia"], duzgun: "China" },
  
];

const historyQuestions = [
  { sual: "Who was the first President of the United States?", cavablar: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], duzgun: "George Washington" },
  { sual: "In which year did World War II end?", cavablar: ["1945", "1939", "1918", "1963"], duzgun: "1945" },
  { sual: "Which empire was ruled by Julius Caesar?", cavablar: ["Roman Empire", "Ottoman Empire", "British Empire", "Persian Empire"], duzgun: "Roman Empire" },
  { sual: "When did the French Revolution begin?", cavablar: ["1789", "1776", "1804", "1799"], duzgun: "1789" },
  { sual: "Who discovered America in 1492?", cavablar: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Marco Polo"], duzgun: "Christopher Columbus" },
];

const movieQuestions = [
  { sual: "Who directed the movie 'Inception'?", cavablar: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Quentin Tarantino"], duzgun: "Christopher Nolan" },
  { sual: "Which movie won the Oscar for Best Picture in 2020?", cavablar: ["Joker", "Parasite", "1917", "Once Upon a Time in Hollywood"], duzgun: "Parasite" },
  { sual: "Who played Jack in the movie 'Titanic'?", cavablar: ["Leonardo DiCaprio", "Brad Pitt", "Tom Hanks", "Johnny Depp"], duzgun: "Leonardo DiCaprio" },
  { sual: "What is the name of the toy cowboy in 'Toy Story'?", cavablar: ["Woody", "Buzz Lightyear", "Andy", "Jessie"], duzgun: "Woody" },
  { sual: "Who is the main villain in 'Star Wars'?", cavablar: ["Darth Vader", "Luke Skywalker", "Han Solo", "Yoda"], duzgun: "Darth Vader" },
];

// =================================================================================================================

const halloweenQuestionsAze = [
  { sual: "Hansı ruhun Halloween gecəsi geri qayıtdığı deyilir?", cavablar: ["Ruh", "Pəri", "Cin", "Qoblin"], duzgun: "Ruh" },
  { sual: "Halloween ənənələri ilə hansı bitki əlaqələndirilir?", cavablar: ["Balqabaq", "Günəbaxan", "Gül", "Kaktus"], duzgun: "Balqabaq" },
  { sual: "Hansı məxluq qəbirdən qalxması ilə tanınır?", cavablar: ["Zombi", "Vampir", "Cadugər", "Pişik"], duzgun: "Zombi" },
  { sual: "Hansı qorxulu film Halloween gecəsində baş verir?", cavablar: ["Halloween", "Cəngəllik Dişi", "E.T.", "Soyuq Ürək"], duzgun: "Halloween" },
  { sual: "Hansı konfet qarğıdalı dənəsi formasındadır?", cavablar: ["Qarğıdalı konfet", "Jele ayılar", "Konfet çubuğu", "Şokolad plitəsi"], duzgun: "Qarğıdalı konfet" },
];

const geographyQuestionsAze = [
  { sual: "Fransanın paytaxtı haradır?", cavablar: ["Paris", "London", "Berlin", "Madrid"], duzgun: "Paris" },
  { sual: "Ən böyük qitə hansıdır?", cavablar: ["Asiya", "Afrika", "Avropa", "Avstraliya"], duzgun: "Asiya" },
  { sual: "Ən böyük okean hansıdır?", cavablar: ["Sakit okean", "Atlantik okean", "Hind okeanı", "Arktika okeanı"], duzgun: "Sakit okean" },
  { sual: "Dünyanın ən uzun çayı hansıdır?", cavablar: ["Nil", "Amazon", "Yanszi", "Missisipi"], duzgun: "Nil" },
  { sual: "Ən çox əhaliyə malik ölkə hansıdır?", cavablar: ["Çin", "Hindistan", "ABŞ", "İndoneziya"], duzgun: "Çin" },
  
];

const historyQuestionsAze = [
  { sual: "ABŞ-ın ilk prezidenti kim idi?", cavablar: ["Corc Vaşinqton", "Abraham Linkoln", "Tomas Cefferson", "Con Adams"], duzgun: "Corc Vaşinqton" },
  { sual: "İkinci Dünya Müharibəsi hansı ildə başa çatdı?", cavablar: ["1945", "1939", "1918", "1963"], duzgun: "1945" },
  { sual: "Yuli Sezar hansı imperiyanı idarə edirdi?", cavablar: ["Roma İmperiyası", "Osmanlı İmperiyası", "Britaniya İmperiyası", "Fars İmperiyası"], duzgun: "Roma İmperiyası" },
  { sual: "Fransız İnqilabı nə vaxt başlamışdır?", cavablar: ["1789", "1776", "1804", "1799"], duzgun: "1789" },
  { sual: "Amerikanı 1492-ci ildə kim kəşf etdi?", cavablar: ["Kristofor Kolumb", "Vasko da Qama", "Ferdinand Magellan", "Marko Polo"], duzgun: "Kristofor Kolumb" },
];

const movieQuestionsAze = [
  { sual: "'Başlanğıc' (Inception) filmini kim rejissorluq edib?", cavablar: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Quentin Tarantino"], duzgun: "Christopher Nolan" },
  { sual: "2020-ci ildə 'Ən Yaxşı Film' üzrə Oskar mükafatını hansı film qazandı?", cavablar: ["Joker", "Parazit (Parasite)", "1917", "Bir Zamanlar Hollivudda"], duzgun: "Parazit (Parasite)" },
  { sual: "'Titanik' filmində Cek obrazını kim canlandırıb?", cavablar: ["Leonardo DiCaprio", "Brad Pitt", "Tom Hanks", "Johnny Depp"], duzgun: "Leonardo DiCaprio" },
  { sual: "'Oyun Oyuncağı' (Toy Story) filmində kovboy oyuncaq kimdir?", cavablar: ["Vudi (Woody)", "Bazz Laytyear (Buzz Lightyear)", "Endi", "Cessi"], duzgun: "Vudi (Woody)" },
  { sual: "'Ulduz Müharibələri' (Star Wars) filmində əsas düşmən kimdir?", cavablar: ["Dart Veyder (Darth Vader)", "Lük Skayuoker", "Han Solo", "Yoda"], duzgun: "Dart Veyder (Darth Vader)" },
];

const suallarData = {
  halloween: [
    { lang: "az", suallar: halloweenQuestionsAze },
    { lang: "en", suallar: halloweenQuestions }
  ],
  geography: [
    { lang: "az", suallar: geographyQuestionsAze },
    { lang: "en", suallar: geographyQuestions }
  ],
  history: [
    { lang: "az", suallar: historyQuestionsAze },
    { lang: "en", suallar: historyQuestions }
  ],
  Movie: [
    { lang: "az", suallar: movieQuestionsAze },
    { lang: "en", suallar: movieQuestions }
  ]
};



// Dili götür (default: en)
const lang = localStorage.getItem("quizLang") || "en";



// arrayi qarisdir
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 10-luq random sual sec
function selectRandomQuestions(array, count = 10) {
  const shuffled = shuffleArray([...array]);
  return shuffled.slice(0, count);
}

// mode secimi
const mode = localStorage.getItem("quizMode") || "halloween"; 
let suallar = [];

if (mode === "halloween") {
  suallar = selectRandomQuestions(halloweenQuestions, 10);
  document.body.style.background = "linear-gradient(orange, orangered)";
  document.querySelector("h1").textContent = "Halloween Quiz";
  document.querySelector("h1").style.fontFamily = "Creepster, cursive";
} else if (mode === "geography") {

  suallar = selectRandomQuestions(geographyQuestions, 10);
  document.body.style.background = "linear-gradient(skyblue, green)";
  document.querySelector("h1").textContent = "Geography Quiz";
  document.querySelector("h1").style.fontFamily = "Arial";
  document.body.style.fontFamily = "Arial, sans-serif";


} else if (mode === "history") {

  suallar = selectRandomQuestions(historyQuestions, 10);
  document.body.style.background = "linear-gradient(brown, gold)";
  document.querySelector("h1").textContent = "History Quiz";
  document.querySelector("h1").style.fontFamily = "Arial";

}else if(mode==="Movie"){

  suallar = selectRandomQuestions(movieQuestions, 10);
  document.body.style.background = "linear-gradient(yellow, orangered)";
  document.querySelector("h1").textContent = "Movie Quiz";
  document.querySelector("h1").style.fontFamily = "Arial";
}

let secilmisDilSual = suallarData[mode].find(item => item.lang === lang);
suallar = selectRandomQuestions(secilmisDilSual.suallar, 10);


function setLang(l) {
  localStorage.setItem("quizLang", l);
  location.reload();
}

// suallari yazmaq
const suallarolandiv = document.getElementById("suallarolandiv");
let sualHTML = "";
for (let i = 0; i < suallar.length; i++) {
  sualHTML += `<p>${i + 1}. ${suallar[i].sual}</p>`;
  for (let j = 0; j < suallar[i].cavablar.length; j++) {
    let item = suallar[i].cavablar[j];
    sualHTML += `
      <label class="option">
        <input type="radio" name="${i}" value="${item}" />
        <span class="dot"></span>
        <span class="text">${item}</span>
      </label><br>
    `;
  }
  sualHTML += "<br>";
}
suallarolandiv.innerHTML = sualHTML;

//moda uygun font

if (mode === "geography" || mode === "history" || mode==="Movie") {
  document.querySelectorAll("#suallarolandiv p").forEach(p => {
    p.style.fontFamily = "Arial";
  });
} else if (mode === "halloween") {
  document.querySelectorAll("#suallarolandiv p").forEach(p => {
    p.style.fontFamily = "Creepster, cursive";
  });
}


//cavab yoxlama ve neticve
const eng =document.getElementById("en");
const az = document.getElementById("az");
const suallarigonderbtn = document.getElementById("suallarigonderbtn");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const halloweenmode = document.getElementById("halloweenmode");
const geographymode = document.getElementById("geographymode");
const historymode  =document.getElementById("historymode");
const moviemode =document.getElementById("moviemode")

// sesler
const failaudio = document.getElementById("failaudio");
const escapeaudio = document.getElementById("escapeaudio");
const fail = document.getElementById("fail");
const clap = document.getElementById("clap");

suallarigonderbtn.onclick = function () {
  let xal = 0;
  for (let i = 0; i < suallar.length; i++) {
    let secimler = document.getElementsByName(i);
    for (let j = 0; j < secimler.length; j++) {
      if (secimler[j].checked && secimler[j].value === suallar[i].duzgun) {
        xal++;
      }
    }
  }
  eng.style.display="none";
  az.style.display="none";
  moviemode.style.display="none"
  historymode.style.display ="none"
  halloweenmode.style.display = "none";
  geographymode.style.display = "none";
  suallarolandiv.style.display = "none";
  suallarigonderbtn.style.display = "none";
  loading.classList.remove("hidden");

  setTimeout(function () {
    loading.classList.add("hidden");
    result.classList.remove("hidden");

    if (mode === "halloween") {
      if (xal < 5) {
        result.innerHTML = `<h3 id="dead">You got ${xal} / ${suallar.length} correct! <br> <span id="youdied">You died</span></h3>`;
        failaudio.play();
      } else {
        result.innerHTML = `<h3 id="live">You got ${xal} / ${suallar.length} correct! <br> <span id="youescaped">You escaped</span></h3>`;
        escapeaudio.play();
      }
    } else if (mode === "geography") {
      if (xal < 5) {
        result.innerHTML = `<h3 id="lost">You got ${xal} / ${suallar.length} correct! <br> <span id="youlost">You lost</span></h3>`;
        fail.play();
      } else {
        result.innerHTML = `<h3 id="won">You got ${xal} / ${suallar.length} correct! <br> <span id="youwon">You won</span></h3>`;
        clap.play();
      }
    } else if (mode === "history") {
      if (xal < 5) {
        result.innerHTML = `<h3 id="lost">You got ${xal} / ${suallar.length} correct! <br> <span id="youlost">You lost</span></h3>`;
        fail.play();
      } else {
        result.innerHTML = `<h3 id="won">You got ${xal} / ${suallar.length} correct! <br> <span id="youwon">You won</span></h3>`;
        clap.play();
      }
    }else if(mode==="Movie"){
      if(xal<5){
         result.innerHTML = `<h3 id="lost">You got ${xal} / ${suallar.length} correct! <br> <span id="youlost">You lost</span></h3>`;
        fail.play();
      }else{
        result.innerHTML = `<h3 id="won">You got ${xal} / ${suallar.length} correct! <br> <span id="youwon">You won</span></h3>`;
        clap.play();
      }
    }
  }, 2000);
};

// timer
let vaxt = 60;
const vaxtDiv = document.getElementById("vaxt");
let timer = setInterval(() => {
  vaxt--;
  vaxtDiv.innerHTML = `Time left ${vaxt}s`;
  if (vaxt <= 0) {
    clearInterval(timer);
    alert("Time is up!");
    suallarigonderbtn.click();
  }
}, 1000);

suallarigonderbtn.addEventListener("click", () => {
  clearInterval(timer);
});

// mode deyis
function setMode(mode) {
  localStorage.setItem("quizMode", mode);
  location.reload();
}