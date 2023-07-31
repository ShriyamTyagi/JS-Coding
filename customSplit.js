function split(string_to_split, splitChar) {
    let result = []
    let i = 0
    let curr_res = ""

    // loop till end of given string
    while(i < string_to_split.length) {

        // if first character of split char matches the current string character
        if(splitChar[0] === string_to_split[i]) {

            // remaining split character length
            let splitCharLengthToCover = splitChar.length - 1

            // covered split character length
            let coveredSplitLength = 1

            // similar split characters covered till now
            let coveredSplitChar = string_to_split[i]
            
            while(splitCharLengthToCover) {
                if(string[i + coveredSplitLength] === splitChar[coveredSplitLength]) {
                    coveredSplitChar += splitChar[i + coveredSplitLength]
                    coveredSplitLength++
                    splitCharLengthToCover--
                }
                else {
                    break
                }
            }

            if(splitCharLengthToCover) {
                curr_res += coveredSplitChar
            }
            else {
                result.push(curr_res)
                curr_res = ""
            }
            i += coveredSplitLength
        }
        else {
            curr_res += string_to_split[i]
            i++
        }   
    }
    result.push(curr_res)
    return result
}


const string_to_split = 'split this string with space character'
const split_char = ' '

console.log(split(string_to_split, split_char))

