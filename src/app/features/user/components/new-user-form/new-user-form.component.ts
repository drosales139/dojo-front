import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormBase } from '@dojo/base';
import { NAME_MAXLENGTH, NAME_REGEX } from '@dojo/constants';
import { alphaWithSpaceValidator } from '@dojo/validators/alpha-with-space';
import { whitespaceValidator } from '@dojo/validators/whitespace.validator';

@Component({
  selector: 'new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss'],
})
export class NewUserFormComponent extends FormBase implements OnInit {
  @Output('onSubmit') _submit = new EventEmitter();
  NAME_MAXLENGTH = NAME_MAXLENGTH;

  constructor(private formBuilder: FormBuilder) {
    super();
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email, whitespaceValidator]],
      password: ['', [Validators.required, whitespaceValidator]],
      rol: ['', [Validators.required, whitespaceValidator]],
      RFC: ['', [Validators.required, whitespaceValidator]],
      storeName: [
        '',
        [
          Validators.required,
          Validators.pattern(NAME_REGEX),
          alphaWithSpaceValidator,
          whitespaceValidator,
        ],
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(NAME_REGEX),
          alphaWithSpaceValidator,
          whitespaceValidator,
        ],
      ],
      firstSurname: [
        '',
        [
          Validators.required,
          Validators.pattern(NAME_REGEX),
          alphaWithSpaceValidator,
          whitespaceValidator,
        ],
      ],
      secondSurname: [
        '',
        [
          Validators.required,
          Validators.pattern(NAME_REGEX),
          alphaWithSpaceValidator,
          whitespaceValidator,
        ],
      ],
    });
  }

  ngOnInit(): void {}
}
