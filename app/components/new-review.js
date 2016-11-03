import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    writeReview() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        product: this.get('product')
      };
      this.sendAction('writeReview', params);
    }
  }
});
