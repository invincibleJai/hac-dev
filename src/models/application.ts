import { K8sModel } from './../dynamic-plugin-sdk';

export const ApplicationModel: K8sModel = {
  apiGroup: 'appstudio.redhat.com',
  apiVersion: 'v1alpha1',
  kind: 'Application',
  plural: 'applications',
  abbr: 'APP',
  label: 'Application',
  labelPlural: 'Applications',
  namespaced: true,
};
