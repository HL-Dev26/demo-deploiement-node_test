const express = require("express");
const app = express();

// Configuration
const PORT = process.env.PORT || 3000;
const VERSION = process.env.MY_APP_VERSION || "1.0.0";

// Middleware simple de log
app.use((req, res, next) => {
  console.log(`[${VERSION}] ${req.method} ${req.url}`);
  next();
});

// Route principale
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Deploy Demo</title>
      </head>
      <body style="font-family: Arial; background-color:lightgray; padding:40px;">
        <h1>Application déployée</h1>
        <h2>Version : ${VERSION}</h2>
        <p>Port : ${PORT}</p>
        <p>Date : ${new Date().toLocaleString()}</p>
      </body>
    </html>
  `);
});

// Health check (important pédagogiquement)
app.get("/test", (req, res) => {
  res.status(200).json({
    status: "UP",
    version: VERSION,
    timestamp: new Date().toISOString()
  });
});

// Exportez l'objet app SANS le listen
module.exports = app;

// Lancez le serveur uniquement si le fichier est exécuté directement
if (require.main === module) {
  app.listen(3000, () => console.log("Running on 3000"));
}