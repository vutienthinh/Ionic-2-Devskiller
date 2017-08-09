import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule} from "@angular/forms";
import {IonicApp, IonicModule} from "ionic-angular";
import {CustomerApp} from "./app.component";
import {ServiceDirectory} from "./app.servicedirectory";
import {PageDirectory} from "./app.pagedirectory";
import {PipeDirectory} from "./app.pipedirectory";
import _ from "lodash";

@NgModule({
  declarations: _.union([CustomerApp], PageDirectory.getPages(), PipeDirectory.getPipes()),
  imports: [
    IonicModule.forRoot(CustomerApp, {
        backButtonText: ''
      }, {}
    ),
    HttpModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: _.union([CustomerApp], PageDirectory.getPages()),
  providers: _.union(ServiceDirectory.getServices())
})
export class AppModule {
}

