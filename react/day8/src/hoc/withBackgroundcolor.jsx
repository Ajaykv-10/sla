import { useState } from "react";
const colorClasses = {
  red: "bg-red-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
};
const withBackgroundColor = (WrappedComponent) => {
    return (props) => {
         const colors = ["red", "green", "blue"];
          const [selectedColor, setSelectedColor] = useState(colors[0]);
return (<>
     <label>Select Color</label>
      <select className="ml-4" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
<WrappedComponent {...props} className={`${colorClasses[selectedColor]} h-56`} />
    </>)}
}

export default withBackgroundColor