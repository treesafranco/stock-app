export const formatCSVData = (str, delimiter = ',') => {
  const headers = str.slice(0, str.indexOf('\n')).split(delimiter);
  headers.pop();

  const rows = str.slice(str.indexOf('\n') + 1).split('\n');
  rows.pop();

  const arr = rows.map((row) => {
    const values = row.split(delimiter);
    values.pop();
    const formattedRow = headers.reduce((object, header, index) => {
      const rowItem = object;
      rowItem[header] = index === 0 ? values[index] : parseFloat(values[index]);
      return rowItem;
    }, {});
    return formattedRow;
  });
  return arr;
};

export const getTestId = (id: string) => ({ id, 'data-testid': id });
