// Datos de los textos en diferentes idiomas
const languages = {
  es: {
    sitioWeb: "contradieta",
    nombreCurso: "PÉRDIDA DE PESO ADECUADA Y CÓMODA SIN FRACASOS NI RECAÍDAS",
    finPromo: "Fin de promoción:",
    precioAhora: "580 UAH",
    precioAntes: "Antes 1,900 UAH",
    comprar: "Comprar promoción",

    cursoParaTi: "Este curso es para ti si:",
    razonA: "Has probado todas las dietas existentes en internet, pero aún no has logrado alcanzar el cuerpo de tus sueños",
    razonB: "Después de cada uno de tus experimentos con la pérdida de peso, el peso vuelve a subir, y",
    razonC: "Estás cansada de torturar a tu cuerpo y sientes que debe ser diferente, pero aún no sabes cómo",
    razonD: "Tienes un montón de mitos en la cabeza sobre nutrición y pérdida de peso, y ya no sabes qué es verdad y qué es mentira",
    razonE: "Dedicas demasiado tiempo a pensar en la comida y la pérdida de peso, divides los alimentos en buenos y malos, y eliminas tus productos favoritos de la dieta porque no sabes cómo comer tus golosinas y seguir perdiendo peso",
    razonF: "Piensas que ya nada te ayudará y estás condenada a vivir en un cuerpo que no te gusta",
    razonG: "No solo quieres perder peso, sino también mantener tu salud y mejorar tu bienestar",
    razonH: "Quieres que el resultado de la pérdida de peso se mantenga para siempre",

    sobreMi: "¿Quién soy yo?",
    sobreMiDescripcion: "Mi nombre es Kateryna, soy nutricionista certificada y health coach. Ayudo a las personas a ser más saludables y les enseño a adoptar un estilo de vida saludable a su propio ritmo, con cuidado por su cuerpo y mente y (como dicen mis clientes) sin violencia. Ayudo a las personas a disfrutar del proceso y a cambiar su enfoque de los números al bienestar. Mi enfoque está en la salud y el confort de mis clientes.",

    ProgramaCursoTitulo: "Programa del curso",
    leccionA: "📒 Lección 1. Creencias que te impiden perder peso.",
    leccionA1: "Analizamos las creencias limitantes que te impiden perder peso y cómo afectan a tu comportamiento.",
    leccionA2: "Formamos creencias que te apoyen y que sirvan de motivación y te impulsen a la acción.",
    leccionB: "📒 Lección 2. Métodos ineficaces de pérdida de peso",
    leccionB1: "Hablamos sobre los métodos ineficaces de pérdida de peso y los principales errores que cometen las personas al intentar adelgazar.",
    leccionC: "📒 Lección 3. ¿Cómo perder peso de manera segura para la salud y la belleza?",
    leccionC1: "Hablamos sobre los principios básicos de una pérdida de peso saludable.",
    leccionC2: "El ritmo de pérdida de peso óptimo.",
    leccionC3: "Qué y cuánto comer para adelgazar.",
    leccionC4: "Cómo entender qué déficit hacer.",
    leccionC5: "Instrucción paso a paso para perder peso y cómo trabajar con el efecto plateau.",
    leccionD: "📒 Lección 4. ¿Qué son los macronutrientes?",
    leccionD1: "Hablamos sobre las funciones, fuentes y normas de los macronutrientes.",
    leccionD2: "Cómo distribuir y equilibrar los macronutrientes en el plato.",
    leccionE: "📒 Lección 5. Alimentación sin contar calorías ni macronutrientes.",
    leccionE1: "Te enseñaré a preparar un plato saludable y equilibrado sin cálculos ni complicaciones.",
    leccionF: "📒 Lección 6. ¿Cómo prevenir recaídas y hacer que la pérdida de peso sea lo más cómoda posible?",
    leccionF1: "Te hablaré sobre las herramientas más eficaces que servirán de prevención para las recaídas.",
    leccionF2: "Te enseñaré a incorporar correctamente tus productos favoritos en una dieta saludable.",
    leccionG: "📒 Lección 7. ¿Qué hacer para que los resultados se mantengan siempre?",
    leccionG1: "Hablaremos sobre los factores para un cambio de estilo de vida exitoso y cómodo.",

  },
  uk: {
    sitioWeb: "Протидієти",
    nombreCurso: "АДЕКВАТНЕ ТА КОМФОРТНЕ СХУДНЕННЯ БЕЗ ЗРИВІВ ТА ВІДКАТІВ",
    finPromo: "До закінчення акції:",
    precioAhora: "580 грн",
    precioAntes: "замість 1,900 грн",
    comprar: "Купити зі знижкою",

    cursoParaTi: "Цей курс для тебе, якщо",
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

    ProgramaCursoTitulo: "Програма курсу",
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

    leC: "поговоримо про фактори успішної та комфортної зміни способу життя",


    testimonials: [
      { name: "Карлос", text: "Ця програма змінила моє життя!" },
      { name: "Хуан", text: "Я скинув 15 кг з цим курсом!" }
    ],
    footerEmail: "contact@nutrition.com",
    footerPhone: "+34 600 123 456",
    fbLink: "https://facebook.com",
    instaLink: "https://instagram.com",
  }
};

// Función para obtener los datos del idioma seleccionado
function getLangData() {
  const lang = document.getElementById('language-select').value;
  return languages[lang];
}

