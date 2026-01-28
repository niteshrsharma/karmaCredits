import {
  Box,
  Typography,
  Grid,
  Divider
} from "@mui/material"
import { motion } from "framer-motion"
import styles from "./Footer.module.css"

// 🔑 language hook
import { useT } from "../../langSupport/useT"

// 🔗 router
import { NavLink } from "react-router-dom"

const MotionBox = motion(Box)

// shared nav keys WITH paths
const NAV_ITEMS = [
  { key: "nav.home", path: "/" },
  { key: "nav.about", path: "/about" },
  { key: "nav.faq", path: "/faq" },
  { key: "nav.contact", path: "/contact" },
]

export default function Footer() {
  const t = useT()

  return (
    <MotionBox
      component="footer"
      className={styles.footer}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Grid container spacing={4}>
        {/* Brand */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" className={styles.brand}>
            {t("brand.karmaCredits")}
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" className={styles.heading}>
            {t("footer.quickLinks")}
          </Typography>

          <Box className={styles.links}>
            {NAV_ITEMS.map(({ key, path }) => (
              <NavLink
                key={key}
                to={path}
                className={styles.link}
              >
                {t(key)}
              </NavLink>
            ))}
          </Box>
        </Grid>

        {/* Contact */}
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" className={styles.heading}>
            {t("footer.contact")}
          </Typography>

          <Box className={styles.contact}>
            <Typography>Email@karmacredits.com</Typography>
            <Typography>+91 123 444 2489</Typography>
            <Typography>{t("footer.address")}</Typography>
          </Box>
        </Grid>
      </Grid>

      <Divider className={styles.divider} />

      <Typography variant="caption" className={styles.copyright}>
        © 2026 {t("brand.karmaCredits")}. {t("footer.rights")}
      </Typography>
    </MotionBox>
  )
}
