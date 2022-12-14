import { Visibility, Weather } from './enums'
import { NewDiaryEntry } from './types'

const parseComment = (commandFromRequest: any): string => {
  if (!isString(commandFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }

  return commandFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isDate(dateFromRequest) || !isString(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }

  return dateFromRequest
}

const parseWheater = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromRequest
}

const isString = (string: string): boolean => typeof string === 'string'

const isDate = (date: string): boolean => Boolean(Date.parse(date))

const isWeather = (weather: any): boolean => Object.values(Weather).includes(weather)

const isVisibility = (visibility: any): boolean => Object.values(Visibility).includes(visibility)

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWheater(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
