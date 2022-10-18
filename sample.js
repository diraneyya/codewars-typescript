const change = (param) => {
  const changedStr = param.split("");
  let newStr = "";
  for (let i = 0; i < changedStr.length; i++) {
    ;
    if (changedStr[i] === "-" || changedStr[i] === "_") {
      newStr += changedStr[i + 1].toUpperCase();
      i += 1;
    } else {
      newStr += changedStr[i];
    }
  }
  return newStr;
};

change('I_am_about_to-have-an-interview')
