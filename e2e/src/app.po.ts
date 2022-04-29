import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getHeaderText(): Promise<string> {
    return element(by.css('app-root app-header mat-toolbar span')).getText() as Promise<string>;
  }
}
