import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PostCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=1' }}
            style={styles.profilePic}
          />
          <Text style={styles.username}>Your Story</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1603415526960-f8f52f6ed74f' }}
        style={styles.postImage}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="chatbubble-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="paper-plane-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      
      <Text style={styles.likes}>1,024 likes</Text>
      <Text style={styles.caption}>
        <Text style={styles.username}>Your Story </Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  icon: {
    marginRight: 12,
  },
  likes: {
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  caption: {
    marginHorizontal: 10,
    marginTop: 4,
    marginBottom: 10,
  },
});

export default PostCard;
