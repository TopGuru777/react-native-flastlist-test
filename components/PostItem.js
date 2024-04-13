import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { memo, useCallback, useState } from 'react';
import PostDetailsModal from './PostDetailsModal';

const PostItem = ({ userId, id, title, body }) => {
  const [showDetails, setShowDetails] = useState(false);

  const getPostDetails = useCallback(async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return await response.json()
    } catch (error) {
      console.error('Error fetching product list:', error);
    }
  }, [id]);

  const handleOpenDetails = () => {
    setShowDetails(true);
  }

  const handleCloseDetails = () => {
    setShowDetails(false);
  }

  return (
    <>
      <TouchableOpacity onPress={handleOpenDetails}>
        <Card style={styles.post}>
          <Text numberOfLines={1} style={styles.header}>
            {id}.{' '}
            <Text style={styles.title}>
              { title }
            </Text>
          </Text>
          <Text style={styles.body} numberOfLines={1}>
            { body }
          </Text>
        </Card>
      </TouchableOpacity>
      { showDetails && <PostDetailsModal id={id} visible={showDetails} getPostDetails={getPostDetails} onClose={handleCloseDetails} /> }
    </>
  )
}

const styles = StyleSheet.create({
  post : {
    marginVertical: 4,
    padding: 8
  },
  title: {
    fontWeight: 'bold'
  },
  header: {
    fontSize: 18
  },
  body: {
    fontSize: 16,
    marginLeft: 16
  }
});


export default memo(PostItem);