function computeScore(judgeScores, ...penalties) {
  // 1️⃣ Primero necesitamos ordenar los scores para poder eliminar el más alto y el más bajo.
  // 🧠 Pensamiento: sort() sin comparador convierte los números a strings, 
  // lo que da resultados incorrectos con números como 10 y 2.
  // Por eso usamos (a, b) => a - b para ordenar correctamente de menor a mayor.
  // 📚 Documentación: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  judgeScores.sort((a, b) => a - b);

  // 2️⃣ Ahora queremos quedarnos solo con los 8 scores "del medio".
  // slice() permite tomar una porción del array sin modificar el original.
  // slice(inicio, fin) toma desde 'inicio' hasta 'fin - 1', así que slice(1, 9) quita el primero y el último.
  // 📚 Documentación: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  let scores = judgeScores.slice(1, 9);

  // 3️⃣ Sumamos los 8 scores del medio para obtener el base score.
  // reduce() permite recorrer un array y acumular un valor (aquí la suma).
  // La función reduce recibe un callback (a, b) => a + b y un valor inicial 0.
  // 📚 Documentación: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  let totalScore = scores.reduce((a, b) => a + b, 0);

  // 4️⃣ Sumamos todas las penalizaciones que vienen como argumentos extra.
  // El operador rest (...penalties) agrupa todos los argumentos restantes en un array.
  // Así podemos sumarlos con reduce.
  // 📚 Documentación: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
  let totalPenalties = penalties.reduce((a, b) => a + b, 0);

  // 5️⃣ Calculamos el score final restando las penalizaciones al base score.
  // 🧠 Pensamiento: primero resolvemos la base (suma de 8 scores) y luego aplicamos todas las penalizaciones.
  let score = totalScore - totalPenalties;

  // 6️⃣ Devolvemos el resultado final.
  return score;
}
