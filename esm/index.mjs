export default function stringTemplator (template, data) {
  return new Function('return `' + template + '`').call(data);
};
