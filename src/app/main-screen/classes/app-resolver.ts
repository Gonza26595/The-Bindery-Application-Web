import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AppResolver implements Resolve<any> {

    constructor(private _http:HttpClient){
        
    }

    resolve(route:ActivatedRouteSnapshot, rstate:RouterStateSnapshot) {
        console.log('Logging collected route parameter', route.params['name']);
    }
}