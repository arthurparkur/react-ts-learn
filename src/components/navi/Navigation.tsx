import * as React from 'react';
import classes from './Navigation.scss';

export default class Navigation extends React.Component {
    public render () {
        return (
            <React.Fragment>
                <div className={classes.Navigation}/>
            </React.Fragment>
        );
    }
}
