import React, { useState } from "react";
import {
    Typography,
    Container,
    Grid, Box, Card, CardContent, Divider, Stack, Chip, Avatar, TextField, Pagination,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const NewsPage = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs());

    return (
        <Box>
            {/* Heading */}
            <Box sx={{ backgroundColor: '#027D40', padding: '40px', alignItems: 'Center', marginBottom: '40px' }}>

                <Typography variant="h1" sx={{ fontFamily: 'Poppins', fontSize: { xs: '20px', sm: '30px', md: '40px' }, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF', marginBottom: '40px' }}>
                    NEWS & UPDATES
                </Typography>
            </Box>

            {/* Main Content */}
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Grid container spacing={3}>
                    {/* Blog Cards Section */}
                    <Grid item xs={12} md={8}>
                        {[1, 2, 3].map((item) => (
                            <Card key={item} sx={{ marginBottom: "20px" }}>
                                <Box sx={{ height: "200px", bgcolor: "#e0e0e0" }} />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        🗓 September 15, 2024 | No Comments
                                    </Typography>
                                    <Typography variant="h5" sx={{ marginTop: "8px" }}>
                                        Blog Post Title {item}
                                    </Typography>
                                    <Divider sx={{ marginY: "8px" }} />
                                    <Typography variant="body2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                        euismod justo non nunc tincidunt, id facilisis nisl auctor.
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}

                        {/* Pagination */}
                        <Box display="flex" justifyContent="center" sx={{ mt: 3 }}>
                            <Pagination count={3} color="primary" />
                        </Box>
                    </Grid>

                    {/* Sidebar Section */}
                    <Grid item xs={12} md={4}>
                        {/* Search */}
                        <TextField fullWidth label="Search..." variant="outlined" size="small" />
                        <Divider sx={{ my: 2 }} />

                        {/* Recent Comments */}
                        <Typography variant="h6">Recent Comments</Typography>
                        <Stack spacing={1}>
                            <Typography variant="body2">👤 Web Developer: This article was...
                            </Typography>
                            <Typography variant="body2">👤 Alice: Nice article!
                            </Typography>
                        </Stack>

                        <Divider sx={{ my: 2 }} />

                        {/* Calendar */}
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Calendar
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar
                                value={selectedDate}
                                onChange={(newDate) => setSelectedDate(newDate)}
                            />
                        </LocalizationProvider>
                        <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
                            Selected Date: {selectedDate.format("MMMM DD, YYYY")}
                        </Typography>

                        <Divider sx={{ my: 2 }} />

                        {/* Tags */}
                        <Typography variant="h6">Tags</Typography>
                        <Stack direction="row" spacing={1} sx={{ my: 1, flexWrap: "wrap" }}>
                            <Chip label="#health" variant="outlined" />
                            <Chip label="#hospital" variant="outlined" />
                            <Chip label="#education" variant="outlined" />
                            <Chip label="#food" variant="outlined" />
                            <Chip label="#welfare" variant="outlined" />
                        </Stack>

                        <Divider sx={{ my: 2 }} />

                        {/* Instagram Feed */}
                        <Typography variant="h6">Instagram</Typography>
                        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                            <Avatar variant="square" src="#" sx={{ width: 70, height: 70 }} />
                            <Avatar variant="square" src="#" sx={{ width: 70, height: 70 }} />
                            <Avatar variant="square" src="#" sx={{ width: 70, height: 70 }} />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default NewsPage;
