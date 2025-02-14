import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createCustomEvent } from '../../lib/custom-events';
import { bootstrap } from '../../style';
import style from './theme-switch.scss';

@customElement('mte-theme-switch')
export class MutationTestReportThemeSwitchComponent extends LitElement {
  @property()
  public theme: string | undefined;

  private readonly dispatchThemeChangedEvent = (e: MouseEvent) => {
    const checked = (e.target as HTMLInputElement).checked;
    this.dispatchEvent(createCustomEvent('theme-switch', checked ? 'dark' : 'light'));
  };

  public static styles = [bootstrap, unsafeCSS(style)];

  public render() {
    return html`
      <div class="check-box-container" @click="${(event: Event) => event.stopPropagation()}">
        <input type="checkbox" @click="${this.dispatchThemeChangedEvent}" ?checked="${this.theme == 'dark'}" id="darkTheme" />
        <label for="darkTheme">Dark</label>
      </div>
    `;
  }
}
