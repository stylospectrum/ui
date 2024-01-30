import {LitElement, html, css, unsafeCSS} from 'lit';
import {
  customElement,
  property,
  query,
  queryAssignedElements,
} from 'lit/decorators.js';
import styles from './style/index.scss';
import type IDialog from '../dialog';
import '../dialog';
import '../icon/data/incident';

@customElement('stylospectrum-message-box')
class MessageBox extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * Defines the header text.
   *
   * @default ""
   * @public
   */
  @property({type: String, attribute: 'header-text'})
  headerText!: string;

  @query('stylospectrum-dialog')
  dialogNode!: IDialog;

  @queryAssignedElements({slot: 'ok-button'})
  okButtonNodes!: HTMLElement[];

  public show() {
    this.dialogNode.show();
    this.okButtonNodes?.[0].shadowRoot?.querySelector('button')?.focus();
  }

  public hide() {
    this.dialogNode.hide();
  }

  override render() {
    return html`
      <stylospectrum-dialog
        header-text=${this.headerText}
        header-icon="incident"
        class="stylospectrum-message-box"
      >
        <div class="stylospectrum-message-box-content">
          <slot></slot>
        </div>
        <slot name="ok-button" slot="ok-button"></slot>
        <slot name="cancel-button" slot="cancel-button"></slot>
      </stylospectrum-dialog>
    `;
  }
}

export default MessageBox;
