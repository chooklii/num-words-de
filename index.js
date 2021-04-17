const default_strings_len_one = ["Null","eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf"]
const default_strings = ["Null","Ein", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun"]
const default_strings_len_two = ["Null","zehn", "zwanzig", "dreißig","vierzig", "fünfzig", "sechzig", "siebzig", "achtzig", "neunzig"]
const regex = /^(\d{3})(\d{3})(\d{3})(\d{1})(\d{2})$/
const three_digit_regex = /^(\d{1})(\d{2})$/

const numToWord = (number) => {
    let return_string = ""
    const int_number = Number(number)
    if(isNaN(int_number)){
        throw new Error("Not a Number")
    }
    const num_str = int_number.toString()
    if(num_str.length > 6){
        throw new Error("Numbers with more than 6 digits are not supported")
    }
    const [, milliarde, million, thousand, hundert, ten] = ('000000000000' + num_str).substr(-12).match(regex)
    return_string += thousand != 0 ? settup_digits(thousand) + "tausend" : ""
    return_string += hundert != 0 ? hundret_to_string(hundert) : ""
    return_string += ten != 0 ? two_digits_to_string(ten) : ""
    return return_string.charAt(0).toUpperCase() + return_string.slice(1);
}

const settup_digits = (number) => {
    if(number < 9) return one_digit_to_string(number)
    else if(number > 99) return three_digits_to_string(number)
    else return two_digits_to_string(number)
}

const hundret_to_string = (number) => {
    const parsed_number = parseInt(number)
    if(parsed_number == 1) return "Einhundert"
    else return default_strings_len_one[parsed_number] + "hundert"
}

const one_digit_to_string = (number) => {
    const parsed_number = parseInt(number)
    return default_strings[parsed_number]
}

const two_digits_to_string = (number) => {
    parsed_number = parseInt(number)
    if(number <= 12) return default_strings_len_one[parsed_number]
    else{
        str_number = parsed_number.toString()
        digits = str_number.split("").map(Number)
        if(digits[1] == 0) return default_strings_len_two[digits[0]]
        else if(digits[1] == 1) return "einund" + default_strings_len_two[digits[0]]
        else return default_strings_len_one[digits[1]] + "und" + default_strings_len_two[digits[0]]
    }
}

const three_digits_to_string = (number) => {
    const str_number = number.toString()
    const [, first, last_two] = str_number.match(three_digit_regex)
    const last_two_str = two_digits_to_string(last_two)
    const first_str = first != 1 ? default_strings_len_one[first] : "Ein"
    return first_str + "hundert" + last_two_str
}



module.exports = {
    numToWord
}