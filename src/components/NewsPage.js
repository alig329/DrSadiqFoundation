import React, { useState, useEffect } from "react";
import {
    Typography,
    Container,
    Grid, Box, Card, CardContent, Divider, Pagination,
} from "@mui/material";

const NewsPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // LinkedIn API Config
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchLinkedInPosts = async () => {
            try {
                const response = await fetch("https://dsfbackend.vercel.app/api/linkedin-posts"); 
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const data = await response.json();
                setPosts(data.elements || []);
            } catch (err) {
                setError("Error fetching LinkedIn posts.");
            } finally {
                setLoading(false);
            }
        };
    
        fetchLinkedInPosts();
    }, []);

    return (
        <Box>
            {/* Heading */}
            <Box sx={{ backgroundColor: '#027D40', padding: '40px', textAlign: 'center', marginBottom: '40px' }}>
                <Typography variant="h1" sx={{ fontFamily: 'Poppins', fontSize: { xs: '20px', sm: '30px', md: '40px' }, fontWeight: 'bold', color: '#FFFFFF' }}>
                    NEWS & UPDATES
                </Typography>
            </Box>

            {/* Main Content */}
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    {/* Blog Cards Section */}
                    <Grid item xs={12} md={8}>
                        {loading ? (
                            <Typography>Loading LinkedIn posts...</Typography>
                        ) : posts.length === 0 ? (
                            <Typography>No posts available</Typography>
                        ) : (
                            posts.map((post, index) => (
                                <Card key={index} sx={{ marginBottom: "20px" }}>
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            🗓 {new Date(post.lastModified.time).toLocaleDateString()}
                                        </Typography>
                                        <Typography variant="h5" sx={{ marginTop: "8px" }}>
                                            {post.specificContent["com.linkedin.ugc.ShareContent"].shareCommentary.text || "LinkedIn Post"}
                                        </Typography>
                                        <Divider sx={{ marginY: "8px" }} />
                                        <Typography variant="body2">
                                            {post.specificContent["com.linkedin.ugc.ShareContent"].shareMediaCategory === "ARTICLE"
                                                ? post.specificContent["com.linkedin.ugc.ShareContent"].media[0]?.originalUrl
                                                : "No article link available"}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))
                        )}

                        {/* Pagination (if needed) */}
                        <Box display="flex" justifyContent="center" sx={{ mt: 3 }}>
                            <Pagination count={3} color="primary" />
                        </Box>
                    </Grid>

                    {/* Sidebar Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6">Recent Updates</Typography>
                        <Divider sx={{ my: 2 }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default NewsPage;
