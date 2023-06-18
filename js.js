let a = document.getElementById("srch")
function searchOn()
{
   a.style.display="flex"
   c.style.display="none"
}

function searchOff()
{
    a.style.display="none"
}

let b = document.querySelector(".ssrch_input")
function searchSend()
{
    
    b.value = ""

}




let c = document.getElementById('contwindow')
function constwindowOn()
{
   
    a.style.display="none"
    c.style.display="flex"
}
function constwindowOff()
{
    c.style.display="none"
}




let contint = document.querySelector("#contwindow_childintxtt")
let contintt=document.querySelector("#contwindow_childintxttt")
let conttxt = document.querySelector("#cont_textarea")
let excelval=document.querySelector("#excellent")
function excelvalue()
{
    excelval.style.display="flex"
    c.style.display="none"
}
function excelvalueOff()
{
    c.style.display="flex"
    excelval.style.display="none"
    contintt.value=""
    contint.value=""
    conttxt.value=""
}






