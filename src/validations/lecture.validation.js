const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createLecture = {
  body: Joi.object().keys({
    boardId: Joi.string().custom(objectId),
    mediumId: Joi.string().custom(objectId),
    classId: Joi.string().custom(objectId),
    subjectId: Joi.string().custom(objectId),
    bookId: Joi.string().custom(objectId),
    chapterId: Joi.string().custom(objectId),
    lessionName: Joi.string().required(),
    icon1: Joi.string(),
    icon2: Joi.string(),
    path: Joi.string(),
    videoType: Joi.string(),
    type: Joi.string().required(),
    order: Joi.number().required(),
  }),
};

const getLectures = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getLecture = {
  params: Joi.object().keys({
    lessionId: Joi.string().custom(objectId),
  }),
};

const getLectureVideobychapterId = {
  params: Joi.object().keys({
    chapterId: Joi.string().custom(objectId),
  }),
};
const getLessionByFilter = {
  params: Joi.object().keys({
    boardId: Joi.string().custom(objectId).required(),
    mediumId: Joi.string().custom(objectId).required(),
    classId: Joi.string().custom(objectId).required(),
    subjectId: Joi.string().custom(objectId).required(),
    bookId: Joi.string().custom(objectId).required(),
    chapterId: Joi.string().custom(objectId).required(),
  }),
};

const updateLession = {
  params: Joi.object().keys({
    lessionId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      boardId: Joi.string().custom(objectId),
      mediumId: Joi.string().custom(objectId),
      classId: Joi.string().custom(objectId),
      subjectId: Joi.string().custom(objectId),
      bookId: Joi.string().custom(objectId),
      chapterId: Joi.string().custom(objectId),
      lessionName: Joi.string().required(),
      icon1: Joi.string(),
      icon2: Joi.string(),
      path: Joi.string(),
      videoType: Joi.string(),
      type: Joi.string().required(),
      order: Joi.number().required(),
      thumbnail: Joi.string().required(),
      poster: Joi.string().required(),
    })
    .min(1),
};

const deleteLession = {
  params: Joi.object().keys({
    lessionId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createLecture,
  getLectures,
  getLecture,
  updateLession,
  deleteLession,
  getLectureVideobychapterId,
  getLessionByFilter,
};
