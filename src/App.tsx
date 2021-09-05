import './App.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '@src/components/Layouts/Header/Header';
import Footer from '@src/components/Layouts/Footer/Footer';
import Sidebar from '@src/components/Layouts/Sidebar/Sidebar';
import Page from '@src/components/Layouts/Page/Page';
import { fetchStock } from '@src/store/actions/appActions';
import OHCLChart from '@src/components/OHCLChart/OHCLChart';
import XAxis from '@src/components/OHCLChart/XAxis/XAxis';
import YAxis from '@src/components/OHCLChart/YAxis/YAxis';
import {
  getStockData, getStocksList, getLoadingStatus, getErrorStatus,
} from '@src/store/reducer/appReducer';
import Message from '@src/components/Message/Message';
import { IStockData } from './store/reducer/appTypes';

const App = () => {
  const dispatch = useDispatch();
  const stocksList: string[] = useSelector(getStocksList);
  const stockData: IStockData = useSelector(getStockData);
  const isDataLoading: boolean = useSelector(getLoadingStatus);
  const isError: boolean = useSelector(getErrorStatus);

  const [selectedStock, setSelectedStock] = useState(JSON.parse(localStorage.getItem('stockOption')) || 0);

  useEffect(() => {
    dispatch(fetchStock(selectedStock));
    localStorage.setItem('stockOption', JSON.stringify(selectedStock));
  }, [selectedStock]);

  const handleStockItemClick = (value: string) => {
    setSelectedStock(value);
  };

  const renderGraph = () => {
    const selectedStockData = stockData && stockData[selectedStock];

    return selectedStockData ? (
      <div className="chart-container">
        <OHCLChart height={500} chartData={selectedStockData.stockInfo}>
          <XAxis />
          <YAxis />
        </OHCLChart>
      </div>
    ) : isError
      && <Message text={'Something went wrong. Please try again later!'}/>;
  };

  return (
    <div className="App">
      <Header title={'Simple Stock App'} />
      {stocksList && (
        <div className="main-wrapper">
          <Sidebar
            items={stocksList}
            selectedItem={selectedStock}
            onItemClick={handleStockItemClick}
          />
          <Page>
            {isDataLoading
              ? <Message text={'Loading...'}/>
              : renderGraph()
            }
          </Page>
        </div>
      )}
      <Footer text="Simple Footer" height={30} />
    </div>
  );
};

export default App;
