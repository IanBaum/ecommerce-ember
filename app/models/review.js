import DS from 'ember-data';

export default DS.Model.extend({
  reviewer: DS.attr(),
  body: DS.attr()
});
