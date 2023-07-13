import "./style.css";

const COLOR_PALETTE = {
    "#00BFFF": "Deep Sky Blue",
    "#00FA9A": "Medium Spring Green",
    "#00FFFF": "Cyan",
    "#00008B": "Dark Blue",
    "#0000CD": "Medium Blue",
    "#000000": "Black",
    "#008000": "Green",
    "#008080": "Teal",
    "#00FF00": "Lime",
    "#00FF7F": "Spring Green",
    "#00FFFF": "Cyan",
    "#191970": "Midnight Blue",
    "#228B22": "Forest Green",
    "#2E8B57": "Sea Green",
    "#40E0D0": "Turquoise",
    "#4169E1": "Royal Blue",
    "#483D8B": "Dark Slate Blue",
    "#4B0082": "Indigo",
    "#4B5320": "Army Green",
    "#5D3954": "Plum",
    "#606060": "Dark Gray",
    "#6495ED": "Cornflower Blue",
    "#6A5ACD": "Slate Blue",
    "#6B8E23": "Olive Drab",
    "#7B68EE": "Medium Slate Blue",
    "#7CFC00": "Lawn Green",
    "#7F7F7F": "Gray",
    "#778899": "Light Slate Gray",
    "#800000": "Maroon",
    "#8B0000": "Dark Red",
    "#8B008B": "Dark Magenta",
    "#8B4513": "Saddle Brown",
    "#8FBC8F": "Dark Sea Green",
    "#9370DB": "Medium Purple",
    "#9400D3": "Dark Violet",
    "#98FB98": "Pale Green",
    "#9932CC": "Dark Orchid",
    "#9ACD32": "Yellow Green",
    "#A020F0": "Purple",
    "#A9A9A9": "Dark Gray",
    "#ADD8E6": "Light Blue",
    "#ADFF2F": "Green Yellow",
    "#B0E0E6": "Powder Blue",
    "#B22222": "Firebrick",
    "#B8860B": "Dark Goldenrod",
    "#BDB76B": "Dark Khaki",
    "#CD5C5C": "Indian Red",
    "#CD853F": "Peru",
    "#D2691E": "Chocolate",
    "#D4C2FC": "Lavender Blue",
    "#D8BFD8": "Thistle",
    "#DA70D6": "Orchid",
    "#DC143C": "Crimson",
    "#DCDCDC": "Gainsboro",
    "#DE3163": "Cerise",
    "#E6E6FA": "Lavender Mist",
    "#E9967A": "Dark Salmon",
    "#EEE8AA": "Pale Goldenrod",
    "#EEE8CD": "Blanched Almond",
    "#F0E68C": "Khaki",
    "#F0FFF0": "Honeydew",
    "#F5DEB3": "Wheat",
    "#F5F5DC": "Beige",
    "#F9F5FF": "Magnolia",
    "#FA8072": "Salmon",
    "#FAEBD7": "Antique White",
    "#FAF0E6": "Linen",
    "#FAFAD2": "Light Goldenrod Yellow",
    "#FDF5E6": "Old Lace",
    "#FFE4B5": "Moccasin",
    "#FFE4E1": "Misty Rose",
    "#FFEBCD": "Blanched Almond",
    "#FFEFD5": "Papaya Whip",
    "#FFF0F5": "Lavender Blush",
    "#FFF5EE": "Sea Shell",
    "#FFF8DC": "Cornsilk",
    "#FFFACD": "Lemon Chiffon",
    "#FFFAF0": "Floral White",
    "#FFFAFA": "Snow",
    "#FFFF00": "Yellow",
    "#FFFFE0": "Light Yellow",
    "#FFFFF0": "Ivory",
    "#FFFFFF": "White",
    "#FF00FF": "Fuchsia",
    "#FF1493": "Deep Pink",
    "#FF4500": "Orange",
    "#FF6347": "Tomato",
    "#FF7F50": "Coral",
    "#FF8C00": "Dark Orange",
    "#FFA500": "Orange",
    "#FFB6C1": "Light Pink",
    "#FFD700": "Gold",
    "#FFDAB9": "Peach Puff",
    "#FFDEAD": "Navajo White",
    "#FFE4C4": "Bisque",
    "#FFE4E1": "Misty Rose",
    "#FFEBCD": "Blanched Almond",
    "#FFEFDB": "Pale Peach",
    "#FFFAFA": "Snow",
};

const addOptionsToColorPicker = () => {
    const colorPickerSelect = document.querySelector("#color-picker");
    
    Object.entries(COLOR_PALETTE).forEach(([color, name]) => {
      colorPickerSelect.innerHTML += `<option value="${color}">${name}</option>`;
    });
  };
  
  const addEventListenerToColorPicker = () => {
    const colorPickerSelect = document.querySelector("#color-picker");
    const colorName = document.querySelector("#color-name");
  
    colorPickerSelect.addEventListener("change", (event) => {
      const newColor = event.target.value;
      document.body.style.backgroundColor = newColor;
      colorName.innerText = `${COLOR_PALETTE[newColor] || '-'} | ${newColor}`;
    });
  };
  
  addOptionsToColorPicker();
  addEventListenerToColorPicker();