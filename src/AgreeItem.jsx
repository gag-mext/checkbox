import React from 'react';
import classNames from 'classnames';
import Checkbox from './Checkbox';
import getDataAttr from '@gag/util/getDataAttr';
import omit from 'omit.js';

class AgreeItem extends React.Component{
  render() {
    const { prefixCls, style, className } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-agree`]: true,
      [className]: className,
    });

    return (<div {...getDataAttr(this.props)} className={wrapCls} style={style}>
      <Checkbox {...omit(this.props, ['style'])} className={`${prefixCls}-agree-label`} />
    </div>);
  }
}
AgreeItem.defaultProps = {
      prefixCls: 'am-checkbox',
};
AgreeItem.propTypes = {
      children: React.PropTypes.any
};
AgreeItem.displayName = "AgreeItem";
module.exports=AgreeItem;
