import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        boxShadow: "none"
    },
    track: {
        background: "#2051A3",
        opacity: 0.6,
        height: "3px",
    },
    rail: {
        height: "3px",
    },
    thumb: {
        top: "37%",
        background: "#2051A3",
        border: "3px solid #D6D7E4",
        borderRadius: "10px",
        width: "20px",
        height: "20px",
        '&:hover': {
            boxShadow: "none",
        },
        '&:active': {
            boxShadow: "none",
        },
        '&:focus': {
            boxShadow: "none",
        }
    },
    focusVisible: {
        boxShadow: "none"
    }
});

export default useStyles;
