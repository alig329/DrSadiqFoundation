import React, { useState } from "react";
import {
  Box, Tabs, Tab, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, LinearProgress,
} from "@mui/material";

const projectsData = {
  ongoing: [
    
    {
      title      : "Scholarships",
      description: "To Public Sector Universities of Pakistan, DSF has offered scholarships...",
      image      : "https://i.ibb.co/cKDJw2FV/edu.webp",
      link       : "/scholarships",
      raised     : 75000,
      goal       : 150000,
    },
    
    {
      title      : "Women Empowerment",
      description: "DSF has collaboration with various institutions for providing financial and management assistance...",
      image      : "https://i.ibb.co/ds05YG5W/women.webp",
      link       : "/vocational",
      raised     : 55000,
      goal       : 150000,
    },
    {
      title      : "Dispensaries",
      description: "We operate two dispensaries in the Chakri Region, providing healthcare services to people in the region.",
      image      : "https://i.ibb.co/mrRcfQxf/disp2.webp",
      link       : "/dispensaries",
      raised     : 75000,
      goal       : 150000,
    },
    
      // Add more ongoing projects...
  ],
  completed: [
    {
      title      : "BBH Food Project",
      description: "Started in February 2010. Since then, the project is fully functional with the manpower of 21 employees...",
      image      : "https://i.ibb.co/BHrcKQ61/bbh3.webp",
      link       : "/foodprojects",
      raised     : 50000,
      goal       : 150000,
    },
  ],
  future: [
    {
      title      : "DSF Hospital",
      description: "DSFH has completed its documentation stage of 220-bedded hospital...",
      image      : "https://i.ibb.co/KxLjGGw9/8.webp",
      link       : "/hospital",
      raised     : 80005,
      goal       : 90000,
    },
  ],
};

function Projects() {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const getProjectData = () => {
    switch (selectedTab) {
      case 0: 
        return projectsData.completed;
      case 1: 
        return projectsData.ongoing;
      case 2: 
        return projectsData.future;
      default: 
        return [];
    }
  };

  const renderCards = (projects) => {
    return projects.map((project, index) => (
      <Grid item xs = {12} sm = {6} md = {4} key = {index}>
        <Card>
          <CardMedia
            component = "img"
            height    = "240"
            image     = {project.image}
            alt       = {project.title}
          />
          <CardContent>
            <Typography variant = "h6">{project.title}</Typography>
            <Typography variant = "body2" color = "#000000">
              {project.description}
            </Typography>

            <Box mt = {2}>
              <LinearProgress
                variant = "determinate"
                value   = {(project.raised / project.goal) * 100}
              />
              <Typography variant = "caption">
                ${project.raised} Raised / ${project.goal} Goal
              </Typography>
            </Box>
          </CardContent>
          <CardActions sx      = {{ justifyContent: 'center' }}>
          <Button      size    = "medium" color = "primary"
                       onClick = {() => window.location.href = project.link}
            >
              View Details
            </Button>
            
          </CardActions>
        </Card>
      </Grid>
    ));
  };

  return (
    <Box sx = {{ width: "100%", mt: 4 }}>
      <Tabs
        value    = {selectedTab}
        onChange = {handleTabChange}
        centered
        textColor      = "primary"
        indicatorColor = "primary"
      >
        <Tab label = "Completed Projects" />
        <Tab label = "Ongoing Projects" />
        <Tab label = "Future Projects" />
      </Tabs>
      <Box  sx                = {{ mt: 4 }}>
      <Grid container spacing = {4}>
          {renderCards(getProjectData())}
        </Grid>
      </Box>
    </Box>
  );
}

export default Projects;
