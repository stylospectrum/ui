import {LitElement, html, css, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styles from './style/index.scss';
import {Placement} from '../types';

@customElement('stylospectrum-tooltip')
class Tooltip extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  @property({type: String, reflect: false})
  openerRect!: string;

  @property({type: String})
  placement!: Placement;

  override connectedCallback(): void {
    super.connectedCallback();

    setTimeout(() => {
      const openerRect: DOMRect = JSON.parse(this.openerRect);

      this.style.left =
        openerRect.left + (openerRect.width - this.offsetWidth) / 2 + 'px';

      if (this.placement === Placement.Top) {
        this.style.top = openerRect.top - this.offsetHeight - 8 + 'px';
      } else {
        this.style.top = openerRect.bottom + 8 + 'px';
      }
    });
  }

  override render() {
    return html`
      <div class="stylospectrum-tooltip">
        <div class="stylospectrum-tooltip-text">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

export default Tooltip;
