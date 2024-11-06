function getButtonStyling({ styleType }) {
  const primary =
    "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500";
  const secondary =
    "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300";
  const danger = "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500";

  if (styleType === "primary") {
    return primary;
  } else if (styleType === "secondary") {
    return secondary;
  } else {
    return primary;
  }
}

export default getButtonStyling;
