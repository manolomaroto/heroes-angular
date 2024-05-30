import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { LoaderService } from "../services/loader.service";
import { Observable, finalize } from "rxjs";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(
        private loader: LoaderService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loader.showloader();
        return next.handle(req).pipe(
            finalize(() => this.loader.hideLoader())
        )
    }
}
