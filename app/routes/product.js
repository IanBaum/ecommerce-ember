import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('product', params.product_id);
  },

  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('model.reviews', 'sortBy'),

  actions: {
    writeReview(params) {
      var newReview = this.store.createRecord('review', params);
      var product = params.product;
      product.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return product.save();
      });
      this.transitionTo('product', product.id);
    },

    deleteReview(review) {
      if (confirm('Delete this review?')) {
        review.destroyRecord();
      }
    }
  }
});
