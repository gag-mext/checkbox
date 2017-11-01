import React from 'react';
import RcCheckbox from 'rc-checkbox';
import omit from 'omit.js';
import classNames from 'classnames';

class Checkbox extends React.Component{
  static CheckboxItem: any;
  static AgreeItem: any;
  render() {
    const { prefixCls, className, style, children } = this.props;
    const wrapCls = classNames({
      [className]: !!className,
      [`${prefixCls}-wrapper`]: true,
    });
    const mark = (
      <label className={wrapCls} style={style}>
        <RcCheckbox {...omit(this.props, ['className', 'style'])} />
        {children}
      </label>
    );
    if (this.props.wrapLabel) {
      return mark;
    }
    return <RcCheckbox {...this.props} />;
  }
}
Checkbox.defaultProps = {
  prefixCls: 'am-checkbox',
  wrapLabel: true,
};
Checkbox.propTypes = {

  style:React.PropTypes.object,
  defaultChecked:React.PropTypes.bool,
  checked:React.PropTypes.bool,
  disabled:React.PropTypes.bool,
  onChange:React.PropTypes.func,
  /** web only */
  prefixCls: React.PropTypes.string,
  className: React.PropTypes.string,
  name: React.PropTypes.string,
  wrapLabel:React.PropTypes.bool
};
Checkbox.displayName = "Checkbox";
module.exports=Checkbox;
