//array chuyên mục
var categories = [
    { name: "Thời trang", parent: "4", sizePosts: 20 },
    { name: "Tin tuyển sinh", parent: "1", sizePosts: 15 }
]

//array chuyên mục lớn
var ParentCategories = {
    "Giáo dục": "1",
    "Thể thao": "2",
    "Công nghệ": "3",
    "Giải trí": "4",
    "Sức khỏe": "5"
};

//array nhãn tag
var tags = [
    { name: "Thời sự", sizePosts: 20 },
    { name: "Bóng đá", sizePosts: 15 }
]

var isDeletingCategory = 0; // Đang delete giá trị là 1
var isDeletingTag = 0;

var rowIndex = 0;

//-------------
var dropdown = document.getElementsByClassName("dropdown");
var i;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}





// Chuyên mục -----------------------------------------------------------------------------------------
function openAddCategory() {
    document.getElementById('CategoryModalLabel').innerHTML = "Thêm chuyên mục";
    document.getElementById('btnEdit').style.display = "none";
    document.getElementById('btnAdd').style.display = "inline-block";
    document.getElementById("parent-category").value = "1";
    document.getElementById("txtCategory").value = "";
}

function openEditCategory(r) {
    if(isDeletingCategory === 1)
    {
        return;
    }
    rowIndex = r.rowIndex;
    var table = document.getElementById("tableCategory");
    var category = document.getElementById("txtCategory");
    var parentCategory = document.getElementById("parent-category");
    document.getElementById('CategoryModalLabel').innerHTML = "Chỉnh sửa chuyên mục";
    document.getElementById('btnEdit').style.display = "inline-block";
    document.getElementById('btnAdd').style.display = "none";
    //Set giá trị tương ứng với row được click
    // console.log(ParentCategories[table.rows[r.rowIndex].cells[2].innerHTML]);
    category.value = table.rows[r.rowIndex].cells[1].innerHTML;
    parentCategory.value = ParentCategories[table.rows[r.rowIndex].cells[2].innerHTML];
    $('#CategoryModal').modal('show');
}

function openDeleteCategory() {
    var btnAdd = document.getElementById("addCategory");
    var btnDelete = document.getElementById("deleteCategory");
    var colDelete = document.getElementsByClassName("colDeleteCategory");
    if (colDelete[0].style.display === "table-cell") {//đang thưc hiện delete

        isDeletingCategory = 0;

        btnAdd.style.display = "inline-block";
        btnDelete.style.backgroundColor = "#007bff";
        btnDelete.innerHTML = "Xóa";
        for (var i = 0; i < colDelete.length; i++) {
            colDelete[i].style.display = "none";
        }
    }
    else {
        isDeletingCategory = 1;

        btnAdd.style.display = "none";
        btnDelete.style.backgroundColor = "#dc3545";
        btnDelete.innerHTML = "Hoàn tất";
        for (var i = 0; i < colDelete.length; i++) {
            colDelete[i].style.display = "table-cell";
        }
    }
}

function addCategory() {
    var table = document.getElementById("tableCategory");
    let category = document.getElementById("txtCategory");
    let parentCategory = document.getElementById("parent-category");
    //insert vào đầu bảng
    var row = table.insertRow(1);
    row.onclick = function () { openEditCategory(this) };
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = 1;
    cell2.innerHTML = category.value;
    cell3.innerHTML = parentCategory.options[parentCategory.selectedIndex].text;
    cell4.innerHTML = "0";
    cell5.innerHTML = '<button class="btn btn-danger" onclick=deleteCategory(this)><i class="fa fa-trash" aria-hidden="true"></i></button>';
    cell5.className = "colDeleteCategory";
    //Thêm vào array categories
    categories.unshift({ name: category.value, parent: parentCategory.options[parentCategory.selectedIndex], sizePosts: 0 });
    //Chỉnh lại số thứ tự
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = i;
    }
    $('#CategoryModal').modal('hide');
}


