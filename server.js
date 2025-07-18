const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// เสิร์ฟไฟล์ static จากโฟลเดอร์เดียวกับไฟล์ index.js
app.use(express.static(__dirname));

// ถ้าอยากให้เปิดหน้า index.html เมื่อเข้า /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
