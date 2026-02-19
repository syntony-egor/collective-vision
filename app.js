const slides = [
  // Title
  { type: "title", title: "Как создаётся то, что происходит?", subtitle: "Просветлятор, неделя 3" },

  // Step 1
  { type: "step-intro", step: 1, name: "Яблоко", description: "Одно красное яблоко на ветке. Десять существ смотрят на него. Десять разных миров." },
  { type: "image", image: "images/step1/1-human-square.png", caption: "Красное яблоко на зелёной ветке. Ты знал это с детства." },
  { type: "image", image: "images/step1/2-cat.png", caption: "Кошка. Бурое пятно на серой ветке. Не еда. Не интересно." },
  { type: "image", image: "images/step1/3-dog.png", caption: "Собака. Жёлто-коричневое, но пахнет! Запах здесь — главный канал." },
  { type: "image", image: "images/step1/4-bee.png", caption: "Пчела. Тёмная хрень. Зато цветок рядом горит ультрафиолетом." },
  { type: "image", image: "images/step1/5-octopus.png", caption: "Осьминог. Серый шар, но поверхность сверкает поляризованным светом." },
  { type: "image", image: "images/step1/6-snake.png", caption: "Змея. Мутное пятно. Холодное. Неинтересно. Вот мышь рядом — другое дело." },
  { type: "image", image: "images/step1/7-electric-fish.png", caption: "Электрическая рыба. Сгущение поля. Что-то тут есть. Не вижу, но чувствую." },
  { type: "image", image: "images/step1/8-bat.png", caption: "Летучая мышь. Гладкий шар на расстоянии 1.2 метра. Рядом — шуршащее." },
  { type: "image", image: "images/step1/9-bacteria.png", caption: "Бактерия. Сахара стало больше. Плыву дальше. Через 4 секунды проверю снова." },
  { type: "image", image: "images/step1/10a-thermal.png", caption: "Тепловизор. Яблоко чуть теплее листьев." },
  { type: "image", image: "images/step1/10b-xray.png", caption: "Рентген. Семена, сосуды, плотность мякоти." },
  { type: "image", image: "images/step1/10c-radio.png", caption: "Радиоволны. Яблоко практически прозрачно." },
  { type: "text", text: "Десять существ. Один объект. Десять разных миров.\nКакой из них настоящий?" },

  // Step 2
  { type: "step-intro", step: 2, name: "Комната", description: "Та же комната. Пять существ внутри. Пять разных вселенных." },
  { type: "image", image: "images/step2/1-human.png", caption: "Твоя комната. Ты знаешь каждый предмет по имени." },
  { type: "image", image: "images/step2/2-cat.png", caption: "Кошка. Полутьма? Какая полутьма. Всё видно. И занавеска шевельнулась." },
  { type: "image", image: "images/step2/3-dog.png", caption: "Собака. Размытая картинка. Зато пахнет всё. Следы хозяина на полу. Котлеты за стеной." },
  { type: "image", image: "images/step2/4-fly.png", caption: "Муха. Мозаика. Зато ты двигаешься так медленно." },
  { type: "image", image: "images/step2/5-plant.png", caption: "Растение. Нет стен. Нет дивана. Нет кошки. Есть свет, гравитация и вода. Больше ничего не нужно." },
  { type: "text", text: "Ни одно из них не ошибается." },

  // Step 3
  { type: "step-intro", step: 3, name: "Лицо", description: "Как мозг строит лицо из хаоса фотонов. Шесть слоёв конструирования." },
  { type: "image", image: "images/step3/1-photons.png", caption: "Фотоны. Частицы света. Они не знают, что летят от лица." },
  { type: "image", image: "images/step3/2-spots.png", caption: "Пятна. Ярче тут, темнее там. Никаких линий." },
  { type: "image", image: "images/step3/3-edges.png", caption: "Контуры. Где светлое встречает тёмное." },
  { type: "image", image: "images/step3/4-blur.png", caption: "Что-то проступает. Нечёткое, но уже целое." },
  { type: "image", image: "images/step3/5-face.png", caption: "Лицо. Два глаза, нос, рот. Откуда оно взялось?" },
  { type: "image", image: "images/step3/6-concept.png", caption: "«Маша улыбается». Ты видишь не лицо — ты видишь свою историю о Маше." },
  { type: "text", text: "От хаоса фотонов до «Маша улыбается» — шесть слоёв конструирования.\nКаждый слой добавляет то, чего не было в предыдущем.\nНи на одном из них нет лица.\nЛицо — финальный продукт. Не вход." },

  // Step 4
  { type: "step-intro", step: 4, name: "Наблюдатель", description: "Та же женщина. Ничего не менялось снаружи. Менялся только тот, кто смотрит." },
  { type: "image", image: "images/step4/1-calm.png", caption: "Спокоен. Лицо — просто лицо." },
  { type: "image", image: "images/step4/2-love.png", caption: "Влюблён. Кожа светится, глаза сияют. Это не лицо светится — это ты." },
  { type: "image", image: "images/step4/3-joy.png", caption: "Радость. Мир стал ярче, чётче, живее. Каждая деталь интересна." },
  { type: "image", image: "images/step4/4-irritation.png", caption: "Злишься. Губы кривые, взгляд тяжёлый. Ничего не изменилось. Только ты." },
  { type: "image", image: "images/step4/5-fear.png", caption: "Страшно. Лицо нависло. Глаза огромные. Темно вокруг." },
  { type: "image", image: "images/step4/6-fatigue.png", caption: "Устал. Лицо — просто плоское пятно. Неинтересно." },
  { type: "text", text: "Одно лицо. Шесть версий. Ни одна — не лицо. Каждая — ты." },

  // Step 5
  { type: "step-intro", step: 5, name: "Поворот", description: "После всего визуального пиршества." },
  { type: "image", image: "images/step5/1-empty.png", caption: "" },
  { type: "text", text: "Ты листал картинки.\nКаждый клик — новая версия. Новый мир. Новое лицо.\n\nВсё это время ты форсировал восприятие.\nВыбирал, что смотреть. Искал, что увидеть. Торопился дальше.\n\nА теперь — попробуй остановиться.\n\nПрямо сейчас. Закрой глаза на десять секунд.\nНичего не ищи. Ничего не представляй.\nПросто подожди.\n\nЧто первое появится — то и есть." },
  { type: "image", image: "images/step5/2-all-at-once.png", caption: "Вот что ты обычно видишь. Всё сразу. Ничего по отдельности." },
  { type: "image", image: "images/step5/3-clean.png", caption: "А вот что есть, если просто смотреть." },

  // Finale
  { type: "text", text: "Мир не такой, каким ты его видишь.\nОн не такой, каким его видит кошка.\nОн не такой, каким его видит пчела.\n\nОн вообще не «такой».\nОн — то, что появляется, когда ты смотришь.\n\nМожно форсировать: искать, ожидать, проецировать.\nМожно слушать: смотреть, не видеть, ждать.\n\nОба способа работают.\nВторой показывает больше." },
];

