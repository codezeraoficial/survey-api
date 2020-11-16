import { IEmailValidator } from '../../../presentations/protocols/email-validator'
import validator from 'validator'
export class EmailValidatorAdapter implements IEmailValidator {
  isValid (email: string): boolean {
    return validator.isEmail(email)
  }
}