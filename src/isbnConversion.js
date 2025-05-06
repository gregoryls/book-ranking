function isbn10ToIsbn13(isbn10) {
  // isbn10 needs to come in as a string
  // the last digit of an isbn10 is the checksum, remove to begin conversion.
  const isbnRemoveLastDigit = isbn10.slice(0, -1);

  // all isbn10 recieve the prefix 978 during conversion.
  const isbnAppendPrefix = `978${isbnRemoveLastDigit}`;

  let checkDigitSum = 0;

  // 13th checksum digit calculated by summation of each number in the current
  // 12-digit isbn multiplied by 1 or 3, alternating.
  for (let j = 0; j < isbnAppendPrefix.length; j += 1) {
    if (j % 2 === 0) {
      checkDigitSum += Number(isbnAppendPrefix[j]);
    }
    if (j % 2 === 1) {
      checkDigitSum += Number(isbnAppendPrefix[j]) * 3;
    }
  }

  // final checksum digit calculated by the remainder from modulo 10
  const modulo10 = checkDigitSum % 10;
  let newIsbn13;
  if (modulo10 === 0) newIsbn13 = `${isbnAppendPrefix}0`;
  if (modulo10 !== 0) newIsbn13 = `${isbnAppendPrefix}${10 - modulo10}`;

  return newIsbn13;
}

console.log(isbn10ToIsbn13("1234567891"));
