function extractAndConvertToUpperCase(text) {
    // Използваме регулярен израз за намиране на всички думи в текста
    // и създаваме масив от тези думи
    const wordsArray = text.match(/\w+/g);
    
    // Използваме метода map() за преминаване през всеки елемент (дума)
    // от масива и ги превръщаме в главни букви с toUpperCase()
    const upperCaseWords = wordsArray.map(word => word.toUpperCase());
    
    // Използваме метода join() за съединяване на всички елементи
    // от масива с главни букви, разделени със запетайки и интервали
    console.log(upperCaseWords.join(', '));
}

extractAndConvertToUpperCase('Hi, how are you?')