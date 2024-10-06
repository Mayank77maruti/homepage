import React from "react";
import { Box, Container, Divider, styled, Typography, useTheme } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                mt: 20,
                pb: 4,
            }}
        >
            <Divider variant="middle" sx={{ mb: 5 }} />
            <Container maxWidth="md">
                <Box display="flex" alignItems="center">
                    <LocationOnIcon />
                    <Typography variant="body1" sx={{ ml: 2 }}>
                    Makhija Arcade, 35th Rd, Khar, Khar West, Mumbai, Maharashtra 400052
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <LocalPhoneIcon />
                    <Typography variant="body1" sx={{ ml: 2 }}>
                    +919136036603
/
+919920207026
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <MailIcon />
                    <Typography variant="body1" sx={{ ml: 2 }}>
                    sales@603thecoworkingspace.com
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                    <Box style={{ flex: 1 }}>
                        <StyledIcon href="https://www.facebook.com/codehubtn">
                            <FacebookIcon />
                        </StyledIcon>
                        <StyledIcon href="https://www.instagram.com/codehub.coworking">
                            <InstagramIcon />
                        </StyledIcon>
                    </Box>
                    <Typography variant="h7">© 2024 603 the coworking space</Typography>
                </Box>
            </Container>
        </Box>
    );
};

const StyledIcon = styled("a")({
    marginRight: 10,
    verticalAlign: "middle",
    "& svg": {
        fontSize: "35px",
        color: "grey",
        cursor: "pointer",
        "&:hover": {
            color: "#fff",
        },
        transition: ".1s",
    },
});

export default Footer;
