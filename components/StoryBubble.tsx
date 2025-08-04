// app/components/StoryBubble.tsx
import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type StoryBubbleProps = {
  isFirst?: boolean;
  name: string;
  image: string;
};

const StoryBubble: React.FC<StoryBubbleProps> = ({ isFirst, name, image }) => {
  return (
    <View style={{ alignItems: 'center', marginRight: 12 }}>
      <TouchableOpacity onPress={() => router.push('/story')}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            borderWidth: 2,
            borderColor: '#ccc',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Image
            source={{ uri: image }}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
          {isFirst && (
            <Ionicons
              name="add-circle"
              size={24}
              color="#0095f6"
              style={{
                position: 'absolute',
                bottom: -2,
                right: -2,
                backgroundColor: '#fff',
                borderRadius: 12,
              }}
            />
          )}
        </View>
      </TouchableOpacity>
      <Text style={{ marginTop: 4, fontSize: 12, color: '#000' }}>
        {name}
      </Text>
    </View>
  );
};

export default StoryBubble;
