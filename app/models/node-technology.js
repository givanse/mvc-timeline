import Ember from 'ember';
import DS from 'ember-data';
import GridNode from './grid-node';

export default GridNode.extend({

  classNames: DS.attr(),

  // relationships

  related: DS.hasMany('grid-node', {polymorphic: true}), 

  // local

  template: Ember.computed('ready', function() {
    return 'technologies/' + this.get('id');
  })

});
