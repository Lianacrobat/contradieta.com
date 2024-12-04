// Función para optimizar la carga de imágenes
const optimizeImageLoading = () => {
  const images = document.querySelectorAll("img");

  // Establece el atributo `loading="lazy"` para las imágenes
  images.forEach((img) => {
    img.setAttribute("loading", "lazy"); // Lazy loading nativo
    const dataSrc = img.getAttribute("data-src");
    if (dataSrc) img.src = dataSrc; // Actualiza el src solo cuando sea necesario
  });

  // Intersection Observer para cargar imágenes cuando estén en el viewport
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute("data-src");
            if (src) {
              img.src = src;
              img.removeAttribute("data-src"); // Limpia el atributo para evitar recargas
            }
            observer.unobserve(img); // Deja de observar después de cargar
          }
        });
      },
      { rootMargin: "100px" } // Carga las imágenes un poco antes de entrar en el viewport
    );

    images.forEach((img) => observer.observe(img));
  }
};

// Llama a la función después de que el DOM esté listo
document.addEventListener("DOMContentLoaded", optimizeImageLoading);





// Datos de los textos en diferentes idiomas
const languages = {
  es: {
    sitioWeb: "Contradieta",
    nombreCurso: "PÉRDIDA DE PESO ADECUADA Y CÓMODA SIN FRACASOS NI RECAÍDAS",
    finPromo: "Fin de promoción",
    precioAhora: "580 UAH",
    precioAntes: "Antes 1,900 UAH",
    comprar: "Comprar promoción",

    cursoParaTi: "Este curso es para ti si...",
    meIdentifico: "Si 🥲",

    razonA: "Has probado todas las dietas existentes en internet, pero aún no has logrado alcanzar el cuerpo de tus sueños?",
    razonB: "Después de cada uno de tus experimentos con la pérdida de peso, el peso vuelve a subir?",
    razonC: "Estás cansada de torturar a tu cuerpo y sientes que debe ser diferente, pero aún no sabes cómo?",
    razonD: "Tienes un montón de mitos en la cabeza sobre nutrición y pérdida de peso, y ya no sabes qué es verdad y qué es mentira?",
    razonE: "Dedicas demasiado tiempo a pensar en la comida y la pérdida de peso, divides los alimentos en buenos y malos, y eliminas tus productos favoritos de la dieta porque no sabes cómo comer tus golosinas y seguir perdiendo peso?",
    razonF: "Piensas que ya nada te ayudará y estás condenada a vivir en un cuerpo que no te gusta?",
    razonG: "No solo quieres perder peso, sino también mantener tu salud y mejorar tu bienestar?",
    razonH: "Quieres que el resultado de la pérdida de peso se mantenga para siempre?",

    sobreMi: "¿Quién soy yo?",
    sobreMiDescripcion: "Mi nombre es Kateryna, soy nutricionista certificada y health coach. Ayudo a las personas a ser más saludables y les enseño a adoptar un estilo de vida saludable a su propio ritmo, con cuidado por su cuerpo y mente y (como dicen mis clientes) sin violencia. Ayudo a las personas a disfrutar del proceso y a cambiar su enfoque de los números al bienestar. Mi enfoque está en la salud y el confort de mis clientes.",
    certificados: "Mis Certificados:",

    ProgramaCursoTitulo: "Programa del curso",
    leccionA: "📂 Lección 1. Creencias que te impiden perder peso.",
    leccionA1: "Analizamos las creencias limitantes que te impiden perder peso y cómo afectan a tu comportamiento.",
    leccionA2: "Formamos creencias que te apoyen y que sirvan de motivación y te impulsen a la acción.",
    leccionB: "📂 Lección 2. Métodos ineficaces de pérdida de peso",
    leccionB1: "Hablamos sobre los métodos ineficaces de pérdida de peso y los principales errores que cometen las personas al intentar adelgazar.",
    leccionC: "📂 Lección 3. ¿Cómo perder peso de manera segura para la salud y la belleza?",
    leccionC1: "Hablamos sobre los principios básicos de una pérdida de peso saludable.",
    leccionC2: "El ritmo de pérdida de peso óptimo.",
    leccionC3: "Qué y cuánto comer para adelgazar.",
    leccionC4: "Cómo entender qué déficit hacer.",
    leccionC5: "Instrucción paso a paso para perder peso y cómo trabajar con el efecto plateau.",
    leccionD: "📂 Lección 4. ¿Qué son los macronutrientes?",
    leccionD1: "Hablamos sobre las funciones, fuentes y normas de los macronutrientes.",
    leccionD2: "Cómo distribuir y equilibrar los macronutrientes en el plato.",
    leccionE: "📂 Lección 5. Alimentación sin contar calorías ni macronutrientes.",
    leccionE1: "Te enseñaré a preparar un plato saludable y equilibrado sin cálculos ni complicaciones.",
    leccionF: "📂 Lección 6. ¿Cómo prevenir recaídas y hacer que la pérdida de peso sea lo más cómoda posible?",
    leccionF1: "Te hablaré sobre las herramientas más eficaces que servirán de prevención para las recaídas.",
    leccionF2: "Te enseñaré a incorporar correctamente tus productos favoritos en una dieta saludable.",
    leccionG: "📂 Lección 7. ¿Qué hacer para que los resultados se mantengan siempre?",
    leccionG1: "Hablaremos sobre los factores para un cambio de estilo de vida exitoso y cómodo.",

    testimonios: "Opiniones de mis clientes:"

  },
  uk: {
    sitioWeb: "Протидієти",
    nombreCurso: "АДЕКВАТНЕ ТА КОМФОРТНЕ СХУДНЕННЯ БЕЗ ЗРИВІВ ТА ВІДКАТІВ",
    finPromo: "До закінчення акції",
    precioAhora: "580 грн",
    precioAntes: "замість 1,900 грн",
    comprar: "Купити зі знижкою",

    cursoParaTi: "Цей курс для тебе, якщо...",
    meIdentifico: "Це я 🥲",
    razonA: "ти перепробувала всі існуючі дієти в інтернеті, але до тіла мрії так і не прийшла",
    razonB: "після кожного твого експерименту зі схудненням вага повертається назад, а",
    razonC: "ти втомилася катувати свій організм і відчуваєш, що треба по-іншому, але поки не знаєш, як",
    razonD: "ти маєш купу міфів у голові про харчування та схуднення, і вже не знаєш, де правда, а де брехня",
    razonE: "ти занадто багато часу приділяєш думкам навколо їжі та схуднення, ділиш їжу на погану та хорошу, виключаєш улюблені продукти з раціону, бо не знаєш, як їсти смаколики і при цьому худнути",
    razonF: "ти думаєш, що тобі нічого вже не допоможе, і ти приречена бути у своєму тілі, яке тобі не подобається",
    razonG: "ти хочеш не просто схуднути, а зберегти своє здоровʼя та покращити самопочуття",
    razonH: "ти хочеш, щоб результат від схуднення тримався завжди",

    sobreMi: "Хто я?",
    sobreMiDescripcion: "Мене звати Катерина, я дипломований нутриціолог та хелс-коуч. Роблю людей здоровішими та допомагаю їм прийти до здорового способу життя в максимально комфортному для них темпі, з турботою про своє тіло та розум та (як люблять говорити мої клієнти) без насилля. Допомагаю людям знаходити задоволення у процесі та змістити фокус уваги із цифр на самопочуття. Мій фокус - здоровʼя та комфорт моїх клієнтів.",
    certificados: "Мої сертифікати:",

    ProgramaCursoTitulo: "🎬 Програма курсу",
    leccionA: "📂 Урок 1. Переконання, які заважають вам схуднути.",
    leccionA1: "розбираємо обмежуючі переконання, які заважають вам схуднути та те, як вони впливають на вашу поведінку",
    leccionA2: "формуємо підтримуючі переконання, які слугуватимуть мотивацією та спонукатимуть до дій",
    leccionB: "📂 Урок 2. Неефективні методи схуднення",
    leccionB1: "говоримо про неефективні методи схуднення та топ помилок, яких допускаються люди у спробах схуднути",
    leccionC: "📂 Урок 3. Як схуднути безпечно для здоровʼя та краси",
    leccionC1: "говоримо про основні принципи здорового схуднення",
    leccionC2: "про те, який темп схуднення є оптимальним",
    leccionC3: "що та скільки їсти, щоб схуднути",
    leccionC4: "як зрозуміти, який дефіцит зробити",
    leccionC5: "покрокова інструкція схуднення та як працювати з ефектом плато",
    leccionD: "📂 Урок 4. Що таке БЖВ?",
    leccionD1: "поговоримо про функції, джерела та норми БЖВ",
    leccionD2: "як розподілити та збалансувати БЖВ на тарілці",
    leccionE: "📂 Урок 5. Харчування без розрахунків ккал та БЖВ",
    leccionE1: "навчу вас складати здорову та збалансовану тарілку без підрахунків та заморочок",
    leccionF: "📂 Урок 6. Як запобігти зривам та зробити схуднення максимально комфортним?",
    leccionF1: "розкажу про найефективніші інструменти, які будуть профілактикою зривів",
    leccionF2: "навчу вас правильно вписувати свої улюблені продукти в здоровий раціон",
    leccionG: "📒 Урок 7. Що робити, щоб результат тримався завжди?",
    leccionG1: "поговоримо про фактори успішної та комфортної зміни способу життя",

    testimonios: "Відгуки моїх клієнтів:"
  }
};

