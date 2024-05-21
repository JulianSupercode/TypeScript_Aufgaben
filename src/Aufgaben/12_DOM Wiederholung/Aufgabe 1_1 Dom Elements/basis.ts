// basis.ts

// Warten, bis das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', function () {
    // Referenz auf den Button und das Input-Feld
    const addButton = document.querySelector('button');
    const inputText = document.getElementById('inputText') as HTMLInputElement;
    const list = document.getElementById('myList');

    // Eventlistener für den Button hinzufügen
    addButton?.addEventListener('click', function () {
        // Wert des Input-Felds erhalten und sicherstellen, dass es nicht leer ist
        const newItemText = inputText.value.trim();
        if (newItemText !== '') {
            // Neues Listenelement erstellen
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;

            // Listenelement der Liste hinzufügen
            list?.appendChild(newItem);

            // Input-Feld leeren
            inputText.value = '';
        }
    });
});