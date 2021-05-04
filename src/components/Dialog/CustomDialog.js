import React from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

function CustomDialog({ customDialog, setCustomDialog }) {
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="dialog-title"
      open={customDialog.isOpen}
      fullWidth
    >
      <DialogTitle id="dialog-title">{customDialog.title}</DialogTitle>
      <DialogContent>
        {customDialog.content}
      </DialogContent>
      <DialogActions>
        {customDialog.onCancel && (
          <Button autoFocus onClick={() => setCustomDialog({ ...customDialog, isOpen: false })} color="primary">
            Cancel
          </Button>
        )}
        <Button onClick={customDialog.onConfirm} color="primary" variant="contained">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialog;
