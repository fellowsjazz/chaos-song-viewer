import { Global } from '@emotion/react'
import NeueHaasDisplayRoman from '../public/NeueHaasDisplay-Roman.woff';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Neue Haas Grotesk Display Pro';
        font-style: normal;
        font-display: swap;
        src: url(${NeueHaasDisplayRoman}) format('woff2');
      }
      `}
  />
)

export default Fonts