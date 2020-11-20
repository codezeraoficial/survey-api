import { badRequest } from '../../../helpers/http/http-helper'
import { Validation } from '../../../protocols'
import { HttpRequest, HttpResponse, IController } from './add-survey-controller-protocols'

export class AddSurveyController implements IController {
  constructor (
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if (error) {
      return badRequest(error)
    }
    return await new Promise(resolve => resolve(null))
  }
}