import { FormlyFieldConfig } from "@ngx-formly/core";

export function minValidationMessage(err: any, field : FormlyFieldConfig){
    //console.log(err, field);
    return `Provide a value bigger than ${err.min}. You wrote ${err.actual}`
  }

export function emailValidationMessage (err: any, field : FormlyFieldConfig) {
  return `"${field.formControl!.value}" is not a valid e-mail address `

}