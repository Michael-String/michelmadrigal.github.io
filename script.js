var selectedRow = null
function onFormSubmit(e){ 
    event.preventDefault();
        var formData = readFormData();
   if(selectedRow == null){ 
         insertNewRecord(formData);
    }
    else{ 
         updateRecord(formData);
   }
   resetForm();
}

//Recuperar los datos
function readFormData(){ 
    var formData = {};
    formData["articleCode"] = document.getElementById("articleCode").value;
    formData["article"] = document.getElementById("article").value;
    formData["quantity"] = document.getElementById("quantity").value;
    formData["perCost"] = document.getElementById("perCost").value;
    return formData;
}

//Inserta los datos
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.articleCode;
    cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.article;
    cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.quantity;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.perCost;
    cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
}

//Editar los datos
function onEdit(td){ 
    selectedRow = td.parentElement.parentElement;
    document.getElementById('articleCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('article').value = selectedRow.cells[1].innerHTML;
    document.getElementById('quantity').value = selectedRow.cells[2].innerHTML;
    document.getElementById('perCost').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){ 
    selectedRow.cells[0].innerHTML = formData.articleCode;
    selectedRow.cells[1].innerHTML = formData.article;
    selectedRow.cells[2].innerHTML = formData.quantity;
    selectedRow.cells[3].innerHTML = formData.perCost;
}

//Eliminar los datos
function onDelete (td){ 
    if(confirm('¿Quieres eliminar este registro?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex); 
     }
     resetForm();
}

//Resetear los datos
function resetForm(){ 
    document.getElementById('articleCode').value = '';
    document.getElementById('article').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('perCost').value = '';
}