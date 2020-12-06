import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    margin: "10px 0",
    width: "90%",
  },
  heading: {
    color: "white",
  },
  paper: {
    padding: theme.spacing(2),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  btn: {
    marginBottom: "10px",
  },
}));
