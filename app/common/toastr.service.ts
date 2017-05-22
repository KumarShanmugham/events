import { Injectable } from '@angular/core';
let toastr: any;

@Injectable()
export class ToastrService {
    showSuccess(message: string, title?: string) {
        toastr.success(message, title);
    }
    showInformation(message: string, title?: string) {
        toastr.success(message, title);
    }
    showWarning(message: string, title?: string) {
        toastr.success(message, title);
    }
    showError(message: string, title?: string) {
        toastr.error(message, title);
    }
}