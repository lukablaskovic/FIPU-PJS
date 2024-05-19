const fs = require('fs');

fs.readFile('harry_potter.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const podaci = JSON.parse(data);
    console.log(podaci["harry_potter_books"][0]);
});