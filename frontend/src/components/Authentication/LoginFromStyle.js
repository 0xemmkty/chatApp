/* eslint-disable no-dupe-keys */
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3rem",
    height: "auto",
    color: "#000000", // Changed to black
    [theme.breakpoints.down(499)]: {
      width: "100%",
    },
  },
  form: {
    margin: "auto",
    borderRadius: "5px",
    alignContent: "center",
    padding: "2rem",
    width: "70vmin",
    color: "#000000", // Changed to black
    [theme.breakpoints.down(699)]: {
      width: "80%",
    },
    [theme.breakpoints.down(499)]: {
      width: "93%",
    },
  },

  heading: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
    color: "#FF69B4", // Changed to pink
    fontWeight: 800,
    [theme.breakpoints.down(699)]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.down(499)]: {
      fontSize: "1rem",
    },
  },
  nameInput: {
    position: "relative",
    "& > label": {
      left: ".2rem",
    },
    padding: "4px 0px",
    fontSize: "1rem",
    width: "100%",
    marginBottom: theme.spacing(5),
    height: ".7rem",
  },
  emailInput: {
    position: "relative",
    "& > label": {
      left: ".2rem",
    },
    padding: "4px 0px",
    fontSize: "1rem",
    width: "100%",
    marginTop: theme.spacing(3),
    height: ".7rem",
  },
  passwordInput: {
    position: "relative",
    "& > label": {
      left: ".2rem",
    },
    padding: "4px 0px",
    width: "100%",
    height: ".7rem",
    marginTop: theme.spacing(8),
    "&.MuiOutlinedInput-input": {
      padding: "14px 14px",
    },
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  strengthIndicator: {
    marginTop: theme.spacing(1),
  },

  showPasswordButton: {
    position: "absolute",
    top: "50%",
    color: "#FF69B4", // Changed to pink
    fontSize: "12px",
    right: theme.spacing(2),
    transform: "translateY(-50%)",
    border: "none",
    "&:hover": {
      color: "#FFFFFF", // Changed to white
      background: "none",
    },
  },
  rememberMeContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
    marginTop: theme.spacing(7),
    color: "#FF69B4",
    "& .MuiIconButton-label": {
      color: "#FFFFFF", // Changed to pink
    },
  },
  forgotPasswordLink: {
    color: "#FF69B4", // Changed to pink
    textDecoration: "none",
    fontWeight: 600,
    "&:hover": {
      textDecoration: "underline",
      color: "#FFFFFF", // Changed to black
    },
  },
  termsAndConditionsText: {
    fontFamily: "Roboto",
    color: "#FFFFFF", // Changed to black
    textAlign: "center",
    lineHeight: "17px",
    paddingLeft: "4px",
    marginTop: theme.spacing(2),
    fontSize: "14px",
  },
  loginButton: {
    color: "#fff",
    backgroundColor: "#FF69B4", // Changed to pink
    border: "2px solid #FF69B4", // Changed to pink
    margin: `${theme.spacing(3)}px 0`,
    marginTop: "1rem",
    "&:disabled": {
      backgroundColor: "#000000", // Changed to black
      color: "#E4E4EB",
      borderColor: "#000000", // Changed to black
    },
    "&:hover": {
      backgroundColor: "#000000", // Changed to black
      borderColor: "#000000", // Changed to black
    },
  },
  privacyText: {
    marginLeft: "4px",
    textDecoration: "underline",
    color: "#FF69B4", // Changed to pink
    fontSize: "14px",
    "&:hover": {
      color: "#000000", // Changed to black
    },
  },
  createAccount: {
    fontSize: "1rem",
    fontWeight: 500,
    color: "#FF69B4", // Changed to pink
    paddingLeft: "6px",
    "&:hover": {
      color: "#FFFFFF", // Changed to black
      textDecoration: "underline",
    },
  },
  donthaveaccount:{
    color: "#FFFFFF"
  },
  textField: {
    "& .MuiOutlinedInput-adornedEnd": {
      paddingRight: theme.spacing(0),
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#EBEBF0",
      padding: "12px 14px",
    },
    "& .MuiInputLabel-root": {
      color: "#8F90A6",
      fontSize: "16px",
      textAlign: "center",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#EBEBF0",
      fontSize: "14px",
      textAlign: "center",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#FF69B4", // Changed to pink
      },
      "& .MuiOutlinedInput-input": {
        padding: "13px 8px",
        backgroundColor: "#55577052",
        borderRadius: "5px",
      },
      "& .Mui-focused fieldset": {
        borderColor: "#000000", // Changed to black
        outline: "none",
      },
    },
  },

  avatar: {
    margin: "8px auto",
    backgroundColor: "#FF69B4", // Changed to pink
  },
  gridcheckbox: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "3rem",
  },
  checkbox: {
    "& .MuiTypography-body1": {
      fontSize: "13px",
      color:"#FFFFFF"
    },
    marginTop: theme.spacing(1),
    "& .MuiIconButton-label": {
      color: "#FF69B4", // Changed to pink
    },
  },

  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "3.5rem",
  },
  avatar2: {
    marginLeft: "6px",
    backgroundColor: "#FF69B4", // Changed to pink
    "&.MuiAvatar-colorDefault": {
      color: "#F2F2F5",
      backgroundColor: "#FF69B4", // Changed to pink
    },
    "&:hover": {
      backgroundColor: "#000000", // Changed to black
    },
  },
  input: {
    display: "none",
  },
  button: {
    color: "white",
    backgroundColor: "#FF69B4", // Changed to pink
    "&:hover": {
      backgroundColor: "#000000", // Changed to black
    },
  },
}));

export default useStyles;

