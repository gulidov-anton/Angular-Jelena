import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngForms';
  form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      skills: new FormArray([]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('Moscow', [Validators.required, Validators.email]),
      })
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Form submitted', this.form);
      const formData = { ...this.form.value };
    }
  }

  setCapital() {
    const cityMap = {
      ru: "Moscow",
      ua: "Kiev",
      by: "Minsk",
    }
    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];

    this.form.patchValue({address: {city}});
  }

    addSkill() {
      const control = new FormControl('', Validators.required);
      (this.form.get('skills') as FormArray).push(control);
    }

}
