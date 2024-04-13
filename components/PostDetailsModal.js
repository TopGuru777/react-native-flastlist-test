import { useEffect, useState } from 'react';
import { View, Modal, Text, Pressable, StyleSheet } from 'react-native'

const PostDetailsModal = ({ visible, onClose, getPostDetails }) => {
  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getPostDetails();
      setPostDetails(data);
    }
    fetchDetails();
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            onPress={onClose}
            style={styles.closeButton}
          >
            <Text style={styles.closeText}>X</Text>
          </Pressable>
          {
            postDetails &&
            <View>
              <Text style={styles.header}>
                {postDetails.id}.{' '}
                <Text style={styles.title}>
                  { postDetails.title }
                </Text>
              </Text>
              <Text style={styles.authorContainer}>
                Posted By <Text style={styles.author}>User { postDetails.userId }</Text>
              </Text>
              <Text style={styles.body}>
                { postDetails.body }
              </Text>
            </View>
          }
        </View>
      </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(40, 40, 40,0.3)'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  closeButton : {
    position: 'absolute',
    right: 16,
    top: 16
  },
  closeText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold'
  },
  header: {
    fontSize: 18,
    textAlign: 'center'
  },
  body: {
    fontSize: 16,
    marginLeft: 16
  },
  body: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 16
  },
  authorContainer: {
    marginTop: 8,
    textAlign: 'right'
  },
  author: {
    fontWeight: 'bold'
  }
});


export default PostDetailsModal;