import { css, Global } from '@emotion/react';

import { colors, mediaQuery } from '../constants';
import { resetCss } from './resetCss';

export default function GlobalStyle() {
  return <Global styles={globalCss} />;
}

const globalCss = css`
  ${resetCss}

  :root {
    max-width: 100vw;
    overflow-x: hidden;

    font-family:
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    color: ${colors.black};
    background-color: ${colors.white};
    font-size: 16px;

    * {
      font-family: inherit;

      margin: 0;
      padding: 0;
      box-sizing: border-box;
      word-break: keep-all;
      word-wrap: break-word;

      -ms-overflow-style: none; /* IE 11 */
      scrollbar-width: none; /* Firefox 64 */
      ::-webkit-scrollbar {
        display: none !important;
      }
    }
  }

  ${mediaQuery('sm')} {
    :root {
      font-size: 14px;
    }
  }
`;
