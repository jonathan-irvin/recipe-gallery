import React from 'react';
import "../styles/Card.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';


const PostCard = ({ board, 
                    likes, 
                    comments, 
                    title, 
                    time, 
                    image, 
                    user, 
                    body, 
                    id, 
                    likePost,
                    url
                }) => {

    console.log(comments);
    let date = new Date(time*1000).toISOString().toLocaleString("en-US").slice(5,10)

    const handleLike = (id) => {
        likePost(id);
    }

    console.log(url)

    return (
        <div className='card'>
            <Card sx={{ width: 600 }}>               
                <Grid container  >
                    <Grid item xs={1} direction="column" container justifySelf="center">
                        <Button align="left" size="small" onClick={() => handleLike(id)}><ArrowCircleUpOutlinedIcon /></Button>
                        {likes} 
                        <Button align="left" size="small"><ArrowCircleDownOutlinedIcon /></Button>
                    </Grid>
                    <Grid item xs={11}>
                    <CardContent>
                        <Typography variant="caption" align="right" component="div">
                            Posted under <Link to={`/board/${board}/`}>{board}</Link>
                        </Typography>
                        <Typography variant="caption" align="left" component="div">
                            Posted on {date} by <Link to={`/user/${user}/`}>{user}</Link>
                        </Typography>
                        <Link to={`/post/${id}/`} style={{ textDecoration: 'none' }}>
                        <Typography variant="h4" align="left" color="black" component="div">
                            {title}
                        </Typography>

                        <CardMedia
                            component="img"
                            height="200"
                            image={image}
                            alt={board}
                        />
                        </Link>
                        <Typography variant="body2" align="left" color="text.secondary">
                            {body}
                        </Typography>
                        <Typography variant="caption" align="left" component="div">
                            <Link to="{url}">{url}</Link>
                        </Typography>
                        <CardActions>
                            
                            <Link to={`/post/${id}/`} style={{ textDecoration: 'none' }}>
                                <Button size="small"><ChatBubbleOutlineIcon />{comments} comments</Button>
                            </Link>
                        </CardActions>
                    </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default PostCard