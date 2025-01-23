export const ConvertNumber = (n) => {
    // Convert n to a number if it's a string representation of a number
    const number = parseFloat(n);
  
    // If the conversion fails or if n is null/undefined, return a default value
    if (isNaN(number)) {
      return `$0.00`; // Default value if n is not a number
    }
  
    if (number < 1000) {
      return `$${number.toFixed(2)}`;
    } else if (number >= 1000 && number < 1000000) {
      return `$${(number / 1000).toFixed(2)}K`;
    } else if (number >= 1000000 && number < 1000000000) {
      return `$${(number / 1000000).toFixed(2)}M`;
    } else {
      return `$${(number / 1000000000).toFixed(2)}B`;
    }
  };