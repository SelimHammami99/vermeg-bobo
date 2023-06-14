import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  createStyles,
} from "@mantine/core";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: "block",
    width: "100%",
    padding: "0.5rem",
    color: theme.black,
    fontSize: theme.fontSizes.sm,
  },
  link: {
    fontWeight: 500,
    display: "block",
    textDecoration: "none",
    padding: "0.5rem",
    paddingLeft: "2rem",
    marginLeft: "1.5rem",

    color: theme.colors.light,

    "&:hover": {
      backgroundColor: theme.colors.dark,
    },
  },
  chevron: {
    transition: "transform 200ms ease",
    color: theme.colors.light,
  },
  navLink: {
    textDecoration: "none",
  },
  icon: {
    padding: 5,
  },

  linkActive: {
    backgroundColor: theme.colors.mid,
    color: theme.colors.darkest,
    "&:hover": {
      backgroundColor: theme.colors.mid,
    },
  },
  bullet: {
    height: 10,
    width: 10,
    background: theme.colors.light,
    borderRadius: "50%",
    marginLeft: -37,
  },
  bulletActive: {
    background: theme.colors.brand,
  },
  subLinkTxt: {
    width: 200,
    marginLeft: -6,
    fontSize: 16,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    [theme.fn.smallerThan("lg")]: {
      width: 100,
    },
    [theme.fn.smallerThan("sm")]: {
      width: "70%",
    },
  },
  label: {
    color: theme.colors.light,
    fontSize: 18,
  },
}));

const NavbarLinksGroup = ({ id, defaultLabel, links, icon: Icon }) => {
  const { classes, theme, cx } = useStyles();
  const [active, setActive] = useState("client");

  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(false);
  const ChevronIcon = !opened ? IconPlus : IconMinus;

  const items = (hasLinks ? links : []).map((subLink) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: subLink.id === active,
      })}
      key={subLink.label}
      to={subLink.link}
      onClick={(event) => {
        setActive(subLink.id);
      }}>
      <Group style={{ marginLeft: 20 }}>
        <ThemeIcon
          className={cx(classes.bullet, {
            [classes.bulletActive]: subLink.id === active,
          })}
          sx={{
            border: 0,
            backgroundColor: "transparent",
            color:
              subLink.id === active ? theme.colors.darkest : theme.colors.light,
          }}
          size="lg"
          radius="sm">
          <subLink.icon />
        </ThemeIcon>
        <Text className={classes.subLinkTxt}>{subLink.label}</Text>
      </Group>
    </Link>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}>
        <Group position="apart" spacing={0}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon
              className={classes.icon}
              sx={{
                border: 0,
                backgroundColor: "transparent",
                color: theme.colors.light,
              }}
              size="lg"
              radius="sm">
              <Icon />
            </ThemeIcon>
            <Box ml="xs" className={classes.label}>
              {defaultLabel}
            </Box>
          </Box>
          {hasLinks && (
            <ChevronIcon className={classes.chevron} size={14} stroke={1.5} />
          )}
        </Group>
      </UnstyledButton>

      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
};

NavbarLinksGroup.propTypes = {
  id: PropTypes.string.isRequired,
  links: PropTypes.array,
  icon: PropTypes.any,
  link: PropTypes.string,
};

export default NavbarLinksGroup;
