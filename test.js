const assert = require('assert');
const catchErrorAsync = require('.');

const cb = async (message, code) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => reject({ message, code }), 0);
    });
};

describe('Catching async error', () => {
    it('should catch error', async () => {
        const error = await catchErrorAsync(cb, 'Mu-ha-ha!', 400);

        assert.equal(error.message, 'Mu-ha-ha!');
        assert.equal(error.code, 400);
    });
});
