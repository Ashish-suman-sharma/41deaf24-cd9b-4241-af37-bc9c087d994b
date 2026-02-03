/* Healthcare Portal - Toast Alert Message */
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

// Auto-dismissing notification component
export default function AlertMessage({ open, setOpen, message }) {
    const dismissAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={dismissAlert}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert 
                onClose={dismissAlert} 
                icon={false} 
                sx={{ bgcolor: 'primary.green', color: '#fff' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}
