const default_strings_len_one = ["Null", "eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf", 
"dreizehn", "vierzehn", "fünfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn"]
const default_strings = ["Null", "ein", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun"]
const default_strings_len_two = ["Null", "zehn", "zwanzig", "dreißig", "vierzig", "fünfzig", "sechzig", "siebzig", "achtzig", "neunzig"]
const single_milliarde = "Milliarde"
const multiple_milliarde = "Milliarden"
const single_million = "Million"
const multiple_million = "Millionen"


const regex = /^(\d{3})(\d{3})(\d{3})(\d{1})(\d{2})$/
const three_digit_regex = /^(\d{1})(\d{2})$/

/*
number: Number / Integer to convert into string
params: {
    uppercase: true,
    indefinite_eine: false,
    indefinite_einer: false,
    indefinite_eines: false,
    indefinite_einem: false
}
*/

const numToWord = (
    number,
    params = {}
) => {
    const {uppercase, indefinite_eine, indefinite_einem, indefinite_einer, indefinite_eines} = params
    let return_string = ""
    const int_number = Number(number)
    // if input is not a string return Error
    // no Error thrown because displaying the input is better than crashing the whole application
    if (isNaN(int_number)) {
        console.error("Input is not a Number")
        return number
    }
    const num_str = int_number.toString()
    // is string is larger than what is supported return error
    // no Error thrown because displaying the number is better than crashing the whole application
    if (num_str.length > 12) {
        console.error("Numbers with more than 12 digits are not supported in text-form and will be displayed as a number")
        return number
    }
    // parse input into the subparts of it
    const [, milliarde, million, thousand, hundert, ten] = ('000000000000' + num_str).substr(-12).match(regex)
    // starting at the top and add the string parts to our return-value
    return_string += milliarde != 0 ? settup_million(milliarde, single_milliarde, multiple_milliarde) : ""
    return_string += million != 0 ? settup_million(million, single_million, multiple_million) : ""
    return_string += thousand != 0 ? settup_digits(thousand) + "tausend" : ""
    return_string += hundert != 0 ? hundret_to_string(hundert) : ""
    return_string += ten != 0 ? two_digits_to_string(ten) : ""
    // if value is one and any of the indefinite params is set convert input
    if (int_number == 1 && (
        indefinite_eine ||
        indefinite_einer ||
        indefinite_einem ||
        indefinite_eines)) {
        return_string = convert_indefinite(indefinite_eine, indefinite_einer, indefinite_einem, indefinite_eines)
        }
    // if value uppercase is set to false return string as it is (lowercase). if not uppercase first char.
    if (uppercase == false) {
        return return_string
    } else return return_string.charAt(0).toUpperCase() + return_string.slice(1)
}

// convert some beautis of the german language :)
const convert_indefinite = (indefinite_eine, indefinite_einer, indefinite_einem, indefinite_eines) => {
    if(indefinite_eine) return "eine"
    else if(indefinite_einer) return "einer"
    else if(indefinite_eines) return "eines"
    else if(indefinite_einem) return "einem"
}

// settup the million value
const settup_million = (number, single_value, multiple_value) => {
    const number_value = settup_digits(number, true)
    const million_value = number > 1 ? multiple_value : single_value
    return number_value + " " + million_value + " "
}

// settup digit in a different way depending on the value of it (one, two or three-digits)
const settup_digits = (number, high_value = false) => {
    if (number < 9) return one_digit_to_string(number, high_value)
    else if (number > 99) return three_digits_to_string(number)
    else return two_digits_to_string(number)
}

// handle the hundrets
const hundret_to_string = (number) => {
    const parsed_number = parseInt(number)
    if (parsed_number == 1) return "einhundert"
    else return default_strings_len_one[parsed_number] + "hundert"
}

// handle the one digit values. the high_value param is used my Million and Millard, due to their one beeing "Eine Milliarde" and not "Eins Milliarde"
const one_digit_to_string = (number, high_value = false) => {
    const parsed_number = parseInt(number)
    if (high_value && parsed_number == 1) return "eine"
    return default_strings[parsed_number]
}

// handle the two digits values
const two_digits_to_string = (number) => {
    parsed_number = parseInt(number)
    // if string is smaller than 12 return the value from given list. (11 and 12 are some special cases in german language)
    if (number <= 19) return default_strings_len_one[parsed_number]
    else {
        str_number = parsed_number.toString()
        digits = str_number.split("").map(Number)
        if (digits[1] == 0) return default_strings_len_two[digits[0]]
        else if (digits[1] == 1) return "einund" + default_strings_len_two[digits[0]]
        else return default_strings_len_one[digits[1]] + "und" + default_strings_len_two[digits[0]]
    }
}

// handle three digit input by cutting it into the first value and give the last to to the two_digit function
const three_digits_to_string = (number) => {
    const str_number = number.toString()
    const [, first, last_two] = str_number.match(three_digit_regex)
    const last_two_str = two_digits_to_string(last_two)
    const first_str = first != 1 ? default_strings_len_one[first] : "ein"
    return first_str + "hundert" + last_two_str
}



module.exports = {
    numToWord
}