function calcAverageHumanAge(ages) {
    // 1. Chuyển đổi tuổi chó thành tuổi người
    const humanAges = ages.map(function(age) {
      if (age <= 2) {
        return age * 2;
      } else {
        return 16 + age * 4;
      }
    });
  
    // 2. Loại trừ các con chó dưới 18 tuổi
    const adultHumanAges = humanAges.filter(function(age) {
      return age >= 18;
    });
  
    // 3. Tính tuổi trung bình của các con chó trưởng thành
    const sum = adultHumanAges.reduce(function(acc, age) {
      return acc + age;
    }, 0);
    const averageHumanAge = sum / adultHumanAges.length;
  
    // 4. Trả về tuổi trung bình của các con chó trưởng thành
    return averageHumanAge;
  }
  
  // Test Data 1
  const ages1 = [5, 2, 4, 1, 15, 8, 3];
  const averageAge1 = calcAverageHumanAge(ages1);
  console.log(`Tuổi trung bình của các con chó trưởng thành là: ${averageAge1}`);
  
  // Test Data 2
  const ages2 = [16, 6, 10, 5, 6, 1, 4];
  const averageAge2 = calcAverageHumanAge(ages2);
  console.log(`Tuổi trung bình của các con chó trưởng thành là: ${averageAge2}`);