import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const ConfirmationDialog = ({ open, options, onCancel, onConfirm, onClose }) => {
  const {
    title,
    description,
    confirmationText,
    cancellationText,
    dialogProps,
    dialogTitleProps,
    dialogContentProps,
    dialogContentTextProps,
    confirmationButtonProps,
    cancellationButtonProps,
  } = options

  return (
    <Dialog {...dialogProps} disableBackdropClick open={open} onClose={onClose}>
      {title && (
        <DialogTitle {...dialogTitleProps}>{title}</DialogTitle>
      )}
      {description && (
        <DialogContent {...dialogContentProps}>
          <DialogContentText {...dialogContentTextProps}>{description}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button {...cancellationButtonProps} onClick={onCancel}
                disableTouchRipple={true}
                disableFocusRipple={true}
                disableRipple={true}
        >
          {cancellationText}
        </Button>
        <Button color="primary"
                {...confirmationButtonProps}
                onClick={onConfirm}
                disableTouchRipple={true}
                disableFocusRipple={true}
                disableRipple={true}
        >
          {confirmationText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmationDialog
