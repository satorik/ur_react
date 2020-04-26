import React from 'react'
import { Dialog, DialogActions, Button, Checkbox, FormControlLabel, Grid , Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  box: {
    padding: theme.spacing(2),
  },
}))

export const DialogBasic = ({open, handleClose, handleCancel, handleAgree, agreeText, disagreeText, checked, handleChangeSaveChoice}) => {
  const classes = useStyles()
  return (
    <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
      <Box className={classes.box}>
       <Grid container justify="space-around">
         <Grid item>
            <Button onClick={handleCancel} color="primary">
            {disagreeText}
          </Button>
         </Grid>
         <Grid item>
           <Button onClick={handleAgree} color="primary" autoFocus>
            {agreeText} 
          </Button>
         </Grid>
       </Grid>

        <FormControlLabel
        control={<Checkbox
          checked={checked}
          onChange={handleChangeSaveChoice}
          color="primary"
          />
        }
        label="Запомнить выбор на этом устройстве"
        />
      </Box>
    </Dialog>
  )
}
