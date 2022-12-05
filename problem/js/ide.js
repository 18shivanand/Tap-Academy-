let editor;

window.onload = function () {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/c_cpp");
}

function changeLanguage() {

    let language = $("#languages").val();

    if (language == 'c' || language == 'cpp') editor.session.setMode("ace/mode/c_cpp");
    else if (language == 'php') editor.session.setMode("ace/mode/php");
    else if (language == 'python') editor.session.setMode("ace/mode/python");
    else if (language == 'java') editor.session.setMode("ace/mode/java");
}

function executeCode() {
    document.getElementById("defaultOpen").click();

    $.ajax({
        url: "/ide/app/compiler.php",

        method: "POST",

        data: {
            cusin: document.getElementById('txt1').value,
            language: $("#languages").val(),
            code: editor.getSession().getValue()
        },

        success: function (response) {
            let res = response
            $(".output").text(res)
            console.log(res)

        }
    })

}

// function dynamic() {
//     const x = document.getElementById("txt");
//     if (x.style.visibility === "hidden") {
//         x.style.visibility = "visible";
//     } else {
//         x.style.visibility = "hidden";
//     }
//
// }
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


