import { actionTypes } from '@src/store/actions/appActions';
import { IStockData } from '@src/store/reducer/appTypes';
import { createSelector } from 'reselect';

export const initialState: IState = {
  stocksList: [
    'IBM',
    'CMCSA',
    'HOG',
    'MSFT',
    'AAPL',
    'INTC',
    'NFLX',
    'ORCL',
    'GOOGL',
    'LUV',
    'YHOO',
    'SBUX',
  ],
  stockData: null,
  loading: true,
  error: false,
};

export interface IState {
  stocksList: string[];
  stockData: IStockData;
  loading: boolean;
  error: boolean;
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_STOCK_SUCCESS: {
      const current = { ...state.stockData };
      current[action.data.stockName] = action.data;
      return {
        ...state,
        stockData: current,
        loading: false,
      }; }
    case actionTypes.FETCH_STOCK_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionTypes.FETCH_STOCK_START:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducer;

const stocksList = (state: IState) => state.stocksList;
const stockData = (state: IState) => state.stockData;
const loading = (state: IState) => state.loading;
const error = (state: IState) => state.error;

export const getStocksList = createSelector(stocksList, (data: string[]) => data);
export const getStockData = createSelector(stockData, (data: IStockData) => data);
export const getLoadingStatus = createSelector(loading, (data: boolean) => data);
export const getErrorStatus = createSelector(error, (data: boolean) => data);
