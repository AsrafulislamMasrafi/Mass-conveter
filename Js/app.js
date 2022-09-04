// Variables
const categorySelect = document.getElementById("category-select");
const rightSelect = document.getElementById("rightSelect");
const leftSelect = document.getElementById("leftSelect");

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
      hectare: "Hectare",
      squareInch: "Square Inch",
      acre: "Acre",
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
  },
  length: {
    name: "Length",
    units: {
      kilometre: "Kilometre",
      meter: "Meter",
      micrometres: "Micrometres",
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
      year: "year",
      Decade: "Decade",
      Century: "Century",
    },
  },
  // volume: {
  //   name: "Volume",
  // },
  // dataTransferRate: {
  //   name: "Data Transfer Rate",
  // },
};

// main Function
function main() {
  const converterKeys = Object.keys(converter).sort();

  // Select Category Html <Option> Add
  converterKeys.forEach((item) => {
    createHtmlOption(categorySelect, {
      value: item,
      text: converter[item].name,
    });
  });

  categorySelect.addEventListener("change", function () {
    // Change left right Option on change category
    const converterName = categorySelect.value;
    const units = converter[converterName].units;

    // left Select Option Add
    removeAllChild(leftSelect);
    const leftOption = Object.keys(units).sort();
    leftOption.forEach((items) => {
      createHtmlOption(leftSelect, {
        value: items,
        text: units[items],
      });
    });

    // Right select Option Add
    removeAllChild(rightSelect);
    const rightOption = Object.keys(units).sort();
    rightOption.forEach((items) => {
      createHtmlOption(rightSelect, {
        value: items,
        text: units[items],
      });
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

// remove Html Child
function removeAllChild(parents) {
  while (parents.firstChild) {
    parents.firstChild.remove();
  }
}
