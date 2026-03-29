export interface ITab {
  readonly id: string;
  readonly label: string;
  readonly icon?: string;
}

export interface ITabChange {
  readonly id: string;
  readonly index: number;
}
