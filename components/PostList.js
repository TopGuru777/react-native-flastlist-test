import { FlatList, StyleSheet } from 'react-native';
import { memo, useMemo } from 'react';
import PostItem from './PostItem';

const PostList = ({data}) => {

  const formattedData = useMemo(() => {
    return data.map(item => item)
  }, [data]);

  return (
    <FlatList
      style={styles.postsContainer}
      initialNumToRender={10}
      data={formattedData}
      renderItem={({ item }) => <PostItem key={item.id} {...item} />}
    />
  )
}

const styles = StyleSheet.create({
  postsContainer: {
    marginTop: 24
  }
});

export default memo(PostList);