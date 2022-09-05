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

let leftSelectValue = "";
let rightSelectValue = "";

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

  // right and left Option html set
  categoryChangeHandle();

  // Change Category function
  categorySelect.addEventListener("change", function () {
    categoryChangeHandle();
  });

  //left Select Event
  leftSelect.addEventListener("change", function (e) {
    if (e.target.value === rightSelect.value) {
      let option = rightSelect.getElementsByTagName("option");
      for (let i = 0; i < option.length; i++) {
        if (leftSelectValue === option[i].value) {
          option[i].selected = "selected";
          rightSelectValue = option[i].value;
          break;
        }
      }
    }
    leftSelectValue = e.target.value;
  });

  //right Select Event
  rightSelect.addEventListener("change", function (e) {
    if (e.target.value === leftSelect.value) {
      let option = leftSelect.getElementsByTagName("option");
      for (let i = 0; i < option.length; i++) {
        if (rightSelectValue === option[i].value) {
          option[i].selected = "selected";
          leftSelectValue = option[i].value;
          break;
        }
      }
    }
    rightSelectValue = e.target.value;
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

// Right left Select option change onChange category function
function categoryChangeHandle() {
  // Change left right Option on change category
  const converterName = categorySelect.value;
  const units = converter[converterName].units;
  const option = Object.keys(units).sort();

  // left Select Option Add
  removeAllChild(leftSelect);
  option.forEach((items) => {
    createHtmlOption(leftSelect, {
      value: items,
      text: units[items],
    });
  });
  leftSelectValue = leftSelect.value;

  // Right select Option Add
  removeAllChild(rightSelect);
  option.forEach((items) => {
    createHtmlOption(rightSelect, {
      value: items,
      text: units[items],
    });
  });

  rightSelect.getElementsByTagName("option")[1].selected = "selected";
  rightSelectValue = rightSelect.value;
}
