import { NgModule } from '@angular/core';

import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  exports: [NzTypographyModule, NzButtonModule],
})
export class StylingModule {}
