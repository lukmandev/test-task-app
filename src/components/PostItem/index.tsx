import {
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
} from '@mui/material';
import React from 'react';
import {Post} from 'types/post';

type IPostItemProps = {
	item: Post;
};

const PostItem = ({item}: IPostItemProps) => {
	return (
		<Card>
			<CardContent>
				<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
					{item.title}
				</Typography>
				<Typography variant="h5" component="div">
					User id is {item.userId}
					<br /> Post Id is {item.id}
				</Typography>
				<Typography variant="body2">{item.body}</Typography>
			</CardContent>
		</Card>
	);
};

export default PostItem;
