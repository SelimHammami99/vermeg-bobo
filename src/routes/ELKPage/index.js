import React from "react";
import PageContent from "../../components/PageContent";
import Page from "../../components/Page";
import PageHeader, { HeaderLeft } from "../../components/PageHeader";
import { Text, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colors.darkest,
    fontWeight: 500,
    fontSize: 30,
  },
  content: {
    color: theme.colors.darkest,
    fontWeight: 500,
    fontSize: 18,
  },
}));

const EIKPage = () => {
  const { classes } = useStyles();
  return (
    <Page>
      <PageHeader>
        <HeaderLeft>
          <Text className={classes.title}>EIK</Text>
        </HeaderLeft>
      </PageHeader>
      <PageContent>
        <Text className={classes.content}>Stack Dashboard</Text>
      </PageContent>
    </Page>
  );
};

export default EIKPage;
