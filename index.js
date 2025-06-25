// my-app-server/index.js
    const express = require('express');
    const cors = require('cors');
    const multer = require('multer');
    const path = require('path');

    const app = express();
    const port = 5000;

    app.use(cors()); // Enable CORS for cross-origin requests

    app.use('/public', express.static(path.join(__dirname, 'public')));

    // Set up multer for file upload
    const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
        });
    const upload = multer({ storage });

    const vijaydata = [{ id: 100, name: 'Vijay' }, { id: 200, name: 'Prathima', imageURL: "public/Vayuputra.jpg" }];

    app.get('/api/items', (req, res) => {
        res.json(vijaydata); // Send JSON data
    });

    app.listen(port, () => {
        console.log(`Vijay Server running on http://localhost:${port}`);
    });