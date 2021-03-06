import Ember from 'ember';
import DS from 'ember-data';
import GridNode from './grid-node';

export default GridNode.extend({

  classNames: DS.attr(),

  // relationships

  related: DS.hasMany('grid-node', {polymorphic: true, async: true}), 

  // local

  _template: Ember.on('ready', function() {
    var template = 'technologies/' + this.get('id');
    this.set('template', template);
  })

});
