import {Button, styled} from "@mui/material";

export const CustomizedButton = styled(Button)({
    textTransform: 'capitalize',
    backgroundColor: '#5271FF',
    color: 'white',
    borderRadius: '50px',
    fontSize: '16px',
    '&:hover': {
        color: '#5271FF',
        borderColor: '#5271FF',
        backgroundColor: '#edeefc',
    },
}) as typeof Button;