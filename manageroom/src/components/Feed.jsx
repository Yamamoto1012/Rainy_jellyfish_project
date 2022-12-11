import React from 'react'
import {
    Box,
    Button,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    } from "@mui/material";

export const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Card sx={{ maxWidth: 700 }}>
      <CardMedia
        component="img"
        height="20%"
        image="https://www.kanazawa-it.ac.jp/kitnews/2020/__icsFiles/afieldfile/2020/09/23/20200923_jishu_ogp.jpg"
        alt="study_room"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          作成した座席表一覧
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ここからあなたが作成した座席表の管理ができます。
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" compnent="a" href="/Create">作成</Button>
        <Button size="small">確認</Button>
      </CardActions>
    </Card>
    </Box>
  )
}

export default Feed;