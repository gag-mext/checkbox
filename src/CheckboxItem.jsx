import React from 'react';
import classNames from 'classnames';
import List from '@gag/list';
import Checkbox from './Checkbox';
import omit from 'omit.js';

const ListItem = List.Item;
function noop() { };

class CheckboxItem extends React.Component {
  render() {
    const {
      prefixCls, listPrefixCls, className, children, disabled, checkboxProps = {},
    } = this.props;

    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: disabled === true,
      [className]: className,
    });

    // Note: if not omit `onChange`, it will trigger twice on check listitem
    const otherProps = omit(this.props, ['listPrefixCls', 'onChange', 'disabled', 'checkboxProps']);
    if (disabled) {
      delete otherProps.onClick;
    } else {
      otherProps.onClick = otherProps.onClick || noop;
    }

    const extraProps: any = {};
    ['name', 'defaultChecked', 'checked', 'onChange', 'disabled'].forEach(i => {
      if (i in this.props) {
        extraProps[i] = this.props[i];
      }
    });

    return (
      <ListItem
        {...otherProps}
        prefixCls={listPrefixCls}
        className={wrapCls}
        thumb={<Checkbox {...checkboxProps} {...extraProps} />}
      >
        {children}
      </ListItem>
    );
  }
}
CheckboxItem.defaultProps = {
  prefixCls: 'am-checkbox',
  listPrefixCls: 'am-list',
};
CheckboxItem.propTypes = {
  style:React.PropTypes.object,
  defaultChecked:React.PropTypes.bool,
  checked:React.PropTypes.bool,
  disabled:React.PropTypes.bool,
  onChange:React.PropTypes.func,
  /** web only */
  prefixCls: React.PropTypes.string,
  className: React.PropTypes.string,
  name: React.PropTypes.string,
  wrapLabel:React.PropTypes.bool,
  listPrefixCls:React.PropTypes.any,
  children:React.PropTypes.any,
  extra:React.PropTypes.any,
  onClick:React.PropTypes.func,
  line:React.PropTypes.number,
  checkboxProps:React.PropTypes.object
};
CheckboxItem.displayName = "CheckboxItem";
module.exports=CheckboxItem;
