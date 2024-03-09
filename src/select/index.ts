import {LitElement, html, css, unsafeCSS, PropertyValues} from 'lit';
import {repeat} from 'lit/directives/repeat.js';
import {ContextProvider} from '@lit/context';
import {createRef, ref} from 'lit/directives/ref.js';
import {customElement, property, state} from 'lit/decorators.js';
import {listContext} from '../list/context';
import {EventEmitter, event} from '../utils';
import type IMenu from '../menu';
import styles from './style/index.scss';

import '../icon';
import '../menu';
import '../menu/menu-item';
import '../icon/data/slim-arrow-down';

interface Option {
  id: string;
  name: string;
}

@customElement('stylospectrum-select')
class Select extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @type {Array}
   * @defaultValue []
   * @public
   */
  @property({type: Array})
  options!: Option[];

  /**
   * @type {string}
   * @defaultValue ""
   * @public
   */
  @property({type: String})
  value!: string;

  /**
   * @type {string}
   * @defaultValue ""
   * @public
   */
  @property({type: String, attribute: 'default-value'})
  defaultValue!: string;

  /**
   * @type {boolean}
   * @defaultValue false
   * @private
   */
  @property({type: Boolean, reflect: true})
  focused = false;

  /**
   * @type {boolean}
   * @defaultValue false
   * @private
   */
  @property({type: Boolean, reflect: true})
  opened = false;

  /**
   * @event
   * @public
   */
  @event({name: 'change'})
  changeEvent!: EventEmitter<string>;

  @state()
  private _innerValue: string = '';

  private _provider = new ContextProvider(this, {context: listContext});

  private _menuRef = createRef<IMenu>();

  private _handleClick() {
    if (this.opened) {
      this._menuRef.value?.hide();
    } else {
      this._menuRef.value?.showAt(this, this.offsetWidth);
    }
  }

  private _handleFocusIn() {
    if (this.opened) {
      return;
    }

    this.focused = true;
  }

  private _handleFocusOut() {
    this.focused = false;
  }

  private _handleSelect(value: string) {
    this._innerValue = value;
    this.changeEvent.emit(value);
    this._provider.setValue({
      selectedId: value,
    });
  }

  override willUpdate(_changedProperties: PropertyValues<this>): void {
    super.willUpdate(_changedProperties);

    if (_changedProperties.has('value')) {
      this._innerValue = this.value || this.defaultValue || '';

      this._provider.setValue({
        defaultSelectedId: this._innerValue,
      });
    }
  }

  get label() {
    return (
      this.options.find((option) => option.id === this._innerValue)?.name || ''
    );
  }

  override render() {
    return html`
      <div class="stylospectrum-select" @click=${this._handleClick}>
        <div
          class="stylospectrum-select-label"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded=${this.opened}
          tabindex=${this.opened ? '-1' : '0'}
          @focusin=${this._handleFocusIn}
          @focusout=${this._handleFocusOut}
        >
          ${this.label}
        </div>
        <stylospectrum-icon
          name="slim-arrow-down"
          class="stylospectrum-select-icon"
        >
        </stylospectrum-icon>
      </div>

      <stylospectrum-menu
        @close=${() => (this.opened = false)}
        @open=${() => {
          this.opened = true;
          this.focused = false;
        }}
        @select=${(e: CustomEvent<string>) => this._handleSelect(e.detail)}
        ${ref(this._menuRef)}
      >
        ${repeat(
          this.options,
          (option) => option.id,
          (option) => html`
            <stylospectrum-menu-item
              ?disable-focused=${true}
              .id=${option.id}
              @click=${() => this._handleSelect(option.id)}
            >
              <div class="stylospectrum-select-option">${option.name}</div>
            </stylospectrum-menu-item>
          `
        )}
      </stylospectrum-menu>
    `;
  }
}

export default Select;
