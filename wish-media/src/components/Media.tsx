import '../styles/MediaStyles.css';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { useState } from 'react';
import Playlist from './Playlist';

interface Props {
    artworkUrl100: string;
    shortDescription: string | undefined;
    trackName: string;
    trackId: number;
    kind: string;
}

const Media = (props: Props) => {
    const { artworkUrl100, shortDescription, trackName, kind } = props;
    const [open, setOpen] = useState(false);

    // const handleClose = () => {
    //     onClose(selectedValue);
    //   };
    
      const handleListItemClick = () => {
        console.log("I would make the post request")
      };
    

    const handleClickOpen = () => {
        setOpen(true);
      };

    const openModal = () => {

    }


    return (
        <>
            <div id="card">
                <div id="image-text">
                    <div id="artwork">
                        <img src={artworkUrl100} alt="album-cover" />
                    </div>
                    <div id="media-info">
                        <h1>{trackName}</h1>
                        <h5>Media: {kind}</h5>
                        <p>{shortDescription}</p>

                    </div>
                </div>
                <div id="add-btn">
                    <button onClick={handleClickOpen}>Add to playlist</button>
                </div>
            </div>
            <Dialog open={open}>
                <DialogTitle>Please sign in to manage playlists</DialogTitle>

               
                {/* <List sx={{ pt: 0 }}>
                    <ListItem autoFocus button onClick={() => handleClickOpen()}>
                        
                    </ListItem>
                </List> */}
            </Dialog>
        </>

    )
}

/* 


const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;


  return (
    
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

 

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

*/

export default Media;
