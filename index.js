module.exports = async (cb, ...args) => {
    try {
        await cb(...args);
    } catch (error) {
        return error;
    }

    throw new Error('Should throw error');
};
