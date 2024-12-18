```javascript
const fs = require('node:fs');

const data = fs.readFileSync('nonexistent-file.txt', 'utf8');
console.log(data);
```