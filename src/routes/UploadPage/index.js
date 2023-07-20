import React from "react";
import PageContent from "../../components/PageContent";
import Page from "../../components/Page";
import PageHeader, { HeaderLeft } from "../../components/PageHeader";
import { Button, Group, Text, createStyles } from "@mantine/core";

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

const UploadPage = () => {
  const { classes } = useStyles();
  return (
    <Page>
      <PageHeader>
        <HeaderLeft>
          <Text className={classes.title}>Upload</Text>
        </HeaderLeft>
      </PageHeader>
      <PageContent>
        <Group spacing={10}>
          <Button>Log File</Button>
          <Button>Multiple Files</Button>
        </Group>
      </PageContent>
    </Page>
  );
};

export default UploadPage;
