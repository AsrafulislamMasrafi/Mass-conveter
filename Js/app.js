// Variables
const categorySelect = document.getElementById("category-select");
const rightSelect = document.getElementById("rightSelect");
const leftSelect = document.getElementById("leftSelect");
const formula = document.getElementById("formula");
const leftSelectInput = document.getElementById("leftSelectInput");
const rightSelectInput = document.getElementById("rightSelectInput");
let lastRightSelectValue = "";
let lastLeftSelectValue = "";

window.onload = function () {
  main();
};
// Data object
const converter = {
  area: {
    name: "Area",
    units: {
      squareKilometer: "Square Kilometer",
      squareMeter: "Square meter",
      squareMile: "Square Mile",
      squareYard: "Square Yard",
      squareFoot: "Square Foot",
    },
    variants: {
      // square Kilometer
      "squareKilometer:squareMeter": {
        formula: "multiply the area value by 1e+6",
        calculation(n) {
          return n * 1000000;
        },
      },
      "squareKilometer:squareMile": {
        formula: "divide the area value by 2.59",
        calculation(n) {
          return n / 2.59;
        },
      },
      "squareKilometer:squareYard": {
        formula: "multiply the area value by 1.196e+6",
        calculation(n) {
          return n * 1196000;
        },
      },
      "squareKilometer:squareFoot": {
        formula: "multiply the area value by 10,763,910.42",
        calculation(n) {
          return n * 10763910.42;
        },
      },

      // square Meter
      "squareMeter:squareKilometer": {
        formula: "divide the area value by 1,000,000",
        calculation(n) {
          return n / 1000000;
        },
      },

      "squareMeter:squareMile": {
        formula: "divide the area value by 2.58998811e-7",
        calculation(n) {
          return n / 2.58998811e-7;
        },
      },

      "squareMeter:squareYard": {
        formula: "multiply the area value by 1.19599",
        calculation(n) {
          return n * 1.19599;
        },
      },

      "squareMeter:squareFoot": {
        formula: "multiply the area value by 10.7639104",
        calculation(n) {
          return n * 10.7639104;
        },
      },

      // Square Mile
      "squareMile:squareKilometer": {
        formula: "multiply the area value by 2.58998811",
        calculation(n) {
          return n * 2.58998811;
        },
      },

      "squareMile:squareMeter": {
        formula: "multiply the area value by 2.58998811e+6",
        calculation(n) {
          return n * 2.58998811e6;
        },
      },

      "squareMile:squareYard": {
        formula: "multiply the area value by 3.098e+7",
        calculation(n) {
          return n * 3.098e7;
        },
      },

      "squareMile:squareFoot": {
        formula: "multiply the area value by 2.788e+7",
        calculation(n) {
          return n * 2.788e7;
        },
      },

      // Square Yard
      "squareYard:squareKilometer": {
        formula: "divide the area value by 836.127",
        calculation(n) {
          return n / 836.127;
        },
      },

      "squareYard:squareMeter": {
        formula: "divide the area value by 1.19599",
        calculation(n) {
          return n / 1.19599;
        },
      },

      "squareYard:squareMile": {
        formula: "divide the area value by 3.22831e-7",
        calculation(n) {
          return n / 3.22831e-7;
        },
      },

      "squareYard:squareFoot": {
        formula: "multiply the area value by 9",
        calculation(n) {
          return n * 9;
        },
      },

      // Square Foot
      "squareFoot:squareKilometer": {
        formula: "divide the area value by 10763910.42",
        calculation(n) {
          return n / 10763910.42;
        },
      },

      "squareFoot:squareMeter": {
        formula: "divide the area value by 10.7639104",
        calculation(n) {
          return n / 10.7639104;
        },
      },

      "squareFoot:squareMile": {
        formula: "divide the area value by 2.43066e-8",
        calculation(n) {
          return n / 2.43066e-8;
        },
      },

      "squareFoot:squareYard": {
        formula: "divide the area value by 9",
        calculation(n) {
          return n / 9;
        },
      },
    },
  },
  mass: {
    name: "Mass",
    units: {
      tonne: "Tonne",
      kilogram: "Kilogram",
      milligram: "Milligram",
      microgram: "Microgram",
      usTon: "US ton",
      pound: "Pound",
      stone: "Stone",
    },
    variants: {
      // tone
      "tonne:kilogram": {
        formula: "multiply the weight value by 1000",
        calculation(n) {
          return n * 1000;
        },
      },
      "tonne:milligram": {
        formula: "multiply the weight value by 1e+6",
        calculation(n) {
          return n * 1e6;
        },
      },
      "tonne:microgram": {
        formula: "multiply the weight value by 1e+9",
        calculation(n) {
          return n * 1e9;
        },
      },
      "tonne:usTon": {
        formula: "multiply the weight value by 1.10231",
        calculation(n) {
          return n * 1.10231;
        },
      },
      "tonne:pound": {
        formula: "multiply the weight value by 2204.62",
        calculation(n) {
          return n * 2204.62;
        },
      },
      "tonne:stone": {
        formula: "multiply the weight value by 157.47",
        calculation(n) {
          return n * 157.47;
        },
      },
      // kilogram
      "kilogram:formula": "divide the weight value by 1000",
      calculation(n) {
        return n / 1000;
      },

      "kilogram:milligram": {
        formula: "multiply the weight value by 1e+6",
        calculation(n) {
          return n * 1e6;
        },
      },
      "kilogram:microgram": {
        formula: "multiply the weight value by 1e+9",
        calculation(n) {
          return n * 1e9;
        },
      },
      "kilogram:usTon": {
        formula: "divide the weight value by 907.185",
        calculation(n) {
          return n / 907.185;
        },
      },
      "kilogram:pound": {
        formula: "multiply the weight value by 2.20462",
        calculation(n) {
          return n * 2.20462;
        },
      },
      "kilogram:stone": {
        formula: "multiply the weight value by 0.15747",
        calculation(n) {
          return n * 0.15747;
        },

        // Add more weight unit conversions here using the same format
      },
      // milligram
      "milligram:tonne": {
        formula: "divide the weight value by 1e+6",
        calculation(n) {
          return n / 1e6;
        },
      },
      "milligram:kilogram": {
        formula: "divide the weight value by 1e+3",
        calculation(n) {
          return n / 1e3;
        },
      },
      "milligram:microgram": {
        formula: "multiply the weight value by 1e+3",
        calculation(n) {
          return n * 1e3;
        },
      },
      "milligram:usTon": {
        formula: "divide the weight value by 9.072e+8",
        calculation(n) {
          return n / 9.072e8;
        },
      },
      "milligram:pound": {
        formula: "divide the weight value by 453592.37",
        calculation(n) {
          return n / 453592.37;
        },
      },
      "milligram:stone": {
        formula: "divide the weight value by 6.35e+6",
        calculation(n) {
          return n / 6.35e6;
        },
      },

      // microgram
      "microgram:tonne": {
        formula: "divide the weight value by 1e+9",
        calculation(n) {
          return n / 1e9;
        },
      },
      "microgram:kilogram": {
        formula: "divide the weight value by 1e+6",
        calculation(n) {
          return n / 1e6;
        },
      },
      "microgram:milligram": {
        formula: "divide the weight value by 1e+3",
        calculation(n) {
          return n / 1e3;
        },
      },
      "microgram:usTon": {
        formula: "divide the weight value by 9.072e+11",
        calculation(n) {
          return n / 9.072e11;
        },
      },
      "microgram:pound": {
        formula: "divide the weight value by 4.5359237e+8",
        calculation(n) {
          return n / 4.5359237e8;
        },
      },
      "microgram:stone": {
        formula: "divide the weight value by 6.35e+9",
        calculation(n) {
          return n / 6.35e9;
        },
      },
      // usTon
      "usTon:tonne": {
        formula: "multiply the weight value by 0.907185",
        calculation(n) {
          return n * 0.907185;
        },
      },
      "usTon:kilogram": {
        formula: "multiply the weight value by 907.185",
        calculation(n) {
          return n * 907.185;
        },
      },
      "usTon:milligram": {
        formula: "multiply the weight value by 9.072e+8",
        calculation(n) {
          return n * 9.072e8;
        },
      },
      "usTon:microgram": {
        formula: "multiply the weight value by 9.072e+11",
        calculation(n) {
          return n * 9.072e11;
        },
      },
      "usTon:pound": {
        formula: "multiply the weight value by 2000",
        calculation(n) {
          return n * 2000;
        },
      },
      "usTon:stone": {
        formula: "multiply the weight value by 142.857",
        calculation(n) {
          return n * 142.857;
        },
      },
      // pound
      "pound:tonne": {
        formula: "divide the weight value by 2204.62",
        calculation(n) {
          return n / 2204.62;
        },
      },
      "pound:kilogram": {
        formula: "divide the weight value by 2.20462",
        calculation(n) {
          return n / 2.20462;
        },
      },
      "pound:milligram": {
        formula: "multiply the weight value by 453592.37",
        calculation(n) {
          return n * 453592.37;
        },
      },
      "pound:microgram": {
        formula: "multiply the weight value by 4.5359237e+8",
        calculation(n) {
          return n * 4.5359237e8;
        },
      },
      "pound:usTon": {
        formula: "divide the weight value by 2000",
        calculation(n) {
          return n / 2000;
        },
      },
      "pound:stone": {
        formula: "divide the weight value by 14",
        calculation(n) {
          return n / 14;
        },
      },

      // stone
      "stone:tonne": {
        formula: "divide the weight value by 157.47",
        calculation(n) {
          return n / 157.47;
        },
      },
      "stone:kilogram": {
        formula: "multiply the weight value by 6.35",
        calculation(n) {
          return n * 6.35;
        },
      },
      "stone:milligram": {
        formula: "multiply the weight value by 6.35e+6",
        calculation(n) {
          return n * 6.35e6;
        },
      },
      "stone:microgram": {
        formula: "multiply the weight value by 6.35e+9",
        calculation(n) {
          return n * 6.35e9;
        },
      },
      "stone:usTon": {
        formula: "divide the weight value by 142.857",
        calculation(n) {
          return n / 142.857;
        },
      },
      "stone:pound": {
        formula: "multiply the weight value by 14",
        calculation(n) {
          return n * 14;
        },
      },
    },
  },
  length: {
    name: "Length",
    units: {
      kilometre: "Kilometre",
      meter: "Meter",
      micrometers: "Micrometers",
      centimeter: "Centimeter",
      nanometre: "Nanometre",
      mile: "Mile",
      yard: "Yard",
      foot: "Foot",
      inch: "Inch",
      nauticalMile: "Nautical mile",
    },
  },
  time: {
    name: "Time",
    units: {
      Nanosecond: "Nanosecond",
      Microsecond: "Microsecond",
      Millisecond: "Millisecond",
      Second: "Second",
      Minute: "Minute",
      Hour: "Hour",
      Day: "Day",
      Week: "Week",
      Month: "Month",
      Calendar: "Calendar",
      year: "Year",
      Decade: "Decade",
      Century: "Century",
    },
  },
};

