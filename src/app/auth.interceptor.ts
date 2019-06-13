import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ExamMarksServiceService } from "./exam-marks-service.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private exammarks: ExamMarksServiceService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.exammarks.getToken();
        const authrequest = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + token
            }

        })

        return next.handle(authrequest);

    }


}