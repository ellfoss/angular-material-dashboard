import { IChartConfig } from './chart-config.interface';

export interface IChartCard {
  color: string;
  chartConfig: IChartConfig;
  title: string;
  subtitle: string;
  subtitleHighlight?: string;
  meta: string;
}
