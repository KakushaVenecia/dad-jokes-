const axios = require('axios');

module.exports = (app) => {
    app.get('/api/joke', async (req, res) => {
      try {
        const response = await axios.get('https://dad-jokes.p.rapidapi.com/random/joke', { 
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': 'e4e932e9ffmsha66de850a2395a9p184347jsn0851319be148',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
          }
        });
        console.log(response.data);
        const joke = response.data.body[0].setup + '    ' + response.data.body[0].punchline;
        res.send(joke);
        // res.send(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).send('An error - No dad joke retrieved');
      }
    });
  };