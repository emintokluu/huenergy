import { useState } from 'react';
import { HexColorPicker } from "react-colorful";

const LightsPage = () => {
  const [color, setColor] = useState("#aabbcc");
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      <div>
      <HexColorPicker color={color} onChange={setColor} />
      </div>
    </div>
  )
}

export default LightsPage