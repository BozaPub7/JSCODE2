const sortOrder = [true, true, true]; 

function sortTable(columnIndex) {
    const table = document.getElementById("tabela");
    const rows = Array.from(table.querySelectorAll("tbody tr"));
    const isNumeric = columnIndex === 0;

    sortOrder[columnIndex] = !sortOrder[columnIndex];

    for (let i = 0; i < rows.length - 1; i++) {
        let selectedIndex = i;

        for (let j = i + 1; j < rows.length; j++) {
            const cellA = rows[selectedIndex].cells[columnIndex].innerText.trim();
            const cellB = rows[j].cells[columnIndex].innerText.trim();

            let comparisonResult;

            if (isNumeric) {
                const numA = parseInt(cellA);
                const numB = parseInt(cellB);
                comparisonResult = sortOrder[columnIndex] ? numA - numB : numB - numA;
            } else {
                comparisonResult = sortOrder[columnIndex] 
                    ? cellA.localeCompare(cellB) 
                    : cellB.localeCompare(cellA);
            }
        }

        if (selectedIndex !== i) {
            const temp = rows[i];
            rows[i] = rows[selectedIndex];
            rows[selectedIndex] = temp;
        }
    }

    rows.forEach(row => table.querySelector("tbody").appendChild(row));
}
