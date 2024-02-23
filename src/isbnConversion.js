function isbn10ToIsbn13(isbn10) {
  const isbnRemoveLastDigit = isbn10.slice(0, -1);
  const isbnAppendPrefix = `978${isbnRemoveLastDigit}`;

  let checkDigitSum = 0;
  for (let j = 0; j < isbnAppendPrefix.length; j += 1) {
    if (j % 2 === 0) {
      checkDigitSum += Number(isbnAppendPrefix[j]);
    }
    if (j % 2 === 1) {
      checkDigitSum += Number(isbnAppendPrefix[j]) * 3;
    }
  }
  const modulo10 = checkDigitSum % 10;
  let newIsbn13;
  if (modulo10 === 0) newIsbn13 = `${isbnAppendPrefix}0`;
  if (modulo10 !== 0) newIsbn13 = `${isbnAppendPrefix}${10 - modulo10}`;

  return newIsbn13;
}

// add comments
