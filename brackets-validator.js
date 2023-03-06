/*
* A regex is applied on each iteration and the pattern found is stripped from the string.
* If at the end of the loop the string is empty, true is returned to the validator.
* */
function validarOrdemDosColchetesRegex(string) {
  const regex = /(\(\)|\{\}|\[\])+/;
  while (regex.test(string)) {
    string = string.replace(regex, '');
  }
  return string.length === 0;
}
