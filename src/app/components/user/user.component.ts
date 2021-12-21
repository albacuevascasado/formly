import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Nation } from 'src/app/models/nation';
import { CitiesService } from 'src/app/services/cities.service';
import { NationsService } from 'src/app/services/nations.service';
import { switchMap } from 'rxjs/operators';
import { emailValidationMessage } from 'src/app/validation/validation_messages';
import { EmailValidator } from 'src/app/validation/validators';
import { formlyRow } from 'src/app/format_formly/format_row';
import { formlyNationInput } from 'src/app/input/input_nations';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(private nationService: NationsService, private citiesService: CitiesService) { }

  form: FormGroup = new FormGroup({});
  model!: {
    id: number,
    firstname: string,
    email: null;
    age:number;
    nationId: number;
    cityId: number;
  };

  fields: FormlyFieldConfig[] = [
  {
    //hidden property 
    key: "id"
  }, 
  formlyRow([

    {
      key: "firstname",
      type: "input",
      className: "flex-2",
      templateOptions: {
        label: "First Name",
        type: "text",
        placeholder: "Insert your name",
        required: true
      }
    },
    {
      key: "surname",
      type: "input",
      className: "flex-2",
      templateOptions: {
        label: "Surname",
        type: "text",
        placeholder: "Insert your surname",
        required: true
      }
    },
    {
      key: "age",
      type: "input",
      className: "flex-1",
      templateOptions: {
        label: "Age",
        type: "number",
        min: 18 //minimum age = 12
      }
    },

  ]),  
  formlyRow([
    {
      key: "email",
      type: "input",
      className: "flex-6",
      templateOptions: {
        label: "E-mail",
        type: "email",
        email: true
        //pattern:  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      },
      validators :  { validation : [EmailValidator]},
      validation : { messages : {email : emailValidationMessage} }
    }]),
  {
    fieldGroupClassName: 'display-flex',
    fieldGroup: [
    formlyNationInput(this.nationService.getNations()),
    {
      key: "cityId",
      type: "select",
      className: "flex-3",
      templateOptions: {
        label: "City",
        options: []
      },

      expressionProperties: {
      "templateOptions.disabled": model => model.nationId == null
      },

      //hideExpression: '!model.nationId',  // why so slow?

      hooks: {
        onInit: (field) => { //ERROR: field : FormlyFieldConfig
          field!.templateOptions!.options = field!.form!.get("nationId")!.valueChanges
          .pipe(switchMap(nationId => this.citiesService.getCities(nationId)));

        }
      }
    }],
  }
]

  onSubmit(form: FormGroup){
    if (form.valid) {
      console.log(form.value);
    }
  }
}


