function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if (i === 1){
      array.push("I am 1 strange loop.")
    }
    else{
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

//console.log(forLoop([]));
function whileLoop(n){
  while(n > 0){
    console.log(n--)
  }
  return "done"
}

//whileLoop(10)
function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    if (){
      array.pop()
    }
  } while (array.length != 0 && maybeTrue() != false);
  return array
}
