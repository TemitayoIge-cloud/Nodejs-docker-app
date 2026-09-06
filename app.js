const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Node.js + Docker Deployment</title></head>
      <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 80px;">
        <h1>🚀 Node.js App Running in Docker</h1>
        <p>Deployed via GitHub → Linux (AWS EC2) → Docker → Docker Hub</p>
        <p><strong>Hostname (container ID):</strong> ${os.hostname()}</p>
        <p><strong>Server time:</strong> ${new Date().toISOString()}</p>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
