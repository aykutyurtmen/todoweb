import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const SnackBar = (props) => {
  const {isOpen, message, hideDuration,severity,onCloseFunc} = props;

  return (
    <Snackbar open={isOpen} autoHideDuration={hideDuration} onClose={onCloseFunc}>
      <Alert onClose={onCloseFunc} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )

}

export default SnackBar