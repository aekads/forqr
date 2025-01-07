const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Define the root route
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server
const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
