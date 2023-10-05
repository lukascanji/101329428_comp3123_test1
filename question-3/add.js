const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

for (let i = 0; i < 10; i++) {
    const filePath = path.join(logsDir, `log${i}.txt`);
    fs.writeFileSync(filePath, 'Some text for the log file.');
    console.log(filePath);
}