function main() {
  const converterKeys = Object.keys(converter).sort();
  removeAllChild(categorySelect);
  setCategoryOption(converterKeys);
  updateChange();
  categorySelect.addEventListener("change", function () {
    updateChange();
    inputUpdateCalculate(rightSelectInput, leftSelectInput);
  });
  inputUpdateCalculate(rightSelectInput, leftSelectInput);
  leftSelect.addEventListener("change", function (e) {
    if (e.target.value === rightSelect.value) {
      let option = rightSelect.getElementsByTagName("option");
      for (let i = 0; i < option.length; i++) {
        if (lastLeftSelectValue === option[i].value) {
          option[i].selected = "selected";
          lastRightSelectValue = option[i].value;
          break;
        }
      }
    }
    lastLeftSelectValue = e.target.value;
    inputUpdateCalculate(rightSelectInput, leftSelectInput);
  });

  rightSelect.addEventListener("change", function (e) {
    if (e.target.value === leftSelect.value) {
      let option = leftSelect.getElementsByTagName("option");
      for (let i = 0; i < option.length; i++) {
        if (lastRightSelectValue === option[i].value) {
          option[i].selected = "selected";
          lastLeftSelectValue = option[i].value;
          break;
        }
      }
    }
    lastRightSelectValue = e.target.value;
    inputUpdateCalculate(rightSelectInput, leftSelectInput);
  });
  rightSelectInput.addEventListener("keyup", function (e) {
    if (e.target.value) {
      inputUpdateCalculate(leftSelectInput, e.target);
    }
  });
  leftSelectInput.addEventListener("keyup", function (e) {
    if (e.target.value) {
      inputUpdateCalculate(rightSelectInput, e.target);
    }
  });
}
function inputUpdateCalculate(rightInputValue, leftInputValue) {
  const converterName = categorySelect.value;
  const converterUnit = converter[converterName].variants;
  const unitKey = `${leftSelect.value}:${rightSelect.value}`;
  const formulaData = converterUnit[unitKey];
  formula.innerText = formulaData.formula;
  rightInputValue.value = formulaData.calculation(leftInputValue.value);
}

