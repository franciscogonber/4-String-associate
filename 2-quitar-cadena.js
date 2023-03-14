function removeSameLength(arr) {
  let result = [];
  
  // Itera por cada cadena en arr
  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;
    
    // Verifica si la longitud de la cadena es única en todo el array
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i].length === arr[j].length) {
        isUnique = false;
        break;
      }
    }
    
    // Agrega la cadena únicamente si su longitud no se encuentra previamente en el array result
    if(isUnique && !result.includes(arr[i])) {
      result.push(arr[i]);
    }// Ejemplo 1
    const arr1 = ["ana", "Jose", "fio", "pedro","edr0","kk","juan"];
    console.log("removeSameLength(arr1)"); // Output: ["kk"]
    
    // Ejemplo 2
    const arr2 =["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."];
    console.log(removeSameLength(arr2)); // Output: ["Nope!", "Its", "Chris", "."]
    
  }
  
  return result;
}
