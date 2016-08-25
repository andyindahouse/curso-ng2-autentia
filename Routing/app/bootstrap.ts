///<reference path="./../typings/main.d.ts"/>
import 'reflect-metadata'
import 'es6-shim'
import 'rxjs'
import 'zone.js/dist/zone'
import 'zone.js/dist/long-stack-trace-zone'
import { bootstrap } from '@angular/platform-browser-dynamic'
import {ROUTER_PROVIDERS} from '@angular/router'
import {LocationStrategy, PathLocationStrategy} from '@angular/common'
import {provide} from '@angular/core'
import {AppComponent} from './main'

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: PathLocationStrategy})
])
