import React from 'react'
import { Dialog, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core'

export const DialogSimple = ({open, handleClose, handleAgree, contentText, cancelText, continueText}) => {
  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {contentText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {cancelText}
          </Button>
          <Button onClick={handleAgree} color="primary" autoFocus>
            {continueText}
          </Button>
        </DialogActions>
      </Dialog>
  )
}