// Función para cambiar el idioma
function changeLanguage() {
  const langData = getLangData(); // Obtener los datos del idioma seleccionado
  // Actualizar textos dinámicamente
  document.getElementById('sitioWeb').textContent = langData.sitioWeb;
  document.getElementById('nombreCurso').textContent = langData.nombreCurso;
  document.getElementById('precioAhora').textContent = langData.precioAhora;
  document.getElementById('precioAntes').textContent = langData.precioAntes;
  document.getElementById('comprar').textContent = langData.comprar;
  document.getElementById('sobreMi').textContent = langData.sobreMi;
  document.getElementById('razonA').textContent = langData.razonA;
  document.getElementById('razonB').textContent = langData.razonB;
  document.getElementById('razonC').textContent = langData.razonC;
  document.getElementById('razonD').textContent = langData.razonD;
  document.getElementById('razonE').textContent = langData.razonE;
  document.getElementById('razonF').textContent = langData.razonF;
  document.getElementById('razonG').textContent = langData.razonG;
  document.getElementById('razonH').textContent = langData.razonH;
  document.getElementById('sobreMiDescripcion').textContent = langData.sobreMiDescripcion;
  document.getElementById('cursoParaTi').textContent = langData.cursoParaTi;
  //programa curso
  document.getElementById('ProgramaCursoTitulo').textContent = langData.ProgramaCursoTitulo;
  document.getElementById('leccionA').textContent = langData.leccionA;
  document.getElementById('leccionA1').textContent = langData.leccionA1;
  document.getElementById('leccionA2').textContent = langData.leccionA2;
  document.getElementById('leccionB').textContent = langData.leccionB;
  document.getElementById('leccionB1').textContent = langData.leccionB1;
  document.getElementById('leccionC').textContent = langData.leccionC;
  document.getElementById('leccionC1').textContent = langData.leccionC1;
  document.getElementById('leccionC2').textContent = langData.leccionC2;
  document.getElementById('leccionC3').textContent = langData.leccionC3;
  document.getElementById('leccionC4').textContent = langData.leccionC4;
  document.getElementById('leccionC5').textContent = langData.leccionC5;
  document.getElementById('leccionD').textContent = langData.leccionD;
  document.getElementById('leccionD1').textContent = langData.leccionD1;
  document.getElementById('leccionD2').textContent = langData.leccionD2;
  document.getElementById('leccionE').textContent = langData.leccionE;
  document.getElementById('leccionE1').textContent = langData.leccionE1;
  document.getElementById('leccionF').textContent = langData.leccionF;
  document.getElementById('leccionF1').textContent = langData.leccionF1;
  document.getElementById('leccionF2').textContent = langData.leccionF2;
  document.getElementById('leccionG').textContent = langData.leccionG;
  document.getElementById('leccionG1').textContent = langData.leccionG1;





  // Limpiar testimonios previos
  const testimonialsDiv = document.getElementById('testimonial-content');
  testimonialsDiv.innerHTML = '';
  langData.testimonials.forEach(testimonial => {
    const div = document.createElement('div');
    div.classList.add('testimonial-item');
    div.innerHTML = `<h3>${testimonial.name}</h3><p>"${testimonial.text}"</p>`;
    testimonialsDiv.appendChild(div);
  });
  // Actualizar footer

  document.documentElement.lang = lang;
}

// Función para el cambio de tema
function toggleTheme() {
  const body = document.getElementById('body');
  body.classList.toggle('dark-theme');
  const themeButton = document.getElementById('theme-toggle');
  themeButton.textContent = body.classList.contains('dark-theme') ? '🌞' : '🌙';
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  changeLanguage();  // Cargar idioma predeterminado

  // Escuchar el cambio de idioma
  document.getElementById('language-select').addEventListener('change', changeLanguage);
});

// Función para calcular la fecha de la medianoche del día siguiente
function getNextMidnight() {
  const now = new Date();
  now.setHours(24, 0, 0, 0); // Establece la hora a las 00:00:00 del siguiente día
  return now.getTime(); // Devuelve el tiempo en milisegundos
}

// Función para agregar ceros a la izquierda para formato 00:00:00
function padZero(number) {
  return number < 10 ? "0" + number : number;
}

//⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// Función para actualizar la cuenta regresiva
function updateCountdown() {
  const targetDate = getNextMidnight();
  const now = new Date().getTime();
  const distance = targetDate - now;
  const langData = getLangData(); // Obtener los datos del idioma seleccionado


  // Calcular horas, minutos y segundos
  const hours = padZero(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = padZero(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = padZero(Math.floor((distance % (1000 * 60)) / 1000));

  // Mostrar el tiempo restante en el HTML
  document.getElementById("timer").innerHTML = `${langData.finPromo}: ${hours} : ${minutes} : ${seconds}`;

  // Si la cuenta regresiva ha terminado
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "¡Fin de la cuenta regresiva!";
  }
}

// Actualizar la cuenta regresiva cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);

// Inicializar la cuenta regresiva
updateCountdown();

//⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// JavaScript para manejar la apertura y cierre del acordeón
const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach(title => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling; // El siguiente elemento en el DOM, que es el contenido del acordeón

    // Cambiar la clase 'show' para mostrar u ocultar el contenido
    content.classList.toggle('show');

    // Actualizar el estado de aria-expanded para accesibilidad
    const isExpanded = content.classList.contains('show');
    title.setAttribute('aria-expanded', isExpanded);
  });
});


//dffferfgrea

