module.exports = (template, data) => new Function('return `' + template + '`').call(data);
