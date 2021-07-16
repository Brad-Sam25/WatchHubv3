const db = require('../config/connection');
const { Profile, Post } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const postSeeds = require('./postSeeds.json');

db.once('open', async () => {
  try {
    await Post.deleteMany({});
    await Profile.deleteMany({});

    await Profile.create(profileSeeds);

    for (let i = 0; i < postSeeds.length; i++) {
      const { _id, postAuthor } = await Post.create(postSeeds[i]);
      const Profile = await Profile.findOneAndUpdate(
        { Profilename: postAuthor },
        {
          $addToSet: {
            posts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});