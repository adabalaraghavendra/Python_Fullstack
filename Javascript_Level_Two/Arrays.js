countries = ["USA","GERMANY","INDIA"]

console.log(countries[1])
// last Item in array

lastItem = countries.pop()
console.log(lastItem)

// adding element to a list

countries.push("Italy")
console.log(countries)

//Nested Array

matrix = [[1,2,3],[4,5,6],[7,8,9]]

console.log(matrix.length)

//array iteration

array = ["A","B","C","D"]

for (let index = 0; index < array.length; index++) {
    console.log( array[index]);
}

for (letter of array){
    console.log(letter)
    alert(letter)
}

function addText(letter){
      console.log(letter+" is a alphabet")
}

array.forEach(addText)