// Función para obtener datos de idioma
const getLangData = () => {
  const lang = document.getElementById("language-select").value;
  return languages[lang] || languages.es;
};

// Función para actualizar el contenido según el idioma
const changeLanguage = () => {
  const langData = getLangData();
  document.querySelectorAll("[data-lang-key]").forEach((el) => {
    const key = el.dataset.langKey;
    if (langData[key]) el.textContent = langData[key];
  });
};

// Función para el cambio de tema
const toggleTheme = () => {
  const body = document.body;
  body.classList.toggle("dark-theme");
  document.getElementById("theme-toggle").textContent = body.classList.contains("dark-theme") ? "🌞" : "🌙";
};


// 🛠️ Función para calcular la próxima medianoche
const getNextMidnight = () => {
  const now = new Date();
  now.setHours(24, 0, 0, 0);
  return now.getTime();
};

// Función para agregar ceros a la izquierda
const padZero = (num) => (num < 10 ? `0${num}` : num);

// Función para actualizar cuenta regresiva
const updateCountdown = () => {
  const targetDate = getNextMidnight();
  const now = Date.now();
  const distance = targetDate - now;
  const langData = getLangData();

  if (distance < 0) return clearInterval(countdownInterval);

  const hours = padZero(Math.floor((distance / (1000 * 60 * 60)) % 24));
  const minutes = padZero(Math.floor((distance / (1000 * 60)) % 60));
  const seconds = padZero(Math.floor((distance / 1000) % 60));

  document.getElementById("timer").textContent = `${langData.finPromo}: ${hours}:${minutes}:${seconds}`;
  document.getElementById("timer2").textContent = `${langData.finPromo}: ${hours}:${minutes}:${seconds} ⏱️`;
};

