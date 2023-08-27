import SuccessAnimation from '../SuccessAnimation';
import { Component } from 'react';
import { ViewProps } from 'react-native';

declare module 'my-component' {}
export { SuccessAnimation };

declare module 'kaankoc-rn-success-animation' {
  export default class SuccessAnimation extends Component<ViewProps> {}
}
