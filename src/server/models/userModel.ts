import mongoose from 'mongoose';

const URI = 'mongodb+srv://CheckMateAuth:testtest123@checkmateauth.ymjnuen.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI, {
  // useNewUrlParser: true, 
  // useUnifiedTopology: true
})
  .then(() => {
  console.log('Connected to user database')
  })
  .catch(() => {
  console.log('Failed to connect to user database')
})

const Schema = mongoose.Schema; 

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
  
})

const User = mongoose.model('User', userSchema);

export default User;