export interface IInfoMetric {
  label: string;
  value: string;
  unit: string;
}

export interface IMetricsBlock {
  title: string;
  cols: [IInfoMetric, IInfoMetric];
}

export interface ILocationBlock {
  title: string;
  locationName: string;
  locationAddress: string;
}

export interface IChargeInfo {
  sinceLastCharge: IMetricsBlock;
  nearestCharger: ILocationBlock;
}
