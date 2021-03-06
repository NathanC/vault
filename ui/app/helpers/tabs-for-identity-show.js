import Ember from 'ember';

export const TABS = {
  entity: ['details', 'aliases', 'policies', 'groups', 'metadata'],
  'entity-alias': ['details', 'metadata'],
  //group will be used in the model hook of the route
  group: ['details', 'aliases', 'policies', 'members', 'metadata'],
  'group-internal': ['details', 'policies', 'members', 'metadata'],
  'group-external': ['details', 'aliases', 'policies', 'members', 'metadata'],
  'group-alias': ['details'],
};

export function tabsForIdentityShow([modelType, groupType]) {
  let key = modelType;
  if (groupType) {
    key = `${key}-${groupType}`;
  }
  return TABS[key];
}

export default Ember.Helper.helper(tabsForIdentityShow);
