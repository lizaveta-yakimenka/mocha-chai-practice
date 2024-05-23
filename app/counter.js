var createCounter = function(init) {
    const value = init;
    return {
        increment: () => {
            return ++init;
        },
        decrement: () => {
            return --init;
        },
        reset: () => {
            init = value;
            return value;
        }
    };
};

module.exports = createCounter;