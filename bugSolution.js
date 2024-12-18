```javascript
const fs = require('node:fs');

try {
  const data = fs.readFileSync('nonexistent-file.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Error reading file:', err);
}
```