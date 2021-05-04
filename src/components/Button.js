import React  from 'react'
import Button from '@material-ui/core/Button';
import * as _ from 'lodash'

const CustomButton = (props) => {
  const {onClick,className,children,disabled} = props;
  return (
    <Button
      disableTouchRipple={true}
      disableFocusRipple={true}
      disableRipple={true}
      onClick={_.debounce(async () => {
        await onClick()
      }, 300)}
      className={className}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

export default CustomButton