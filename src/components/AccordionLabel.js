import Typography from "@material-ui/core/Typography";
import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import {Grid} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";

const AccordionLabel = (categoryData) => {

    const classes = useStyles();
    const [openDialog, setOpenDialog] = useState(false);
    const [categoryName, setCategoryName] = useState("");
    const [categoryParentID, setCategoryParentID] = useState(0);

    useEffect(() => {
        console.log("CATEGORY: ", categoryData);
    }, []);

    const handleClickOpenDialog = (parentID) => {
        console.log("parentID: ", parentID);
        setCategoryParentID(parentID);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <paper className={classes.paper}>
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                disableEnforceFocus={true}
                disableBackdropClick
                disableEscapeKeyDown
                scroll={'body'}
                fullWidth
            >
                <DialogTitle id="form-dialog-title">New Category</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter a Category Name
                    </DialogContentText>
                    <TextField
                        onChange={e => setCategoryName(e.target.value)}
                        autoFocus
                        margin="dense"
                        id="newCategoryName"
                        label="Categoy Name"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleSaveDialog()} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            <Table aria-label="simple table" className={classes.table}>
                <TableBody>
                    <TableRow key={categoryData.category.id}>
                        <TableCell component="th" scope="row" align="center">
                            <Grid item xs>
                                {categoryData.category.id}
                            </Grid>
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                            <Grid item xs>
                                {categoryData.category.categoryName}
                            </Grid>
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                            <Grid item xs>
                                {categoryData.category.parent}
                            </Grid>
                        </TableCell>
                        {!categoryData.isSub ?
                            <TableCell align="right">
                                <Grid item xs>
                                    <Button
                                        className={classes.addDiscountButton}
                                        onClick={() => handleClickOpenDialog(categoryData.category.id)}>Add Sub
                                        Category</Button>
                                </Grid>
                            </TableCell>
                            : <div/>
                        }
                        <TableCell align="right">
                            <Grid item xs>
                                <Button
                                    className={classes.deleteDiscountButton}
                                    onClick={() => {
                                        handleDeleteCategory(categoryData.category.id)
                                    }}>Delete
                                    Category</Button>
                            </Grid>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </paper>
    );

};

const useStyles = makeStyles(theme => ({
    paper: {
        width: "100%",
        outline: 'none',
    },
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: "600",
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.secondary.light,
        },
        '& tbody td': {
            width: "33%",
            fontWeight: "400",
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: "pointer"
        }
    },
    deleteDiscountButton: {
        textTransform: 'none',
        backgroundColor: '#B22222',
        '&:hover': {
            background: '#CD5C5C',
        },
        color: 'white',
        fontSize: 13,
        lineHeight: '19px',
    },
    addDiscountButton: {
        textTransform: 'none',
        backgroundColor: theme.palette.info.main,
        color: 'white',
        fontSize: 13,
        lineHeight: '19px',
    },
}));

export default AccordionLabel;