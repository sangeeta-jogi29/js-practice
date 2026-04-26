function reverse_func(s) {
    let reverse_str = "";
    let n = s.length;
    for (let i = n - 1; i >= 0; i--) {
        reverse_str += s[i];
    }
    return reverse_str;
}

function isPalindrome(s) {
    let original = s.toLowerCase();
    let reversed = reverse_func(original);
    if (reversed === original) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("Racecar")); 
console.log(isPalindrome("hello"));    