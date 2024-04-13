import { SafeAreaView, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import PostList from './components/PostList';


export default function App() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json()
      setPosts(data);
    } catch (error) {
      console.error('Error fetching product list:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <PostList data={posts} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  postsContainer: {
    marginTop: 24
  }
});
