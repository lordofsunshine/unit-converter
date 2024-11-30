const units = {
  length: {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000,
    mile: 0.000621371,
    yard: 1.09361,
    foot: 3.28084,
    inch: 39.3701,
    nautical_mile: 0.000539957,
    light_year: 1.057e-16,
    angstrom: 1e10,
    astronomical_unit: 6.68459e-12,
    parsec: 3.24078e-17,
  },
  weight: {
    kilogram: 1,
    gram: 1000,
    milligram: 1000000,
    metric_ton: 0.001,
    pound: 2.20462,
    ounce: 35.274,
    carat: 5000,
    stone: 0.157473,
    atomic_mass_unit: 6.02214076e26,
    quintal: 0.01,
    pood: 0.0610475,
  },
  volume: {
    liter: 1,
    milliliter: 1000,
    cubic_meter: 0.001,
    gallon: 0.264172,
    quart: 1.05669,
    pint: 2.11338,
    cup: 4.22675,
    fluid_ounce: 33.814,
    cubic_foot: 0.0353147,
    cubic_inch: 61.0237,
    barrel: 0.00628981,
  },
  temperature: {
    celsius: "c",
    fahrenheit: "f",
    kelvin: "k",
  },
  time: {
    second: 1,
    minute: 1 / 60,
    hour: 1 / 3600,
    day: 1 / 86400,
    week: 1 / 604800,
    month: 1 / 2629746,
    year: 1 / 31556952,
    decade: 1 / 315569520,
    century: 1 / 3155695200,
    millisecond: 1000,
    microsecond: 1000000,
    nanosecond: 1000000000,
  },
  data: {
    bit: 8,
    byte: 1,
    kilobyte: 1 / 1024,
    megabyte: 1 / 1048576,
    gigabyte: 1 / 1073741824,
    terabyte: 1 / 1099511627776,
    petabyte: 1 / 1125899906842624,
    exabyte: 1 / 1152921504606846976,
  },
  area: {
    square_meter: 1,
    square_kilometer: 0.000001,
    square_foot: 10.7639,
    square_yard: 1.19599,
    acre: 0.000247105,
    hectare: 0.0001,
    square_inch: 1550,
    square_mile: 3.861e-7,
    are: 0.01,
  },
  speed: {
    meter_per_second: 1,
    kilometer_per_hour: 3.6,
    mile_per_hour: 2.23694,
    knot: 1.94384,
    foot_per_second: 3.28084,
    kilometer_per_second: 0.001,
    speed_of_light: 3.33564e-9,
  },
  pressure: {
    pascal: 1,
    kilopascal: 0.001,
    bar: 0.00001,
    atmosphere: 0.00000986923,
    pound_per_square_inch: 0.000145038,
    millimeter_of_mercury: 0.00750062,
    inch_of_mercury: 0.0002953,
  },
  energy: {
    joule: 1,
    kilojoule: 0.001,
    calorie: 0.239006,
    kilocalorie: 0.000239006,
    watt_hour: 0.000277778,
    kilowatt_hour: 2.77778e-7,
    electronvolt: 6.242e18,
    british_thermal_unit: 0.000947817,
    erg: 10000000,
  },
  power: {
    watt: 1,
    kilowatt: 0.001,
    horsepower: 0.00134102,
    british_thermal_unit_per_hour: 3.41214,
    foot_pound_per_second: 0.737562,
  },
  angle: {
    degree: 1,
    radian: 0.0174533,
    gradian: 1.11111,
    arcminute: 60,
    arcsecond: 3600,
  },
};

