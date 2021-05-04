import { Grid } from '@material-ui/core'
import React, { useEffect} from 'react'
import CalendarData from "../components/CalendarData";

const Calendar = () => {

    useEffect(() => {

    }, []);

    return (
        <Grid>
            <CalendarData />
        </Grid>
    );
};

export default Calendar;