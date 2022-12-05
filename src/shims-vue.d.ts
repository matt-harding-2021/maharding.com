/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
};
declare module 'vue3-mq';
declare module '@*' {
  const contents:{default: string}
  export = contents
};