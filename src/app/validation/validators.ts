import { FormControl } from "@angular/forms";

export function EmailValidator (control: FormControl) {     // ERROR : ValidationErrors
    return !control.value || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value) 
    ? null : {"email": true};
}
