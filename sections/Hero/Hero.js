import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import HeroFooter from "./HeroFooter";

const Hero = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: { xs: "400px", md: "500px" },
          borderRadius: "0 0 80px 80px",
          overflow: "hidden",
          border: "6px solid transparent",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box
          component="img"
          src="https://fefevs.sirv.com/matulya2.webp"
          alt="background"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(85%)",
          }}
        />
        <Container
          maxWidth="lg"
          sx={{
            pt: { xs: 10, md: 15 },
            pb: { xs: 8, md: 12 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#ffffff",
              fontWeight: 500,
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
              maxWidth: "600px",
              lineHeight: 1.4,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Transforming offices into vibrant stories
          </Typography>
        </Container>
      </Box>
      <HeroFooter />
    </>
  );
};

export default Hero;