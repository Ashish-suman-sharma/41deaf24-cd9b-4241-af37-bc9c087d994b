/* Healthcare Portal - Footer Menu Item Component */
import { Link, Stack } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Reusable footer link component with arrow icon
export default function FooterMenuItem({ children }) {
    return (
        <Link underline="none" color='#fff' fontWeight={300} fontSize={14} sx={{ cursor: 'pointer' }}>
            <Stack direction='row' gap={0.5}>
                <KeyboardArrowRightIcon />
                {children}
            </Stack>
        </Link>
    );
}
