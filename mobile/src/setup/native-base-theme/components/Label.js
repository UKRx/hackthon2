import variable from "./../variables/platform";

export default (variables = variable) => {
  const labelTheme = {
    ".focused": {
      width: 0
    },
    fontSize: 16,
    fontFamily: variables.fontFamily
  };

  return labelTheme;
};
