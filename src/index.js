const fill = (collection, value, start = 0, end = collection.length) => {
  const temp = [...collection];
  const fillUntil = end > collection.length ? collection.length : end;
  const isAviable = (index) => index >= start && index < fillUntil;
  // collection.length = 0;
  for (let i = 0; i < temp.length; i += 1) {
    if (isAviable(i)) collection[i] = value;
  }
};

const array = [1, 2, 3, 4];

fill(array, '*', 1, 3);

module.exports = fill;
// export default fill;
