import { getMinMaxValues } from '@src/components/OHCLChart/Utils';
import { mockData } from './mock';

describe('OHCL Utils - Specs', () => {
  it('should return the min and max value', () => {
    const minMaxValues = getMinMaxValues(mockData.chartData);
    expect(JSON.stringify(minMaxValues)).toEqual(
      JSON.stringify({ min: 139.03, max: 140.47 }),
    );
  });

  it('should return the rounded min max values if range of values > 10', () => {
    const minMaxValues = getMinMaxValues(mockData.chartDataRounded);
    expect(JSON.stringify(minMaxValues)).toEqual(
      JSON.stringify({ min: 50, max: 160 }),
    );
  });
});
