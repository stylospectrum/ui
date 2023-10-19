declare module '*.scss?inline' {
  import {CSSResult} from 'lit';
  const styles: CSSResult;
  export default styles;
}
