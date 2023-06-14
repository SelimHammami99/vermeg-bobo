import React from "react";
import { useRouteError } from "react-router-dom";
import { createStyles, Grid } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

const useStyles = createStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const ErrorPage = () => {
  const error = useRouteError();
  const { classes } = useStyles();
  const { height } = useViewportSize();

  return (
    <Grid style={{ height: height }}>
      <Grid.Col className={classes.container}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Grid.Col>
    </Grid>
  );
};

export default ErrorPage;
