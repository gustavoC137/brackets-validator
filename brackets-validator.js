function validarOrdemDosColchetesRegex(string) {
  const regex = /(\(\)|\{\}|\[\])+/;
  while (regex.test(string)) {
    string = string.replace(regex, '');
  }
  return string.length === 0;
}
