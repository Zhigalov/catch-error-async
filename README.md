# Catching errors throwed by async function

### Example
```js
const catchErrorAsync = require('catch-error-async');

// throw error with `message` and `code` from arguments
const cb = async (message, code) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => reject({ message, code }), 0);
    });
};

const error = await catchErrorAsync(cb, 'Mu-ha-ha!', 400);

console.log(error.message); // 'Mu-ha-ha!'
console.log(error.code); // 400
```
