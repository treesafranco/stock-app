export interface IStockInfo {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface IStock {
  stockName: string;
  stockInfo: IStockInfo[];
}

export interface IStockData {
  [key: string]: IStock;
}
