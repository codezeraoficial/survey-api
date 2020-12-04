import { SurveyResultModel } from '@/domain/models/survey-result'
import { mockFakeSurveyResult } from '@/domain/test'
import { SaveSurveyResult, SaveSurveyResultParams } from '@/domain/usecases/survey-result/save-survey-result'

export const makeSaveSurveyResult = (): SaveSurveyResult => {
  class SaveSurveyResultStub implements SaveSurveyResult {
    async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
      return await new Promise(resolve => resolve(mockFakeSurveyResult()))
    }
  }

  return new SaveSurveyResultStub()
}
