function addEntries()
{
    // Getting the Table whose ID is taskListTable
    let table = document.getElementById('taskListTable');

    // Retrieving row count
    let lastRow = parseInt(document.getElementById('taskListTable').rows.length);
    
    // Inserting new row
    let row = table.insertRow(lastRow);
    row.classList.add('table-info');
    
    // Obtaining the value from input
    let input = document.getElementById('addListInput').value;
    
    // Introducing value in a cell
    let cell = row.insertCell(0);

    // Introducing value in new cell being what has been placed on input with a button
    cell.innerHTML = input + '&emsp;' + '<button class="btn bg-primary text-white btn-delete">' + '<i class="fa-solid fa-trash-can"></i>' + '</button>';

    // Element for deleting a specific row
    row.querySelector('.btn-delete').addEventListener('click', deleteRow);
}

function deleteRow(event) 
{
    let row = event.target.closest('tr');
    row.remove();
}