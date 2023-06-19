let array = ["arroz", "feijão", "macarrão", "batata"];
let arrayM = [];

for (let i = 0; i < array.length; i++) {
    let retornar = array[i].toUpperCase();
    arrayM.push(retornar);
  }

  console.log(arrayM);