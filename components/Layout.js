import Head from "next/head";
import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const Layout = ({ title, keywords, description, children, sx, ...rest }) => {
    return (
        <>
            <Head>
                <title>{title || "Code Hub - Coworking Space in Sousse"}</title>
                <meta name="description" content={description || "A coworking space, a haven for creatives, freelancers, and startups, with stunning views of Sousse."} />
                <meta name="keywords" content={keywords.length > 0 ? keywords.map((elem) => elem.trim()).join(", ") : "sousse, coworking, tunis"} />
                <meta name="author" content="Code Hub" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#121212" />
            </Head>
            <Box component="main" sx={{ minHeight: "100vh", ...sx }} {...rest}>
                {children}
            </Box>
        </>
    );
};

Layout.defaultProps = {
    title: "Code Hub - Coworking Space in Sousse",
    description: "A coworking space, a haven for creatives, freelancers, and startups, with stunning views of Sousse.",
    keywords: ["sousse", "coworking", "tunis"],
};

Layout.propTypes = {
    title: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    children: PropTypes.node.isRequired,
    sx: PropTypes.object,
};

export default Layout;
