function validatePalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            console.log(`${str} is not a Palindrome`)
        }
    }
    console.log(`${str} is  a Palindrome`)
}
const string = 2112

validatePalindrome(string);

