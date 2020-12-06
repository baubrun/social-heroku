import {
    makeStyles
} from "@material-ui/core/styles"



export default makeStyles((theme) => ({
    appBar: {
        alignItems: "center",
        display: "flex",
        borderRadius: "15px",
        flexDirection: "row",
        justifyContent: "center",
        margin: "30px 0",
    },
    img: {
        margin: "8px",
    },
    [theme.breakpoints.down("sm")]: {
        postsContainer: {
            flexDirection: "column-reverse",
        },
    },

}))