function editCategory() {
    var table = document.getElementById("tableCategory");
    let category = document.getElementById("txtCategory");
    let parentCategory = document.getElementById("parent-category");
    //Set lại giá trị của phần tử trong array
    categories[rowIndex-1].name = category.value;
    categories[rowIndex-1].parent = parentCategory.options[parentCategory.selectedIndex].value;
    //update table
    table.rows[rowIndex].cells[1].innerHTML = category.value;
    table.rows[rowIndex].cells[2].innerHTML = parentCategory.options[parentCategory.selectedIndex].text;
    $('#CategoryModal').modal('hide');
}

function deleteCategory(r) {
    var index = r.parentNode.parentNode.rowIndex;
    var table = document.getElementById("tableCategory");
    //Xóa array 
    categories.splice(r.insertRow - 1);
    
    table.deleteRow(index);
    for (var i = index; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = i;
    }
}

// Nhãn tag -----------------------------------------------------------------------------------------
function openAddTag() {
    document.getElementById('TagModalLabel').innerHTML = "Thêm nhãn tag";
    document.getElementById('btnEdit').style.display = "none";
    document.getElementById('btnAdd').style.display = "inline-block";
    document.getElementById("txtTag").value = "";
}

function openEditTag(r) {
    if(isDeletingTag === 1)
    {
        return;
    }
    rowIndex = r.rowIndex;
    var table = document.getElementById("tableTag");
    var tag = document.getElementById("txtTag");
    document.getElementById('TagModalLabel').innerHTML = "Chỉnh sửa nhãn tag";
    document.getElementById('btnEdit').style.display = "inline-block";
    document.getElementById('btnAdd').style.display = "none";
    //Set giá trị tương ứng với row được click
    // console.log(ParentCategories[table.rows[r.rowIndex].cells[2].innerHTML]);
    tag.value = table.rows[r.rowIndex].cells[1].innerHTML;
    $('#TagModal').modal('show');
}

function openDeleteTag() {
    var btnAdd = document.getElementById("addTag");
    var btnDelete = document.getElementById("deleteTag");
    var colDelete = document.getElementsByClassName("colDeleteTag");
    if (colDelete[0].style.display === "table-cell") {//đang thưc hiện delete

        isDeletingTag = 0;

        btnAdd.style.display = "inline-block";
        btnDelete.style.backgroundColor = "#007bff";
        btnDelete.innerHTML = "Xóa";
        for (var i = 0; i < colDelete.length; i++) {
            colDelete[i].style.display = "none";
        }
    }
    else {
        isDeletingTag = 1;

        btnAdd.style.display = "none";
        btnDelete.style.backgroundColor = "#dc3545";
        btnDelete.innerHTML = "Hoàn tất";
        for (var i = 0; i < colDelete.length; i++) {
            colDelete[i].style.display = "table-cell";
        }
    }
}


function addTag() {
    var table = document.getElementById("tableTag");
    let tag = document.getElementById("txtTag");
    //insert vào đầu bảng
    var row = table.insertRow(1);
    row.onclick = function () { openEditTag(this) };
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = 1;
    cell2.innerHTML = tag.value;
    cell3.innerHTML = "0";
    cell4.innerHTML = '<button class="btn btn-danger" onclick=deleteTag(this)><i class="fa fa-trash" aria-hidden="true"></i></button>';
    cell4.className = "colDeleteTag";
    //Thêm vào array categories
    tags.unshift({ name: tag.value, sizePosts: 0 });
    //Chỉnh lại số thứ tự
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = i;
    }
    $('#TagModal').modal('hide');
}


function editTag() {
    var table = document.getElementById("tableTag");
    let tag = document.getElementById("txtTag");
    //Set lại giá trị của phần tử trong array
    tags[rowIndex-1].name = tag.value;
    //update table
    table.rows[rowIndex].cells[1].innerHTML = tag.value;
    $('#TagModal').modal('hide');
}

function deleteTag(r) {
    var index = r.parentNode.parentNode.rowIndex;
    var table = document.getElementById('tableTag');
    //Xóa array 
    tags.splice(r.insertRow - 1);
    
    table.deleteRow(index);
    for (var i = index; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = i;
    }
}