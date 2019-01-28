import Trigger, { IPopoverTriggerProps } from './Trigger';

export interface IFocusTriggerProps extends IPopoverTriggerProps {}

export default class FocusTrigger extends Trigger<IFocusTriggerProps> {
  getTriggerProps(child) {
    return {
      onFocus: evt => {
        this.props.open();
        this.triggerEvent(child, 'onFocus', evt);
      },

      onBlur: evt => {
        this.props.close();
        this.triggerEvent(child, 'onBlur', evt);
      },
    };
  }
}