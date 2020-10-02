import {
  Directive,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Directive()
export abstract class FormBase<T = any> {
  @Input() isSubmitting: boolean;

  @Output('onSubmit') _submit = new EventEmitter();

  @ViewChild(FormGroupDirective, { static: true })
  ngForm: FormGroupDirective;

  form: FormGroup;

  onSubmit(): void {
    this._submit.emit(this.form.value);
  }

  reset(value?: any) {
    this.ngForm.resetForm(value);
  }

  isFormValid(): boolean {
    return this.form.valid;
  }

  isFormInvalid(): boolean {
    return this.form.invalid;
  }

  isFormPending(): boolean {
    return this.form.pending;
  }

  getFormValue(): T {
    return this.form.value;
  }

  shouldDisable(): boolean {
    return (
      this.isSubmitting ||
      ((this.isFormInvalid() || this.isFormPending()) &&
        (this.ngForm ? this.ngForm.submitted : true))
    );
  }
}
