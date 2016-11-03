import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    writeReview() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        rating: this.get('rating'),
        product: this.get('product')
      };
      this.sendAction('writeReview', params);
    }
  }
});
