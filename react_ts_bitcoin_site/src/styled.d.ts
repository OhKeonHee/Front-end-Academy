// https://styled-components.com/docs/api#create-a-declarations-file 에서 가져옴
// styled-components 사이트에서 검색에 d.ts검색하면 바로뜸

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}