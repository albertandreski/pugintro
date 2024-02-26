const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Imposta Pug come motore di rendering
app.set('view engine', 'pug');
app.set('views', './views');

// Definisci una rotta per la schermata home
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// Definisci una rotta dinamica per altre pagine
app.get('/pagina/:id', (req, res) => {
  const id = req.params.id;
  // In base all'id, puoi fare ciò che desideri per renderizzare dinamicamente la pagina
  res.render('pagina', { title: 'Pagina Dinamica', id });
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});