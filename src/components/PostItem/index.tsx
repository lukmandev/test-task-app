import {Card, CardContent, Typography} from '@mui/material';

import {Post} from 'types/post';

type PostItemPropsType = {
	item: Post;
};

const PostItem = ({item}: PostItemPropsType) => {
	return (
		<Card>
			<CardContent>
				<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
					{item.title}
				</Typography>
				<Typography variant="h5" component="div">
					Id Пользователя {item.userId}
					<br />
					Id поста {item.id}
				</Typography>
				<Typography variant="body2">{item.body}</Typography>
			</CardContent>
		</Card>
	);
};

export default PostItem;
