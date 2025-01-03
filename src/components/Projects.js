import React, { useState } from "react";
import {
  Box,  Tabs, Tab, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, LinearProgress,
} from "@mui/material";

const projectsData = {
  ongoing: [
    {
      title: "DSF Hospital",
      description: "DSFH has completed its documentation stage of 220-bedded hospital...",
      image: "/hosp1.png",
      link: "/hospital",
      raised: 80005,
      goal: 90000,
    },
    {
      title: "Scholarships",
      description: "To Public Sector Universities of Pakistan, DSF has offered scholarships...",
      image: "/edu.png",
      link: "/scholarships",
      raised: 75000,
      goal: 150000,
    },
    {
        title: "BBH Food Project",
        description: "Started in February 2010. Since then, the project is fully functional with the manpower of 21 employees...",
        image: "/bbh2.png",
        link: "/foodprojects",
        raised: 50000,
        goal: 150000,
      },
      {
        title: "Women Empowerment",
        description: "DSF has collaboration with various institutions for providing financial and management assistance...",
        image: "/women.png",
        link: "/vocational",
        raised: 55000,
        goal: 150000,
      },
      {
        title: "Dispensaries",
        description: "We operate two dispensaries in the Chakri Region, providing healthcare services to people in the region.",
        image: "/disp2.png",
        link: "/dispensaries",
        raised: 75000,
        goal: 150000,
      },
      {
        title: "Project ABC",
        description: "Massa sed sed sed risus pretium quam. Bibendum neque egestas congue quisque egestas diam.",
        image: "https://via.placeholder.com/150",
        link: "/hospital",
        raised: 75000,
        goal: 150000,
      }
    // Add more ongoing projects...
  ],
  completed: [
    {
      title: "XYZ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: "https://via.placeholder.com/150",
      category: "Completed",
      raised: 101135,
      goal: 150000,
    },
  ],
  future: [
    {
      title: "Future Project",
      description: "Details about the future project...",
      image: "https://via.placeholder.com/150",
      category: "Future",
      raised: 0,
      goal: 50000,
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
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card>
          <CardMedia
            component="img"
            height="240"
            image={project.image}
            alt={project.title}
          />
          <CardContent>
            <Typography variant="h6">{project.title}</Typography>
            <Typography variant="body2" color="#000000">
              {project.description}
            </Typography>
            
            <Box mt={2}>
              <LinearProgress
                variant="determinate"
                value={(project.raised / project.goal) * 100}
              />
              <Typography variant="caption">
                ${project.raised} Raised / ${project.goal} Goal
              </Typography>
            </Box>
          </CardContent>
          <CardActions sx={{ justifyContent: 'space-between' }}>
            <Button size="medium" color="primary" 
            onClick={() => window.location.href = project.link}
            >
              View Details
            </Button>
            <Button
            sx={{
              width: "150px",
              fontFamily: "Poppins",
              fontSize: "12px",
              color: "#FFFFFF",
              backgroundColor: "#ECA30C",
              borderRadius: "10px",
              "&:hover": { backgroundColor: "#cc8a09" },
              textAlign: "center",
              animationDuration: "0ms",
              margin: "10px"
            }}
            onClick={() => window.location.href = "donate"}
          >
            Support The Cause
          </Button>
          </CardActions>
        </Card>
      </Grid>
    ));
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        centered
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Completed Projects" />
        <Tab label="Ongoing Projects" />
        <Tab label="Future Projects" />
      </Tabs>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {renderCards(getProjectData())}
        </Grid>
      </Box>
    </Box>
  );
}

export default Projects;