let current = 0;
const slideEl = document.getElementById("slide");
const counterEl = document.getElementById("counter");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
const slideshowEl = document.getElementById("slideshow");

function render(index) {
  const s = slides[index];
  let html = "";

  switch (s.type) {
    case "title":
      html = `<div class="slide-title"><h1>${s.title}</h1><div class="subtitle">${s.subtitle}</div></div>`;
      break;
    case "step-intro":
      html = `<div class="slide-step-intro"><div class="step-number">${s.step}</div><div class="step-name">${s.name}</div><div class="step-description">${s.description}</div></div>`;
      break;
    case "image":
      html = `<div class="slide-image"><img src="${s.image}" alt=""><div class="caption">${s.caption}</div></div>`;
      break;
    case "text":
      html = `<div class="slide-text"><div class="text-content">${s.text}</div></div>`;
      break;
  }

  counterEl.textContent = `${index + 1} / ${slides.length}`;
  return html;
}

function go(index) {
  if (index < 0 || index >= slides.length) return;
  slideEl.classList.add("fade-out");
  setTimeout(() => {
    current = index;
    slideEl.innerHTML = render(current);
    slideEl.classList.remove("fade-out");
  }, 200);
}

// Init
slideEl.innerHTML = render(0);
counterEl.textContent = `1 / ${slides.length}`;

// Keyboard
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === " ") {
    e.preventDefault();
    go(current + 1);
  }
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    go(current - 1);
  }
});

// Nav arrows
prevEl.addEventListener("click", (e) => { e.stopPropagation(); go(current - 1); });
nextEl.addEventListener("click", (e) => { e.stopPropagation(); go(current + 1); });

// Click zones
slideshowEl.addEventListener("click", (e) => {
  const x = e.clientX / window.innerWidth;
  if (x < 0.35) go(current - 1);
  else if (x > 0.65) go(current + 1);
});

// Touch swipe
let touchStartX = 0;
let touchStartY = 0;
slideshowEl.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

slideshowEl.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
    if (dx < 0) go(current + 1);
    else go(current - 1);
  }
}, { passive: true });