const translations = {
  en: {
    title: "Unit Converter",
    categoryLabel: "Select category:",
    fromLabel: "From:",
    toLabel: "To:",
    inputLabel: "Enter value:",
    convertBtn: "Convert",
    categories: {
      length: "Length",
      weight: "Weight",
      volume: "Volume",
      temperature: "Temperature",
      time: "Time",
      data: "Data",
      area: "Area",
      speed: "Speed",
      pressure: "Pressure",
      energy: "Energy",
      power: "Power",
      angle: "Angle",
    },
    units: {
      meter: "meter",
      kilometer: "kilometer",
      centimeter: "centimeter",
      millimeter: "millimeter",
      mile: "mile",
      yard: "yard",
      foot: "foot",
      inch: "inch",
      nautical_mile: "nautical mile",
      light_year: "light year",
      angstrom: "angstrom",
      astronomical_unit: "astronomical unit",
      parsec: "parsec",
      kilogram: "kilogram",
      gram: "gram",
      milligram: "milligram",
      metric_ton: "metric ton",
      pound: "pound",
      ounce: "ounce",
      carat: "carat",
      stone: "stone",
      atomic_mass_unit: "atomic mass unit",
      quintal: "quintal",
      pood: "pood",
      liter: "liter",
      milliliter: "milliliter",
      cubic_meter: "cubic meter",
      gallon: "gallon",
      quart: "quart",
      pint: "pint",
      cup: "cup",
      fluid_ounce: "fluid ounce",
      cubic_foot: "cubic foot",
      cubic_inch: "cubic inch",
      barrel: "barrel",
      celsius: "Celsius",
      fahrenheit: "Fahrenheit",
      kelvin: "Kelvin",
      second: "second",
      minute: "minute",
      hour: "hour",
      day: "day",
      week: "week",
      month: "month",
      year: "year",
      decade: "decade",
      century: "century",
      millisecond: "millisecond",
      microsecond: "microsecond",
      nanosecond: "nanosecond",
      bit: "bit",
      byte: "byte",
      kilobyte: "kilobyte",
      megabyte: "megabyte",
      gigabyte: "gigabyte",
      terabyte: "terabyte",
      petabyte: "petabyte",
      exabyte: "exabyte",
      square_meter: "square meter",
      square_kilometer: "square kilometer",
      square_foot: "square foot",
      square_yard: "square yard",
      acre: "acre",
      hectare: "hectare",
      square_inch: "square inch",
      square_mile: "square mile",
      are: "are",
      meter_per_second: "meter per second",
      kilometer_per_hour: "kilometer per hour",
      mile_per_hour: "mile per hour",
      knot: "knot",
      foot_per_second: "foot per second",
      kilometer_per_second: "kilometer per second",
      speed_of_light: "speed of light",
      pascal: "pascal",
      kilopascal: "kilopascal",
      bar: "bar",
      atmosphere: "atmosphere",
      pound_per_square_inch: "pound per square inch",
      millimeter_of_mercury: "millimeter of mercury",
      inch_of_mercury: "inch of mercury",
      joule: "joule",
      kilojoule: "kilojoule",
      calorie: "calorie",
      kilocalorie: "kilocalorie",
      watt_hour: "watt-hour",
      kilowatt_hour: "kilowatt-hour",
      electronvolt: "electronvolt",
      british_thermal_unit: "British thermal unit",
      erg: "erg",
      watt: "watt",
      kilowatt: "kilowatt",
      horsepower: "horsepower",
      british_thermal_unit_per_hour: "British thermal unit per hour",
      foot_pound_per_second: "foot-pound per second",
      degree: "degree",
      radian: "radian",
      gradian: "gradian",
      arcminute: "arcminute",
      arcsecond: "arcsecond",
    },
    errorMessage: "Please enter a valid number",
    conversionError: "Unable to perform conversion. Result: NaN",
  },
  ru: {
    title: "Конвертер единиц измерения",
    categoryLabel: "Выберите категорию:",
    fromLabel: "Из:",
    toLabel: "В:",
    inputLabel: "Введите значение:",
    convertBtn: "Конвертировать",
    categories: {
      length: "Длина",
      weight: "Вес",
      volume: "Объем",
      temperature: "Температура",
      time: "Время",
      data: "Данные",
      area: "Площадь",
      speed: "Скорость",
      pressure: "Давление",
      energy: "Энергия",
      power: "Мощность",
      angle: "Угол",
    },
    units: {
      meter: "метр",
      kilometer: "километр",
      centimeter: "сантиметр",
      millimeter: "миллиметр",
      mile: "миля",
      yard: "ярд",
      foot: "фут",
      inch: "дюйм",
      nautical_mile: "морская миля",
      light_year: "световой год",
      angstrom: "ангстрем",
      astronomical_unit: "астрономическая единица",
      parsec: "парсек",
      kilogram: "килограмм",
      gram: "грамм",
      milligram: "миллиграмм",
      metric_ton: "метрическая тонна",
      pound: "фунт",
      ounce: "унция",
      carat: "карат",
      stone: "стоун",
      atomic_mass_unit: "атомная единица массы",
      quintal: "центнер",
      pood: "пуд",
      liter: "литр",
      milliliter: "миллилитр",
      cubic_meter: "кубический метр",
      gallon: "галлон",
      quart: "кварта",
      pint: "пинта",
      cup: "чашка",
      fluid_ounce: "жидкая унция",
      cubic_foot: "кубический фут",
      cubic_inch: "кубический дюйм",
      barrel: "баррель",
      celsius: "Цельсий",
      fahrenheit: "Фаренгейт",
      kelvin: "Кельвин",
      second: "секунда",
      minute: "минута",
      hour: "час",
      day: "день",
      week: "неделя",
      month: "месяц",
      year: "год",
      decade: "десятилетие",
      century: "век",
      millisecond: "миллисекунда",
      microsecond: "микросекунда",
      nanosecond: "наносекунда",
      bit: "бит",
      byte: "байт",
      kilobyte: "килобайт",
      megabyte: "мегабайт",
      gigabyte: "гигабайт",
      terabyte: "терабайт",
      petabyte: "петабайт",
      exabyte: "эксабайт",
      square_meter: "квадратный метр",
      square_kilometer: "квадратный километр",
      square_foot: "квадратный фут",
      square_yard: "квадратный ярд",
      acre: "акр",
      hectare: "гектар",
      square_inch: "квадратный дюйм",
      square_mile: "квадратная миля",
      are: "ар",
      meter_per_second: "метр в секунду",
      kilometer_per_hour: "километр в час",
      mile_per_hour: "миля в час",
      knot: "узел",
      foot_per_second: "фут в секунду",
      kilometer_per_second: "километр в секунду",
      speed_of_light: "скорость света",
      pascal: "паскаль",
      kilopascal: "килопаскаль",
      bar: "бар",
      atmosphere: "атмосфера",
      pound_per_square_inch: "фунт на квадратный дюйм",
      millimeter_of_mercury: "миллиметр ртутного столба",
      inch_of_mercury: "дюйм ртутного столба",
      joule: "джоуль",
      kilojoule: "килоджоуль",
      calorie: "калория",
      kilocalorie: "килокалория",
      watt_hour: "ватт-час",
      kilowatt_hour: "киловатт-час",
      electronvolt: "электронвольт",
      british_thermal_unit: "британская тепловая единица",
      erg: "эрг",
      watt: "ватт",
      kilowatt: "киловатт",
      horsepower: "лошадиная сила",
      british_thermal_unit_per_hour: "британская тепловая единица в час",
      foot_pound_per_second: "фут-фунт в секунду",
      degree: "градус",
      radian: "радиан",
      gradian: "град",
      arcminute: "угловая минута",
      arcsecond: "угловая секунда",
    },
    errorMessage: "Пожалуйста, введите корректное число",
    conversionError: "Невозможно выполнить конвертацию. Результат: NaN",
  },
};

