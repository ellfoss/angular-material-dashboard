export interface IChargeInfo {
  sinceLastCharge: {
    distance: string;
    energy: string;
  };
  nearestCharger: {
    location: string;
    address: string;
  };
}
