import {LitElement, html, css, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styles from './style/index.scss';
import {getIconData} from './util';

@customElement('stylospectrum-icon')
class Icon extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @type {string}
   * @defaultValue ""
   * @public
   */
  @property({type: String})
  name!: string;

  override render() {
    const iconData = getIconData(this.name);

    if (!iconData) {
      return html``;
    }

    return html`
      <i>
        <svg
          viewBox="0 0 512 512"
          width="1em"
          height="1em"
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          stroke="currentColor"
          part="root"
          aria-hidden="true"
        >
          <g role="presentation">
            <path d="${iconData.pathData}" />
          </g>
        </svg>
      </i>
    `;
  }
}

export default Icon;
