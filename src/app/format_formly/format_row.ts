import { FormlyFieldConfig } from "@ngx-formly/core";

export const formlyRow = (fieldConfig : FormlyFieldConfig[]) => {
    return {
        fieldGroupClassName : "display-flex",
        fieldGroup: fieldConfig
    }
}