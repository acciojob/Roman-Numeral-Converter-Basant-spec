function convertToRoman(num) {
    // Define Roman numerals with subtractive notation included
    const romanNumerals = [
        ['M', 1000],
        ['CM', 900],  // Subtractive notation for 900
        ['D', 500],
        ['CD', 400],  // Subtractive notation for 400
        ['C', 100],
        ['XC', 90],   // Subtractive notation for 90
        ['L', 50],
        ['XL', 40],   // Subtractive notation for 40
        ['X', 10],
        ['IX', 9],    // Subtractive notation for 9
        ['V', 5],
        ['IV', 4],    // Subtractive notation for 4
        ['I', 1],
    ];

    let roman = ""; // Initialize result as an empty string

    // Iterate over the Roman numeral symbols in descending order of value
    for (const [symbol, value] of romanNumerals) {
        while (num >= value) { // While the number is greater than or equal to the value
            roman += symbol;   // Append the symbol to the result
            num -= value;      // Subtract the value from the number
        }
    }

    return roman; // Return the final Roman numeral string
}

// Exporting the function for testing purposes
module.exports = convertToRoman;
