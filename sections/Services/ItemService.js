import React from "react";
import { Box, useTheme, Divider, Typography } from "@mui/material";

const ItemService = ({ title, subtitle, svg: SvgComponent }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                color: "black", // This applies to the text color
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                [theme.breakpoints.down("md")]: {
                    mb: 5,
                },
            }}
        >
            <SvgComponent style={{ fill: "black" }} /> {/* Ensure SVG is black */}
            <Typography sx={{ mt: 1, color: "black" }} variant="body1" align="center">
                {title}
            </Typography>
            {subtitle && (
                <Typography sx={{ color: "black" }} variant="body2" align="center">
                    {subtitle}
                </Typography>
            )}
            <Divider variant="middle" sx={{ backgroundColor: "black" }} /> {/* Black divider */}
        </Box>
    );
};

export default ItemService;
