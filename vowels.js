function vowelCount(s) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    let st = s.toLowerCase();

    for (let i = 0; i < st.length; i++) {
        if (vowels.includes(st[i])) {
            count++;
        }
    }
    return count;
}

console.log(vowelCount("wAter"));      // 2
console.log(vowelCount("JavaScript")); // 3
console.log(vowelCount("sky"));        // 0