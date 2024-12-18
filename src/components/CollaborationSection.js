import React from "react";
import { Box, Typography, Grid } from '@mui/material';

const CollaborationSection = () => (
    <Box
     sx={{
       width: "100%",
       padding: { xs: 2, sm: 4 },
                alignItems: "center",
                 }} >
                   <Typography variant="h4"
                    sx={{
                       fontFamily: "Poppins",
                         fontWeight: "600",
                           textAlign: "center",
                            color: "#000000",
                            marginBottom: 3,
                             fontSize: { xs: "24px", sm: "32px", md: "50px" },
                             
                                    }} >
                                       Collaboration for Sustainable Progress 
                                       </Typography> 
                                       <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {["/5arid.png", "/khaybar.png", "/gomal.png", "/alkhid.png", "/nsu.png"].map((src, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Box
              component="img"
              src={src}
              alt={`badge-${index}`}
              sx={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Grid>
        ))}
      </Grid>
      </Box>
      ); 

    export default CollaborationSection;