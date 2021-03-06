
const { Model, Validator } = require('objection');
const { DbErrors } = require('objection-db-errors');
const Joi = require('../utils/joi');

class QB extends Model.QueryBuilder {
}

class MyCustomValidator extends Validator {
  validate({ model, json }) { // eslint-disable-line class-methods-use-this
    const modelClass = model.constructor;

    const { error, value } = Joi.validate(json, modelClass.schema);
    if (error) throw error;

    // You need to return the (possibly modified) json.
    return value;
  }
}

class BaseModel extends DbErrors(Model) {
  static get QueryBuilder() {
    return QB;
  }

  static createValidator() {
    return new MyCustomValidator();
  }
}

module.exports = BaseModel;
