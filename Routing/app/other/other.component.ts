import {Component, OnInit} from '@angular/core'
import {RouteSegment, Router, Routes, ROUTER_DIRECTIVES} from '@angular/router'
import {SecondComponent} from '../second/second.component.ts'

@Component({
    selector: 'other',
    template: `<p>Parameters:  </p>
                <p> Param1: {{param1}}</p>
                <p> Param2: {{param2}}</p>
                <button (click)="goToHello()">Go to Hello</button>
                <a [routerLink]="['./second']">Second</a>
                <a [routerLink]="['/hello']">heeellooow</a>
                <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]

})

@Routes([
    {path: '/second', component: SecondComponent}
])

export class OtherComponent implements OnInit {

    param1:string
    param2:string

    constructor(
        private routeSegment:RouteSegment,
        private router:Router
    ){}

    ngOnInit(){
        this.param1 = this.routeSegment.getParam('param1')
        this.param2 = this.routeSegment.getParam('param2')
    }

    goToHello(){
        this.router.navigate(['/hello'])
    }
}