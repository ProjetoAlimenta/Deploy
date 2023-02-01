import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button} from "@material-ui/core";
import {Box} from '@mui/material';
import './ModalPostagem.css';
import CloseIcon from '@mui/icons-material/Close';
import CadastroPost from '../cadastroPost/CadastroPost';


function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 700,
            background: 'linear-gradient(rgba(0, 250, 75, 1),white)',
            border: '2px solid #000',
            boxShadow: theme.shadows[2],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

function ModalPostagem () {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box display="flex" justifyContent="flex-end" className="cursor">
        <CloseIcon onClick={handleClose}/>
      </Box>
      <CadastroPost/>
    </div>
  );

  return (
    <div>
      <Button
        variant="contained"
        className="btnModal"
        onClick={handleOpen}>Postar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default ModalPostagem