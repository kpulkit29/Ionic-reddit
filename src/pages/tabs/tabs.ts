import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { Reddits } from '../reddits/reddits';
import { Settings } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Reddits;
  tab2Root = Settings;
  tab3Root = AboutPage;

  constructor() {

  }
}
