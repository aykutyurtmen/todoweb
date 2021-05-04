import { Grid } from '@material-ui/core'
import React, { useEffect} from 'react'
import TodoListData from "../components/TodoListData";

const TodoList = () => {

    useEffect(() => {

    }, []);

    return (
        <Grid>
            <TodoListData />
        </Grid>
    );
};

export default TodoList;