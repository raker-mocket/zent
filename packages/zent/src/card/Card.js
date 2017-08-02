import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Card extends (PureComponent || Component) {
  static defaultProps = {
    style: {},
    bodyStyle: {},
    className: '',
    prefix: 'zent'
  };
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.object,
    bodyStyle: PropTypes.object,
    className: PropTypes.string,
    prefix: PropTypes.string
  };
  render() {
    const {
      title,
      action,
      style,
      children,
      className,
      bodyStyle,
      prefix
    } = this.props;
    this.isValidTitle = typeof title === 'string' || typeof title === 'number';
    this.isValidAction = action !== undefined;

    return (
      <div className={`${prefix}-card ${className}`} style={style}>
        {(this.isValidTitle || this.isValidAction) &&
          <div className={`${prefix}-card-header`}>
            {this.isValidTitle &&
              <h3 className={`${prefix}-card-header__title`}>
                {title}
              </h3>}
            {this.isValidAction &&
              <div className={`${prefix}-card-header__action`}>
                {action}
              </div>}
          </div>}
        <div className={`${prefix}-card-body`} style={bodyStyle}>
          {children}
        </div>
      </div>
    );
  }
}