const category = document.getElementById("category");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const inputValue = document.getElementById("inputValue");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");

let currentLang = "en";

function updateLanguage(lang) {
  currentLang = lang;
  document.getElementById("title").textContent = translations[lang].title;
  document.getElementById("categoryLabel").textContent =
    translations[lang].categoryLabel;
  document.getElementById("fromLabel").textContent =
    translations[lang].fromLabel;
  document.getElementById("toLabel").textContent = translations[lang].toLabel;
  document.getElementById("inputLabel").textContent =
    translations[lang].inputLabel;
  convertBtn.textContent = translations[lang].convertBtn;
  inputValue.placeholder = translations[lang].inputLabel;

  category.innerHTML = "";
  for (const [key, value] of Object.entries(translations[lang].categories)) {
    category.innerHTML += `<option value="${key}">${value}</option>`;
  }

  populateUnits();
}

function populateUnits() {
  const selectedCategory = category.value;
  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";
  for (const unit in units[selectedCategory]) {
    const translatedUnit = translations[currentLang].units[unit];
    fromUnit.innerHTML += `<option value="${unit}">${translatedUnit}</option>`;
    toUnit.innerHTML += `<option value="${unit}">${translatedUnit}</option>`;
  }
}

function convertTemperature(value, from, to) {
  if (from === to) return value;
  if (from === "celsius") {
    if (to === "fahrenheit") return (value * 9) / 5 + 32;
    if (to === "kelvin") return value + 273.15;
  }
  if (from === "fahrenheit") {
    if (to === "celsius") return ((value - 32) * 5) / 9;
    if (to === "kelvin") return ((value - 32) * 5) / 9 + 273.15;
  }
  if (from === "kelvin") {
    if (to === "celsius") return value - 273.15;
    if (to === "fahrenheit") return ((value - 273.15) * 9) / 5 + 32;
  }
}

