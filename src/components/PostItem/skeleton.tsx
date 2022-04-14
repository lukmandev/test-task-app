import {Card, CardContent, Skeleton} from '@mui/material';

const PostItemSkeleton = () => {
	return (
		<Card>
			<CardContent>
				<Skeleton width="100%" height={42} />
				<Skeleton width="100%" height={64} />
				<Skeleton width="100%" height={80} />
			</CardContent>
		</Card>
	);
};

export default PostItemSkeleton;
