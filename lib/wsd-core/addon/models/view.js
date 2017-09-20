import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    description: DS.attr(),
    drilldownTarget: DS.attr(),
    appliesTo: DS.attr({ defaultValue: [] }),
    tags: DS.attr(),
    filter: DS.attr(),

    isForWsysdig: Ember.computed('tags', function() {
        return Ember.isEmpty(this.get('tags')) === false && this.get('tags').includes('wsysdig');
    }).readOnly(),
});