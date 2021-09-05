import { actionTypes } from '@src/store/actions/appActions';
import reducer, { initialState } from '@src/store/reducer/appReducer';
import { mockData } from './mock';

describe('App reducer Specs', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle FETCH_STOCK_START', () => {
    const startAction = {
      type: actionTypes.FETCH_STOCK_START,
    };
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle FETCH_STOCK_SUCCESS', () => {
    const successAction = {
      type: actionTypes.FETCH_STOCK_SUCCESS,
      data: mockData.stockData,
    };

    const current = { ...initialState.stockData };
    current[mockData.stockData.stockName] = mockData.stockData;

    expect(JSON.stringify(reducer(initialState, successAction))).toEqual(
      JSON.stringify({
        ...initialState,
        stockData: current,
        loading: false,
      }),
    );
  });

  it('should handle FETCH_STOCK_FAIL', () => {
    const failAction = {
      type: actionTypes.FETCH_STOCK_FAIL,
      error: true,
    };
    expect(reducer(initialState, failAction)).toEqual({
      ...initialState,
      error: true,
      loading: false,
    });
  });
});
