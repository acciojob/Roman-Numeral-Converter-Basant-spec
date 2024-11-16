function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    let roman = ""; // Initialize the result as an empty string

    // Iterate over the Roman numeral symbols in descending order of value
    for (let key in obj) {
        const [symbol, value] = obj[key];
        while (num >= value) { // While the number is greater than or equal to the Roman numeral's value
            roman += symbol; // Append the Roman numeral symbol
            num -= value; // Subtract its value from the number
        }
    }

    return roman; // Return the Roman numeral as a string
}

// Examples:
   // Output: XXXVI

// Exporting the function for testing purposes
module.exports = convertToRoman;
