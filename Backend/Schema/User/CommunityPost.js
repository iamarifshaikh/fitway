// models/CommunityPost.js

import mongoose from 'mongoose';

const communityPostSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  profilePicSrc: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Number,
    default: 0,
  },
});

const CommunityPost = mongoose.model('CommunityPost', communityPostSchema);

export default CommunityPost;
