export const runClass = (text, myElement) => {
  const className = text.split(" ");

  className.forEach((classList, index) => {
    if (index === className.length - 1) {
      className[index] = `'${classList}'`;
    } else {
      className[index] = `'${classList}',`;
    }

    myElement.classList.add(classList.replace(/['",]/g, ""));
  });
};
