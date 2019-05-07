/**
 * @param {FormData} data
 * @param data
 */
module.exports.formDataToObject = data => {
    const obj = {};

    for (const [key, value] of data.entries()) {
        obj[key] = value;
    }

    return obj;
};
