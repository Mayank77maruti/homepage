import { Box, Grid, useTheme } from "@mui/material";
import React from "react";
import ItemFooter from "./ItemFooter";

const content = [
    { title: "24/7 Access", description: "Enjoy 24/7 access by subscribing with us." },
    { title: "Community", description: "Our community is one of our pillars. There’s nothing better than a good network to move forward." },
    { title: "Comfort", description: "Our space offers all amenities, allowing you to focus solely on your goals." },
];

const HeroFooter = () => {
    const theme = useTheme();
    return (
        <Box
        sx={{
            width: "80%",
            p: 4,
            marginLeft: "auto",
            marginTop: "-80px",
            borderLeft: `4px solid rgba(0, 0, 0, .2)`,
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            background: `#e9e9e9`, // Soft gradient
           
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effect
            '&:hover': {
                transform: 'translateY(-5px)', // Slight lift effect on hover
              
            }
        }}
    >
            <Grid container columns={content.length} spacing={2}>
                {content.map((elem, k) => (
                    <Grid key={k} item md={1} xs={content.length}>
                        <ItemFooter 
                            title={elem.title}
                            description={elem.description}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default HeroFooter;
