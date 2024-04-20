function addEntries()
{
    let table = document.getElementById('taskListTable');
    let lastRow = parseInt(document.getElementById('taskListTable').rows.length);
    let row = table.insertRow(lastRow);
    let input = document.getElementById('addListInput').value;
    let cell = row.insertCell(0);
    cell.innerHTML = input + '&emsp;' +'<button class="btn bg-primary text-white " onclick="deleteEntries()">Add</button>';
}

function deleteEntries()
{
    document.getElementById("taskListTable").deleteRow();
}