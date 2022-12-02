export function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));

  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
}

export const filterBooks = (
  filterType,
  searchValue,
  data,
  Subject,
  skip,
  limit
) => {
  var temp = [];

  for (let i = 0; i < data.length; i++) {
    if (
      Subject === "All" &&
      data[i][filterType.toLowerCase()]
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    ) {
      temp.push(data[i]);
    } else {
      if (
        Subject === data[i]["Subject"] &&
        data[i][filterType.toLowerCase()]
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      ) {
        temp.push(data[i]);
      }
    }
  }
  return { data: temp.slice(skip, skip + limit), totalLength: temp.length };
};
