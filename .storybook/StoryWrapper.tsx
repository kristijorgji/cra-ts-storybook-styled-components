import React from 'react';
import {ThemeProvider} from 'styled-components';
import Light from "../src/styles/themes/Light/Light";

const getTheme = (theme?: string) => {
    switch (theme) {
        default:
            return Light;
    }
};

interface Props {
    theme?: string
}

const StoryWrapper: React.FunctionComponent<Props> = (props) => (
    <ThemeProvider theme={getTheme(props.theme)}>{props.children}</ThemeProvider>
);

export default StoryWrapper;
