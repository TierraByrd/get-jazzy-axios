const express = require('express');

const app = express();
const PORT = 5001;

const musicList =require('/musicList.js')


app.use(express.static('server/public'));



app.get('/artist', (req, res) => {
  let artist = [];
    res.send(artistListArray);

  });

  app.get('/artists', (req, res) => {
    let artists = []
  
    //* Loop over quote and extract names, push to 'authors' array
    for (let music of musicList) {
      console.log("Current music", music)
      artists.push(.author)
    }
  
    console.log("Author list...", authors)
  
    // * Respond with authors data
    res.send(authors)
  })

// TODO - Add GET for songs

app.get('/title', (req, res)=> {
    let titles = []
    for (let music of musicList) {
      console.log("Current artist", musicList)
    titles.push(.title)}
    
    res.send(musicList)
  })
app.listen(PORT, () => {
    console.log('listening on port', PORT)
});
