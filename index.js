var videoArray = [
  {
    img: '<img src="widow.webp" alt=""></img>',
    name: "Black Widow",
    subname:
      "See It In Theaters July 9 or Order It on Disney+ with Premier Access. Additional Fee Required.",
    ankor: "Order Early",
  },
  {
    img: '<img src="loki.webp" alt=""></img>',
    name: "New on Disnay+",
    subname:
      "Loki’s Time Has Come - Start Streaming the Marvel Studios Original Series Now.",
    ankor: "Stream Now",
  },
  {
    img: '<img src="babies.webp" alt=""></img>',
    name: "shopDisney",
    subname:
      "Dreaming of Deals? You're In Luck! $14 Sleepwear and Plush—2 DAYS ONLY.",
    ankor: "Shop now",
  },
  {
    img: '<img src="micky.webp" alt=""></img>',
    name: "Walt Disney World",
    subname:
      "Save Up to 25% on Rooms at Select Disney Resort Hotels This Summer.",
    ankor: "Learn More",
  },
];

var loopCard = "";

for (var i = 0; i < videoArray.length; i++) {
  var card = videoArray[i];
  loopCard += `
    <div class="card">
    <div class="img-div">
        ${card.img}
    </div>
    <div class="card-text" style="padding: 0 40px;padding-bottom: 30px;">
            <p class="title">${card.name}</p>
            <p class="subtitle">
                ${card.subname}
            </p>
            <a href="https://www.google.com/">
              <span style="border-bottom: 1px solid black;">${card.ankor}</span>
            </a>
          </div>
        </div>`;
  document.getElementById("loopCards").innerHTML = loopCard;
}

var data = new Date(Date.now());

var month = data.getMonth();
if (month == 0) {
  month = "January";
} else if (month == 1) {
  month = "February";
} else if (month == 2) {
  month = "March";
} else if (month == 3) {
  month = "April";
} else if (month == 4) {
  month = "May";
} else if (month == 5) {
  month = "June";
} else if (month == 6) {
  month = "July";
} else if (month == 7) {
  month = "August";
} else if (month == 8) {
  month = "Septemver";
} else if (month == 9) {
  month = "October";
} else if (month == 10) {
  month = "November";
} else if (month == 11) {
  month = "December";
} else {
  console.log("error");
}

// document.getElementById("month").innerText = month;

day = data.getDate();

// document.getElementById("day").innerText = day;

var year = data.getFullYear();
// document.getElementById("year").innerText = year;

var newsArray = [
  {
    picture: '<img src="news-1.webp" alt=""></img>',
    title: "news marvel",
    subtitle:
      "Marvel Studios' <i>Black WIdow</i> Stars Scarlett Johansson and Florence Pugh Talk Sisters, Stunt, and More!",
  },
  {
    picture: '<img src="news-2.webp" alt=""></img>',
    title: "news walt disney animetion studios",
    subtitle:
      'A Behind-the Scenes Look at Disney Animation Short, "Us Again," With Keone and Mari Madrid',
  },
  {
    picture: '<img src="news-3.webp" alt=""></img>',
    title: "news pixar",
    subtitle:
      "Enter the World of Portorosso with a Deep Dive on the Art and Character Designs in <i>Luca!</i>",
  },
  {
    picture: '<img src="new-4.jpeg" alt=""></img>',
    title: "news star wars",
    subtitle: "Introducing <i>Star Wars: The Bad Batch</i>.",
  },
];

var loopnews = "";

for (var f = 0; f < newsArray.length; f++) {
  var news = newsArray[f];
  loopnews += ` <div class="new">
  <div class="img-div">
    ${news.picture}
  </div>
  <div class="news-text-div">
    <p class="title">${news.title}</p>
    <p class="news-text">
      <b>
        ${news.subtitle}
      </b>
    </p>
    <p id="date" class="date">
      <span class="month" id="month">June</span>
      <span class="day" id="day">20</span>,
      <span class="year" id="year">2021</span>
    </p>
  </div>
</div>`;
  document.getElementById("news-div").innerHTML = loopnews;
}

