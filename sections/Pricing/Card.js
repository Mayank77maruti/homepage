// import React from "react";
// import { Box, Paper, Typography, useTheme } from "@mui/material";
// import CheckIcon from "@mui/icons-material/Check";
// import CardDecoration from "../../assets/images/CardDecoration";

// const Card = ({
//     checked,
//     title,
//     description,
//     pricing,
//     features,
//     extendedPricing,
//     extendedDesc,
// }) => {
//     const theme = useTheme();
//     return (
//         <Paper
//             elevation={3}
//             sx={{
//                 height: 300,
//                 maxWidth: 300,
//                 mx: "auto",
//                 borderRadius: "8px",
//                 backgroundColor: "#FAFAFA", // Very light grey for a soft contrast
//                 border: `1px solid ${theme.palette.grey[300]}`, // Light border
//                 overflow: "hidden",
//             }}
//         >
//             <TopCard
//                 checked={checked}
//                 extendedDesc={extendedDesc}
//                 extendedPricing={extendedPricing}
//                 title={title}
//                 description={description}
//                 pricing={pricing}
//             />
//             <CardDecoration
//                 fill={theme.palette.primary.main} // Use a primary color for decoration
//                 style={{ height: "50px", transform: "translateY(7px)" }}
//             />
//             <ContentCard features={features} />
//         </Paper>
//     );
// };

// const TopCard = ({
//     checked,
//     title,
//     description,
//     pricing,
//     extendedPricing,
//     extendedDesc,
// }) => {
//     const theme = useTheme();
//     return (
//         <Box
//             sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "flex-end",
//                 p: 2,
//                 backgroundColor: theme.palette.primary.light, // Light primary background
//                 borderBottom: `1px solid ${theme.palette.grey[300]}`, // Light border below
//             }}
//         >
//             <Box>
//                 <Typography variant="h5" sx={{ color: theme.palette.primary.contrastText }}>
//                     {title}
//                 </Typography>
//                 <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
//                     {checked && extendedDesc ? extendedDesc : description}
//                 </Typography>
//             </Box>
//             <Box>
//                 <Typography sx={{ fontSize: "26px", color: theme.palette.secondary.main }}>
//                     {checked && extendedPricing ? extendedPricing : pricing} dt
//                     {extendedPricing && (
//                         <span style={{ fontSize: "12px", color: theme.palette.text.secondary }}>
//                             /{checked && extendedPricing ? "3 mois" : "mois"}
//                         </span>
//                     )}
//                 </Typography>
//             </Box>
//         </Box>
//     );
// };

// const ContentCard = ({ features }) => {
//     const theme = useTheme();
//     return (
//         <Box
//             sx={{
//                 p: 1,
//                 height: "100%",
//                 backgroundColor: theme.palette.grey[50], // Very light grey for content background
//             }}
//         >
//             <Box>
//                 {features.map((el, k) => (
//                     <Box
//                         key={k}
//                         sx={{
//                             display: "flex",
//                             alignItems: "center",
//                             mb: "2px",
//                         }}
//                     >
//                         <CheckIcon sx={{ mr: 1, color: theme.palette.secondary.main }} />
//                         <Typography sx={{ color: theme.palette.text.primary }}>{el}</Typography>
//                     </Box>
//                 ))}
//             </Box>
//         </Box>
//     );
// };

// export default Card;
