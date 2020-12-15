const anagramByArraySpread = (word1, word2) => {
    const wordArray1 = [...word1].sort();
    const wordArray2 = [...word2].sort();
    for (let i = 0; i < wordArray1.length; i++) {
        if (wordArray1[i] !== wordArray2[i]) {
            return false;
        }
    }
    return true;
};

describe('the anagramByArraySpread function', () => {
    it('returns true same word', () => {
        expect(anagramByArraySpread('hello', 'hello')).toEqual(true);
    });
    it('returns true for reversed word', () => {
        expect(anagramByArraySpread('hello', 'olleh')).toEqual(true);
    });
    it('returns true for mixed word', () => {
        expect(anagramByArraySpread('hello', 'ehlol')).toEqual(true);
    });
    it('returns false for different lengths but same letters', () => {
        expect(anagramByArraySpread('hellohello', 'hello')).toEqual(false);
    });
    it('returns false for different words of same length', () => {
        expect(anagramByArraySpread('hello', 'world')).toEqual(false);
    });
    it('returns false for words with same characters but different count', () => {
        expect(anagramByArraySpread('hello', 'heelo')).toEqual(false);
    });
    it('returns false for words with same characters but different count of different letters', () => {
        expect(anagramByArraySpread('hello', 'hhelo')).toEqual(false);
    });
    it('returns false for whitespace padded words', () => {
        expect(anagramByArraySpread('hello     ', 'hello')).toEqual(false);
    });
    it('returns false for empty string', () => {
        expect(anagramByArraySpread('hello', '')).toEqual(false);
    });
});

const anagramByHistogram = (word1, word2) => {
    if (word1.length !== word2.length) {
        return false;
    }
    const word1Histogram = stringToCharHistogram(word1);
    const word2Histogram = stringToCharHistogram(word2);
    for (const [key, value] of Object.entries(word2Histogram)) {
        if (value !== word1Histogram[key]) {
            return false;
        }
    }
    return true;
};

const stringToCharHistogram = (string) => {
    let charHistogram = {};
    for (let i = 0; i < string.length; i++) {
        charHistogram[string[i]]
            ? (charHistogram[string[i]] += 1)
            : (charHistogram[string[i]] = 1);
    }
    return charHistogram;
};

describe('the anagramByHistogram function', () => {
    it('returns true same word', () => {
        expect(anagramByHistogram('hello', 'hello')).toEqual(true);
    });
    it('returns true for reversed word', () => {
        expect(anagramByHistogram('hello', 'olleh')).toEqual(true);
    });
    it('returns true for mixed word', () => {
        expect(anagramByHistogram('hello', 'ehlol')).toEqual(true);
    });
    it('returns false for different lengths but same letters', () => {
        expect(anagramByHistogram('hellohello', 'hello')).toEqual(false);
    });
    it('returns false for different words of same length', () => {
        expect(anagramByHistogram('hello', 'world')).toEqual(false);
    });
    it('returns false for words with same characters but different count', () => {
        expect(anagramByHistogram('hello', 'heelo')).toEqual(false);
    });
    it('returns false for words with same characters but different count of different letters', () => {
        expect(anagramByHistogram('hello', 'hhelo')).toEqual(false);
    });
    it('returns false for whitespace padded words', () => {
        expect(anagramByHistogram('hello     ', 'hello')).toEqual(false);
    });
    it('returns false for empty string', () => {
        expect(anagramByHistogram('hello', '')).toEqual(false);
    });
});