var trendArray = [
  {
    objectImg: 'img src="cruella.jpeg" alt="" />',
    objectName: "Cruella",
    objectSubname:
      "In theaters and on Disney+ with Premier Access now. Additional fee required.",
    objectAnkor: "Order Now",
  },
  {
    objectImg: 'img src="raya.webp" alt="" />',
    objectName: "Raya and the last dragon",
    objectSubname:
      "An epic journey awaits. Now streaming for all subscribers on Disney+.",
    objectAnkor: "Stream Now",
  },
];

var celebrateArray = [
  {
    celebrateImg: '<img src="carousel-1.jfif" alt="">',
  },
  {
    celebrateImg: '<img src="carousel-2.jpeg" alt="carousel-1">',
  },
  {
    celebrateImg: '<img src="./carousel-3.webp" alt="carousel-1"></img>',
  },
  {
    celebrateImg: '<img src="./carousel-4.webp" alt="carousel-1"></img>',
  },
  {
    celebrateImg: '<img src="./carousel-5.webp" alt="carousel-1"></img>',
  },
];

var celebrateVar = "";

for (var h = 0; h < celebrateArray.length; h++) {
  var celebrate = celebrateArray[h];
  celebrateVar += `<div class="celebrate" id="celebrate">
${celebrate.celebrateImg}
  </div>`;
  document.getElementById("celebrate-div").innerHTML = celebrateVar;
}

var throwArray = [
  {
    throwimg:
      '<img class="throwpicture" src="throw-1.webp" alt="throwimage" />',
    throwname: "Turner & Hook",
  },
  {
    throwimg:
      '<img class="throwpicture" src="throw-2.webp" alt="throwimage" />',
    throwname: "Willow",
  },
  {
    throwimg:
      '<img class="throwpicture" src="throw-3.webp" alt="throwimage" />',
    throwname: "Remember the Titans",
  },
  {
    throwimg:
      '<img class="throwpicture" src="throw-4.webp" alt="throwimage" />',
    throwname: "Splash",
  },
  {
    throwimg:
      '<img class="throwpicture" src="throw-5.jpeg" alt="throwimage" />',
    throwname: "Toy Story",
  },
];

var throwVar = "";

for (var a = 0; a < throwArray.length; a++) {
  var throwcontent = throwArray[a];
  throwVar += `
  <div class="throw">
            <div class="throw-img-div">
${throwcontent.throwimg}
            </div>
            <p class="throwname">${throwcontent.throwname}</p>
          </div>
  `;
  document.getElementById("throw-div").innerHTML = throwVar;
}


var soonArray = [
  {
    soonimg:
      '<img src="soon-1.jpeg" alt="">',
    soonname: "The Mysterious Benedict <br> Society",
  },
  {
    soonimg:
      '<img src="soon-2.webp" alt="throwimage" />',
    soonname: "WolfGang",
  },
  {
    soonimg:
      '<img class="throwpicture" src="soon-3.webp" alt="throwimage" />',
    soonname: "Monsters At Work",
  },
  {
    soonimg:
      '<img class="throwpicture" src="soon-4.jpeg" alt="throwimage" />',
    soonname: "Black Widow",
  },
  {
    soonimg:
      '<img class="throwpicture" src="soon-5.webp" alt="throwimage" />',
    soonname: "Turning The Tables With Robin Roberts",
  },
  
];

var soonVar = "";

for (var c = 0; c < soonArray.length; c++) {
  var sooncontent = soonArray[c];
  soonVar += `
  <div class="throw">
            <div class="throw-img-div">
${sooncontent.soonimg}
            </div>
            <p class="throwname">${sooncontent.soonname}</p>
          </div>
  `;
  document.getElementById("soon-div").innerHTML = soonVar;
}
