import { INavItem } from './nav-item.interface';

export interface INavSection {
  title?: string;
  hasDivider?: boolean;
  items: INavItem[];
}
