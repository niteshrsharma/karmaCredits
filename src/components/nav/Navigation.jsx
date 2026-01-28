import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { motion } from "framer-motion"
import { useState } from "react"
import { useTheme } from "@mui/material/styles"
import styles from "./Navigation.module.css"

import { useT } from "../../langSupport/useT"
import { useLang } from "../../langSupport/LangProvider"
import { NavLink } from "react-router-dom"

import logo from '../../assets/logo.svg';

const MotionAppBar = motion(AppBar)

const navItems = [
  { key: "nav.home", path: "/" },
  { key: "nav.about", path: "/about" },
  { key: "nav.faq", path: "/faq" },
  { key: "nav.contact", path: "/contact" },
]

export default function Navigation() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const t = useT()
  const { lang, setLang } = useLang()

  const [langAnchor, setLangAnchor] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const changeLang = (lng) => {
    setLang(lng)
    setLangAnchor(null)
    setDrawerOpen(false)
  }

  return (
    <>
      <MotionAppBar
        position="fixed"
        elevation={0}
        className={styles.navbar}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6" className={styles.logo}>
            <img
              src={logo}
              alt={t("brand.karmaCredits")}
              className={styles.logoImg}
            />
          </Typography>

          {/* Desktop */}
          {!isMobile && (
            <Box className={styles.navLinks}>
              {navItems.map(({ key, path }) => (
                <NavLink
                  key={key}
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `${styles.linkWrapper} ${isActive ? styles.activeLink : ""}`
                  }
                >
                  <Button className={styles.link}>
                    {t(key)}
                  </Button>
                </NavLink>
              ))}

              <Button
                className={styles.langButton}
                onClick={(e) => setLangAnchor(e.currentTarget)}
              >
                {lang.toUpperCase()}
              </Button>

              <Menu
                anchorEl={langAnchor}
                open={Boolean(langAnchor)}
                onClose={() => setLangAnchor(null)}
                slotProps={{ paper: { className: styles.langMenu } }}
              >
                <MenuItem onClick={() => changeLang("en")}>English</MenuItem>
                <MenuItem onClick={() => changeLang("mr")}>मराठी</MenuItem>
              </Menu>
            </Box>
          )}

          {/* Mobile */}
          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </MotionAppBar>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{ paper: { className: styles.drawer } }}
      >
        <List>
          {navItems.map(({ key, path }) => (
            <ListItem key={key} disablePadding>
              <ListItemButton
                component={NavLink}
                to={path}
                end={path === "/"}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={t(key)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <Box className={styles.drawerLang}>
          <Typography variant="subtitle2">{t("nav.language")}</Typography>
          <Button fullWidth onClick={() => changeLang("en")}>English</Button>
          <Button fullWidth onClick={() => changeLang("mr")}>मराठी</Button>
        </Box>
      </Drawer>

      <div className={styles.toolbarSpacer} />
    </>
  )
}
