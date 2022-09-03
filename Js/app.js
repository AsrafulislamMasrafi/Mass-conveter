// Variables
const categorySelect = document.getElementById("category-select");

window.onload = function () {
  main();
};

// Data object
const converter = {
  area: {
    name: "Area",
  },
  mass: {
    name: "Mass",
  },
  length: {
    name: "Length",
  },
  time: {
    name: "Time",
  },
  volume: {
    name: "Volume",
  },
  dataTransferRate: {
    name: "Data Transfer Rate",
  },
};

// main Function
function main() {
  const converterKeys = Object.keys(converter).sort();

  converterKeys.forEach((item) => {
    createHtmlOption(categorySelect, {
      value: item,
      text: converter[item].name,
    });
  });
}

// Crate Html option Function
function createHtmlOption(parent, option) {
  const opt = document.createElement("option");
  opt.setAttribute("value", option.value);
  opt.innerHTML = option.text;

  parent.appendChild(opt);
}
