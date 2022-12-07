"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const parseComment = (commandFromRequest) => {
    if (!isString(commandFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commandFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isDate(dateFromRequest) || !isString(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const parseWheater = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather');
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility');
    }
    return visibilityFromRequest;
};
const isString = (string) => typeof string === 'string';
const isDate = (date) => Boolean(Date.parse(date));
const isWeather = (weather) => Object.values(enums_1.Weather).includes(weather);
const isVisibility = (visibility) => Object.values(enums_1.Visibility).includes(visibility);
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWheater(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
