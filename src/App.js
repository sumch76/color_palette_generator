import { useState } from "react";
import "./styles.css";

export default function App() {
  const [currentPalette, setCurrentPalette] = useState([]);
  const [savedPalette, setSavedPalette] = useState([]);

  const RandomColor = () => {
    let color = "#";
    const letters = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      color = color + letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generatePalette = () => {
    const palette = [];
    for (let i = 0; i < 5; i++) {
      palette.push(RandomColor());
    }
    setCurrentPalette(palette);
  };

  const savePalette = () => {
    setSavedPalette([...savedPalette, currentPalette]);
  };

  const deletePalette = (index) => {
    const updatePalette = savedPalette.filter((_, i) => i !== index);
    setSavedPalette(updatePalette);
  };
  return (
    <>
      <h1>Color Palette Generator</h1>
      <button id="generate" onClick={generatePalette}>
        Generate Palette
      </button>
      {/* display the current palette */}
      <div id="current-palette">
        {currentPalette.map((color, index) => (
          <div
            key={index}
            className="color-block"
            style={{ backgroundColor: color }}
          >
            {color}
          </div>
        ))}
        <button id="save" onClick={savePalette}>
          Save Pallete
        </button>
      </div>

      {/* display saved palette */}
      <div id="saved-palettes">
        {savedPalette.map((palette, index) => (
          <div key={index}>
            {palette.map((color, i) => (
              <div
                key={i}
                className="saved-palette"
                style={{ backgroundColor: color }}
              >
                {color}
              </div>
            ))}
            <button
              id="delete-palette-button"
              onClick={() => deletePalette(index)}
            >
              Delete Palette
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
