fetch('https://jsonplaceholder.typicodasde.com/todos/1')
      .then(function(response) { // response kao argument je rezultat fetch metode
          return response.json();
      })
      .then(function(json) { // json kao argument je rezultat prethodne then metode
          console.log(json);
      })
      .catch(function(error) { // error kao argument je rezultat greške
          console.error('Greška:', error);
      });