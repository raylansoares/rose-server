import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  code: String,
  broadcaster_id: String,
  login: String,
  display_name: String,
  email: String,
  profile_image_url: String,
  access_token: String,
  refresh_token: String,
  expires: Date,
  created_at: Date,
  updated_at: Date
})

export default mongoose.model('User', UserSchema)
