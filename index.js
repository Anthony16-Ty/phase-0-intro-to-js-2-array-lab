var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
   }
   function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
  }
  
  function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
  }
  
  function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
  }
  
  function appendCat(name){
    var a= [...cats,name];
    return a;
  }
  
  function prependCat(name){
    var b=[name, ...cats];
    return b;
  }
  
  function removeLastCat(){
    var catsA= cats.slice(0,cats.length-1);
    return catsA;
  }
  
  function removeFirstCat(){
    var catsA= cats.slice(1)
    return catsA;
  }

   


