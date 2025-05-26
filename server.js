import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mail from "./sendMail.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3500;

// Serve static files from the static directory
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());

// Serve robots.txt and sitemap.xml
app.get('/robots.txt', (req, res) => {
    res.sendFile(path.join(__dirname, 'robots.txt'));
});

app.get('/sitemap.xml', (req, res) => {
    res.sendFile(path.join(__dirname, 'sitemap.xml'));
});

// Serve HTML files from root directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/vozidla', (req, res) => {
    res.sendFile(path.join(__dirname, 'vozidla.html'));
});

app.get('/onas', (req, res) => {
    res.sendFile(path.join(__dirname, 'onas.html'));
});

app.get('/podmienky', (req, res) => {
    res.sendFile(path.join(__dirname, 'podmienky.html'));
});

app.get('/kontakt', (req, res) => {
    res.sendFile(path.join(__dirname, 'kontakt.html'));
});

app.get('/rezervacia', (req, res) => {
    res.sendFile(path.join(__dirname, 'rezervacia.html'));
});

app.get('/potvrdenie', (req, res) => {
    res.sendFile(path.join(__dirname, 'potvrdenie.html'));
});

app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'faq.html'));
});

app.post("/posliObjednavku",(req,res) => {
    const statusClient = mail.sendMailClient(req.body)
    if (!statusClient) {
        res.status(500).json({message: "Internal server error, skúste znova neskôr alebo nás kontaktujte!"})
    }
    const statusAdmin = mail.sendMailAdmin(req.body)
    if (statusAdmin) {
        res.status(200).json({message: "success"})
    }
    res.status(500).json({message: "Internal server error, skúste znova neskôr alebo nás kontaktujte!"})
});
app.post("/supportMail",(req,res) => {
    const statusMessage = mail.sendSupportMail

    res.status(200).json({message: "success"})
    res.status(500).json({message: "Internal server error, skúste znova neskôr alebo nás kontaktujte!"})
});
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '404.html'));
});

app.use((err, req, res, next) => {
    res.sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 