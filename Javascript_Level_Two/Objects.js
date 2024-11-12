// objects

carInfo = {Brand:"TATA",year:"2004",Price:'200000'}

console.log(carInfo["Brand"])

carInfo["year"] = 2005
carInfo["year"] += 1
console.log(carInfo)

// Flexible data types
var data = {a: "Hi",b:[1,2,3,4,5],c:{'inside':[4,5,["weird"]]}}
console.log(data['b'][2])


//show entair object
console.dir(carInfo)

//Iterate through object
for (k in carInfo){
    // There is no order
    console.log(k)
    console.log(carInfo[k])
}

// Besides key-value pairs for normal data types, you can add in methods!
var carInfo = {
    make: "Toyota",
    year: 1990 ,
    model: "Camry" ,
    carAlert: function(){
      alert("We've got a car here!")
    }
  };
  
  // Then you can call it!
  carInfo.carAlert()

// But what if you (more realistically) want to actually reference an object's
// key-value pairs. For instance, if we want ot include this in our alert?

var obj = {
    name : "purna",
    greet : function(){
        console.log("Hello "+this.name)
    }
}

obj.greet()
console.log(obj["name"])