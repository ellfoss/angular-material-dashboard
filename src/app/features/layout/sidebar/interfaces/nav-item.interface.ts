export interface INavItem {
  label: string;
  icon?: string;
  letter?: string;
  route?: string;
  children?: INavItem[];
  expanded?: boolean;
}
