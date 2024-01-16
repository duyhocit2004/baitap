// Hàm chuyển đổi từ kiểu underscore_case sang camelCase
function convertToCamelCase(text) {
    const words = text.split('_');
    const camelCaseWords = words.map((word, index) => {
      if (index === 0) {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    });
    return camelCaseWords.join('');
  }
  
  // Đoạn văn bản đầu vào
  const inputText = `
  underscore_case
  first_name
  Some_Variable
  calculate_AGE
  delayed_departure
  `;
  
  // Tách các dòng văn bản và chuyển đổi sang camelCase
  const lines = inputText.trim().split('\n');
  for (const line of lines) {
    const camelCase = convertToCamelCase(line);
    const checkmarks = '✅'.repeat(camelCase.length);
    console.log(`${camelCase} ${checkmarks}`);
  }