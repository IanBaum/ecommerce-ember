import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions:{
    addToCart(item){
      this.get('shoppingCart').add(item);
      this.get('shoppingCart').calculateTotal();
    },

    writeReview() {
      var params = {
        reviewer: this.get('reviewer'),
        body: this.get('body'),
        product: this.get('product')
      };
      this.sendAction('writeReview', params);
    }
  }
});
