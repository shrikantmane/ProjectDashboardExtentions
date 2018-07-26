import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'ProjectDashboardStylesApplicationCustomizerStrings';

const LOG_SOURCE: string = 'ProjectDashboardStylesApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IProjectDashboardStylesApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class ProjectDashboardStylesApplicationCustomizer
  extends BaseApplicationCustomizer<IProjectDashboardStylesApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    //------ CSS Url with Site URL
    const cssUrl = this.context.pageContext.web.absoluteUrl + "/Style%20Library/CustomStyles.css";

    // alert(this.context.pageContext.web.absoluteUrl);
    // alert(cssUrl);

    if (cssUrl) {
      // inject the style sheet
      const head: any = document.getElementsByTagName("head")[0] || document.documentElement;
      let customStyle: HTMLLinkElement = document.createElement("link");
      customStyle.href = cssUrl;
      customStyle.rel = "stylesheet";
      customStyle.type = "text/css";

      head.insertAdjacentElement("beforeEnd", customStyle);
  }

  return Promise.resolve();
  
  }
}
