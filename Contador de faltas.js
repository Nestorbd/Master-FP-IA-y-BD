// Selecciona la tabla por su clase
const table = document.querySelector('.data-table');

// Obtiene todas las filas de la tabla
const rows = table.querySelectorAll('tbody tr');

// Objeto para contar las apariciones de cada materia
const subjectCount = {};

// Itera a través de cada fila en la tabla
rows.forEach(row => {
    // Selecciona todas las celdas en la fila
    const cells = row.querySelectorAll('td');
    // Verifica si la fila tiene celdas
    if (cells.length > 0) {
        // La materia está en la segunda celda (índice 1)
        const subject = cells[1].textContent.trim();
        // Verifica si la materia ya está en el objeto
        if (subjectCount[subject]) {
            // Incrementa el contador para la materia existente
            subjectCount[subject]++;
        } else {
            // Inicializa el contador para una nueva materia
            subjectCount[subject] = 1;
        }
    }
});

// Imprime las apariciones de cada materia
for (const [subject, count] of Object.entries(subjectCount)) {
    console.log(subject + ': ' + count);
}
