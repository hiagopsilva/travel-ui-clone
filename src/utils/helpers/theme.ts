import { get } from 'lodash';

export const getTheme = (themeProp: string) => ({ theme }: any) =>
  get(theme, themeProp);

// const ifStyle = (prop: any) => (truthy: any, falsy: any = null) => (props: {
//   [x: string]: any;
// }): any => (props[prop] ? truthy : falsy);

// export { getTheme };