// update Data in Change
function updateChange() {
  const selectCategory = categorySelect.value;
  const units = converter[selectCategory].units;
  const unitsOption = Object.keys(units).sort();
  removeAllChild(leftSelect);
  setDomOption(unitsOption, leftSelect, units);
  lastLeftSelectValue = leftSelect.value;

  removeAllChild(rightSelect);
  setDomOption(unitsOption, rightSelect, units);
  rightSelect.getElementsByTagName("option")[1].selected = "selected";
  lastRightSelectValue = rightSelect.value;
}
// remove Dom
function removeAllChild(parent) {
  while (parent.lastChild) {
    parent.lastChild.remove();
  }
}

/**
 * this function add right and left option in dom
 * @param {Array} option
 * @param {object} parent
 * @param {object} units
 */
function setDomOption(option, parent, units) {
  option.forEach((item) => {
    createHtmlOption(parent, {
      value: item,
      text: units[item],
    });
  });
}

/**
 *  this function set dom <select> <option> from array
 * @param {Array} converterKeys
 */
function setCategoryOption(converterKeys) {
  converterKeys.forEach((key) => {
    createHtmlOption(categorySelect, { value: key, text: converter[key].name });
  });
}

/**
 *
 * @param {HTMLElement} parent
 * @param {object} value
 */
function createHtmlOption(parent, value) {
  let option = document.createElement("option");
  option.setAttribute("value", value.value);
  option.innerText = value.text;
  parent.appendChild(option);
}
