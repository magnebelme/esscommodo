const calculateArea = (width, height) => {
  if (typeof width !== 'number' || typeof height !== 'number' || width <= 0 || height <= 0) {
    return null; // Explicitly return null for invalid input
  }

  return width * height; // Calculate and return the area of the rectangle
};