function convert() {
  const value = parseFloat(inputValue.value);
  if (isNaN(value)) {
    showError(translations[currentLang].errorMessage);
    return;
  }

  const selectedCategory = category.value;
  const from = fromUnit.value;
  const to = toUnit.value;

  let convertedValue;
  if (selectedCategory === "temperature") {
    convertedValue = convertTemperature(value, from, to);
  } else {
    const fromValue = units[selectedCategory][from];
    const toValue = units[selectedCategory][to];
    convertedValue = (value / fromValue) * toValue;
  }

  if (isNaN(convertedValue)) {
    showError(translations[currentLang].conversionError);
  } else {
    showResult(
      `${value} ${
        translations[currentLang].units[from]
      } = ${convertedValue.toFixed(6)} ${translations[currentLang].units[to]}`
    );
  }
}

function showResult(message) {
  result.textContent = message;
  result.classList.remove("hidden", "text-red-600", "dark:text-red-400");
  result.classList.add(
    "text-indigo-600",
    "dark:text-indigo-400",
    "animate-fade-in"
  );
  setTimeout(() => {
    result.classList.remove("animate-fade-in");
  }, 500);
}

function showError(message) {
  result.textContent = message;
  result.classList.remove("hidden", "text-indigo-600", "dark:text-indigo-400");
  result.classList.add("text-red-600", "dark:text-red-400", "animate-fade-in");
  setTimeout(() => {
    result.classList.remove("animate-fade-in");
  }, 500);
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  const isDark = document.documentElement.classList.contains("dark");
  Cookies.set("theme", isDark ? "dark" : "light", { expires: 365 });
  themeToggle.classList.toggle("rotate-180", isDark);
}

function toggleLang() {
  const newLang = currentLang === "en" ? "ru" : "en";
  updateLanguage(newLang);
  Cookies.set("lang", newLang, { expires: 365 });
  langToggle.classList.toggle("rotate-180", newLang === "ru");
}

function setInitialTheme() {
  const savedTheme = Cookies.get("theme");
  if (
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    themeToggle.classList.add("rotate-180");
  }
}

function setInitialLang() {
  const savedLang = Cookies.get("lang") || "en";
  updateLanguage(savedLang);
  langToggle.classList.toggle("rotate-180", savedLang === "ru");
}

category.addEventListener("change", populateUnits);
convertBtn.addEventListener("click", convert);
inputValue.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    convert();
  }
});
themeToggle.addEventListener("click", toggleTheme);
langToggle.addEventListener("click", toggleLang);

setInitialTheme();
setInitialLang();
