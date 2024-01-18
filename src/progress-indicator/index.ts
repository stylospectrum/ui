import {LitElement, html, css, unsafeCSS, PropertyValueMap, nothing} from 'lit';
import {styleMap} from 'lit/directives/style-map.js';
import {customElement, property, state} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import styles from './style/index.scss';

@customElement('stylospectrum-progress-indicator')
class ProgressIndicator extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * Specifies the numerical value in percent for the length of the component.
   *
   * <b>Note:</b>
   * If a value greater than 100 is provided, the percentValue is set to 100. In other cases of invalid value, percentValue is set to its default of 0.
   * @default 0
   * @public
   */
  @property({type: Number})
  value!: number;

  @state()
  _previousValue = 0;

  @state()
  _transitionDuration = 0;

  get validatedValue() {
    if (this.value < 0) {
      return 0;
    }

    if (this.value > 100) {
      return 100;
    }

    return this.value;
  }

  get valueLabel() {
    return `${this.validatedValue}%`;
  }

  get showValueInRemainingBar() {
    return this.value <= 50;
  }

  protected override willUpdate(
    _changedProperties: PropertyValueMap<this>
  ): void {
    super.willUpdate(_changedProperties);

    if (_changedProperties.has('value')) {
      this._transitionDuration =
        Math.abs(this._previousValue - this.validatedValue) * 20;
      this._previousValue = this.validatedValue;
    }
  }

  override render() {
    return html` <div
      class=${classMap({
        'stylospectrum-progress-indicator': true,
        'stylospectrum-progress-indicator-max-value':
          this.validatedValue === 100,
      })}
      role="progressbar"
      aria-valuemin="0"
      aria-valuenow=${this.validatedValue}
      aria-valuemax="100"
      aria-valuetext=${this.valueLabel}
    >
      <div
        class="stylospectrum-progress-indicator-bar"
        style=${styleMap({
          width: `${this.validatedValue}%`,
          'transition-duration': `${this._transitionDuration}ms`,
        })}
      >
        ${!this.showValueInRemainingBar
          ? html`<span class="stylospectrum-progress-indicator-value">
              ${this.valueLabel}
            </span>`
          : nothing}
      </div>
      <div class="stylospectrum-progress-indicator-remaining-bar">
        ${this.showValueInRemainingBar
          ? html`<span class="stylospectrum-progress-indicator-value">
              ${this.valueLabel}
            </span>`
          : nothing}
      </div>
    </div>`;
  }
}

export default ProgressIndicator;
