import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Cancel";
import CheckIcon from "@material-ui/icons/Check";


export const Task = props => {
    const handleComplete = () => {
        props.onComplete(props.task.id);
    };

    const handleDelete = () => {
        props.onDelete(props.task.id);
    };

    const completionIcon = props.task.done ? (
        <ListItemIcon>
            <CheckIcon/>
        </ListItemIcon>
    ) : (
        ""
    );

    return (
        <ListItem button onClick={handleComplete}>
            {completionIcon}
            <ListItemText primary={props.task.text} />
            <ListItemSecondaryAction>
                <IconButton onClick={handleDelete}>
                    <DeleteIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};