// 🛠️ Inicialización de eventos y funciones
document.addEventListener("DOMContentLoaded", () => {
  changeLanguage();
  updateCountdown();


});

const countdownInterval = setInterval(updateCountdown, 1000);

// 🛠️ Checkbox para tarjetas
document.querySelectorAll(".card-checkbox").forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const card = this.closest(".card");
    const img = card.querySelector(".card-img");
    img.style.filter = this.checked ? "grayscale(100%)" : "none";
    img.style.opacity = this.checked ? "0.5" : "1";
  });
});


// 🛠️ Gestión del acordeón
document.querySelectorAll(".accordion-title").forEach((title) => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;

    // Cierra otros acordeones abiertos para comportamiento exclusivo
    document.querySelectorAll(".accordion-content").forEach((otherContent) => {
      if (otherContent !== content) {
        otherContent.classList.remove("show");
        otherContent.previousElementSibling.setAttribute("aria-expanded", "false");
      }
    });

    // Alternar estado del acordeón actual
    content.classList.toggle("show");
    title.setAttribute("aria-expanded", content.classList.contains("show"));
  });
});

// Asegurar que Lección A esté activa por defecto
const firstAccordion = document.querySelector(".accordion-content");
if (firstAccordion) {
  firstAccordion.classList.add("show");
  firstAccordion.previousElementSibling.setAttribute("aria-expanded", "true");
}



// 🛠️ Galería de certificados
document.addEventListener("DOMContentLoaded", () => {
  const initializeCarousel = (carouselId) => {
    const carousel = document.getElementById(carouselId);
    const images = Array.from(carousel.children);

    // Clonar las imágenes al inicio y al final
    const firstClone = images[0].cloneNode(true);
    const lastClone = images[images.length - 1].cloneNode(true);

    carousel.insertBefore(lastClone, images[0]); // Insertar el clon al inicio
    carousel.appendChild(firstClone); // Insertar el clon al final

    // Asegurarse de que las imágenes estén cargadas antes de calcular ancho
    const onImagesLoaded = () => {
      const imageWidth = carousel.children[0].offsetWidth;
      carousel.scrollLeft = imageWidth;

      carousel.addEventListener("scroll", () => {
        // Verificar posiciones para scroll infinito
        if (carousel.scrollLeft >= imageWidth * (images.length + 1)) {
          carousel.scrollLeft = imageWidth;
        }
        if (carousel.scrollLeft <= 0) {
          carousel.scrollLeft = imageWidth * images.length;
        }
      });
    };

    // Esperar a que todas las imágenes se carguen
    const promises = images.map((img) => new Promise((resolve) => {
      if (img.complete) {
        resolve();
      } else {
        img.onload = resolve;
        img.onerror = resolve;
      }
    }));

    Promise.all(promises).then(onImagesLoaded);
  };

  // Inicializar carruseles
  initializeCarousel("carruselCertificados");
  initializeCarousel("carruselTestimonios");
});
