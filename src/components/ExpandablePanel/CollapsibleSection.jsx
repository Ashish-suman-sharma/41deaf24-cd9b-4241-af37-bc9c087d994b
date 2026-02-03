/* Healthcare Portal - Collapsible FAQ Section */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// Styled accordion component with custom appearance
const StyledAccordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    '&::before': {
        display: 'none',
    },
    '&:not(:last-child)': {
        marginBottom: 24,
    },
}));

// Styled accordion header with rotating expand icon
const AccordionHeader = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<AddIcon sx={{ color: 'primary.main' }} />}
        {...props}
    />
))(() => ({
    backgroundColor: false,
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(45deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: 0,
    },
    padding: 0,
}));

// Styled accordion content container
const AccordionContent = styled(MuiAccordionDetails)(() => ({
    padding: 0,
}));

// Collapsible section component for FAQ-style content
export default function CollapsibleSection({ data }) {
    const [activePanel, setActivePanel] = React.useState('');

    const togglePanel = (panelId) => (event, isExpanded) => {
        setActivePanel(isExpanded ? panelId : false);
    };

    return (
        <div>
            {data.map((faqItem, idx) => (
                <StyledAccordion 
                    key={idx} 
                    expanded={activePanel === `section${idx}`} 
                    onChange={togglePanel(`section${idx}`)}
                >
                    <AccordionHeader 
                        aria-controls={`section${idx}-content`} 
                        id={`section${idx}-header`}
                    >
                        <Typography
                            fontSize={18}
                            fontWeight={700}
                            color='#1B3C74'
                            lineHeight={1.2}
                        >
                            {faqItem.question}
                        </Typography>
                    </AccordionHeader>
                    <AccordionContent>
                        <Typography fontSize={14}>
                            {faqItem.answer}
                        </Typography>
                    </AccordionContent>
                </StyledAccordion>
            ))}
        </div>
    );
}
