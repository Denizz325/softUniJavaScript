function solve() {
  text = document.getElementById("text").value;
  nameConvention = document.getElementById('naming-convention').value;
  const resultContainer = document.getElementById('result')
  message = '';

  const splitted = text.split(' ')

  if (nameConvention == 'Camel Case') {
    message += splitted[0][0].toLowerCase() + 
    splitted[0].slice(1, splitted[0].length).toLowerCase();

    for (let i = 1; i < splitted.length; i++) {
      message += splitted[i][0].toUpperCase() + 
      splitted[i].slice(1, splitted[i].length).toLowerCase();

    }

    resultContainer.textContent = message

  } else if (nameConvention == 'Pascal Case') {
    for (let i = 0; i < splitted.length; i++) {
      message += splitted[i][0].toUpperCase() + 
      splitted[i].slice(1, splitted[i].length).toLowerCase();

    }

    resultContainer.textContent = message

  } else {
    resultContainer.textContent = 'Error!';
  }



}