const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    // ...
  ];
  
  // Yêu cầu 1
  dogs.forEach(function(dog) {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  });
  
  // Yêu cầu 2
  const sarahDog = dogs.find(function(dog) {
    return dog.owners.includes('Sarah');
  });
  
  console.log(sarahDog.curFood > sarahDog.recommendedFood ? "Sarah's dog eats too much!" : "Sarah's dog eats too little!");
  
  // Yêu cầu 3
  const ownersEatTooMuch = dogs.filter(function(dog) {
    return dog.curFood > dog.recommendedFood;
  }).flatMap(function(dog) {
    return dog.owners;
  });
  
  const ownersEatTooLittle = dogs.filter(function(dog) {
    return dog.curFood < dog.recommendedFood;
  }).flatMap(function(dog) {
    return dog.owners;
  });
  
  // Yêu cầu 4
  console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
  console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
  
  // Yêu cầu 5
  const isExactRecommendedFood = dogs.some(function(dog) {
    return dog.curFood === dog.recommendedFood;
  });
  console.log(isExactRecommendedFood); // true hoặc false
  
  // Yêu cầu 6
  const isProperFoodAmount = dogs.every(function(dog) {
    return dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;
  });
  console.log(isProperFoodAmount); // true hoặc false
  
  // Yêu cầu 7
  const dogsWithProperFoodAmount = dogs.filter(function(dog) {
    return dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;
  });
  console.log(dogsWithProperFoodAmount);
  
  // Yêu cầu 8
  const sortedDogs = dogs.slice().sort(function(a, b) {
    return a.recommendedFood - b.recommendedFood;
  });
  console.log(sortedDogs);