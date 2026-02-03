/* Healthcare Portal - Phone Number Input Form */
import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";

// Form component for sending app download link via SMS
export default function PhoneInput() {
    return (
        <Box mb={5}>
            <Typography fontWeight={600} mb={1}>
                Receive the download link on your phone
            </Typography>
            <Box component='form' sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
                <TextField
                    sx={{
                        border: '1px solid #F0F0F0',
                        flex: 1,
                    }}
                    placeholder="Your phone number"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                +91
                            </InputAdornment>
                        )
                    }}
                    required
                />
                <Button type='submit' size='large' variant="contained" disableElevation>
                    Send Link
                </Button>
            </Box>
        </Box>
    );
}
