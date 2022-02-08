import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    subBgColor: string;
    pointColor: string;
    whiteColor: string;
    borderColor: string;
    orangeColor: string;
    grayColor: string;
    font: string;
  }
}
