import type { ChartConfiguration, ChartType } from 'chart.js';

export interface IChartConfig<T extends ChartType = ChartType> {
  type: T;
  data: ChartConfiguration<T>['data'];
  options?: ChartConfiguration<T>['options'];
}
