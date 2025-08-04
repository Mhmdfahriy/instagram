import React from "react";
import { ScrollView, View } from "react-native";
import StoryBubble from "../../components/StoryBubble";
import PostCard from "../../components/PostCard";

const stories = [
  { id: 1, name: "Your Story", image: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Dezta", image: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Aulia", image: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Satria", image: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Viona", image: "https://i.pravatar.cc/150?img=5" },
];

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
        {stories.map((story, index) => (
          <StoryBubble
            key={story.id}
            name={story.name}
            image={story.image}
            isFirst={index === 0}
          />
        ))}
      </ScrollView>

      {/* PostCard bisa di bawah story */}
      <PostCard />
    </View>
  );
}
