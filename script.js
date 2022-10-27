function showDisplay(number) {

   const vDisplay = document.querySelector(".display").value
   
   console.log(vDisplay)

   document.querySelector(".display").value = vDisplay + number
   
}


function cleanDocument() {

    document.querySelector(".display").value = ""
}


function result() {

    const vDisplay = document.querySelector(".display").value 

    document.querySelector(".display").value = eval(vDisplay)

}


function reverseNumber() {

    const vDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = vDisplay * -1


}