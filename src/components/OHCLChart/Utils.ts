import { IChartData } from '@src/components/OHCLChart/OHCLChart';

export const getMinMaxValues = (data: IChartData[]) => {
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  let minTmp;
  let maxTmp;
  for (let i = data.length - 1; i >= 0; i--) {
    minTmp = data[i].low;
    maxTmp = data[i].high;
    if (minTmp < min) min = minTmp;
    if (maxTmp > max) max = maxTmp;
  }

  if (max - min > 10) {
    return { min: min - (min % 10), max: max + (10 - (max % 10)) };
  }
  return { min, max };
};
