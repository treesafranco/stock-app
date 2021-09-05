import { formatCSVData } from '@src/utils/appUtil';
import { client } from '@src/api/client';

export const actionTypes = {
  FETCH_STOCK_SUCCESS: 'FETCH_STOCK_SUCCESS',
  FETCH_STOCK_FAIL: 'FETCH_STOCK_FAIL',
  FETCH_STOCK_START: 'FETCH_STOCK_START',
};

const fetchStockStart = () => ({
  type: actionTypes.FETCH_STOCK_START,
  loaded: false,
});

const fetchStockSuccess = (data: any) => ({
  type: actionTypes.FETCH_STOCK_SUCCESS,
  data,
});

const fetchStockFail = (error: boolean) => ({
  type: actionTypes.FETCH_STOCK_FAIL,
  error,
});

export const fetchStock = (stock: string) => async (dispatch: any) => {
  dispatch(fetchStockFail(false));
  dispatch(fetchStockStart());
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&outputsize=compact&datatype=csv&symbol=${
    stock}&apikey=P288QT5IOZJ5FOJS`;

  const response = await client.get(url);

  if (typeof response === 'string') {
    const data = formatCSVData(response);
    const formattedData = {
      stockName: stock,
      stockInfo: data,
    };
    dispatch(fetchStockSuccess(formattedData));
  } else {
    dispatch(fetchStockFail(true));
  }
};
