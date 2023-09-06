const mongoose = require('mongoose');

// Define the schema for Addresses
const addressSchema = new mongoose.Schema({
  PINCode: String,
  Email: String,
  PhoneNumber: String,
});

// Define the schema for Countries
const countrySchema = new mongoose.Schema({
  CountryName: String,
});

// Define the schema for Universities
const universitySchema = new mongoose.Schema({
  UniversityName: String,
  Country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
  },
  Address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
  },
});

// Define the schema for Colleges
const collegeSchema = new mongoose.Schema({
  CollegeName: String,
  University: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University',
  },
  Address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
  },
});

// Define the schema for Branches
const branchSchema = new mongoose.Schema({
  BranchName: String,
  College: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'College',
  },
});

// Define the schema for Skills
const skillSchema = new mongoose.Schema({
  SkillName: String,
});

// Define the schema for Alumni
const alumniSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  Phone: String,
  Address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
  },
  UserID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // You might have a separate User schema for authentication
  },
  Skills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Skill',
    },
  ],
});

// Define the schema for Groups
const groupSchema = new mongoose.Schema({
  GroupName: String,
  Creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alumni',
  },
});

// Define the schema for GroupMembers
const groupMemberSchema = new mongoose.Schema({
  Group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
  },
  Alumni: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alumni',
  },
  IsAdmin: Boolean,
});

// Define the schema for Posts
const postSchema = new mongoose.Schema({
  Title: String,
  Content: String,
  Author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alumni',
  },
  Group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
  },
});

// Define the schema for Issues
const issueSchema = new mongoose.Schema({
  Title: String,
  Description: String,
  Author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alumni',
  },
  Skill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill',
  },
  Status: String,
});

// Define the schema for Solutions
const solutionSchema = new mongoose.Schema({
  Issue: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Issue',
  },
  Provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alumni',
  },
  Description: String,
  Fee: Number,
  Status: String,
});

// Create models based on the defined schemas
const Address = mongoose.model('Address', addressSchema);
const Country = mongoose.model('Country', countrySchema);
const University = mongoose.model('University', universitySchema);
const College = mongoose.model('College', collegeSchema);
const Branch = mongoose.model('Branch', branchSchema);
const Skill = mongoose.model('Skill', skillSchema);
const Alumni = mongoose.model('Alumni', alumniSchema);
const Group = mongoose.model('Group', groupSchema);
const GroupMember = mongoose.model('GroupMember', groupMemberSchema);
const Post = mongoose.model('Post', postSchema);
const Issue = mongoose.model('Issue', issueSchema);
const Solution = mongoose.model('Solution', solutionSchema);

module.exports = {
  Address,
  Country,
  University,
  College,
  Branch,
  Skill,
  Alumni,
  Group,
  GroupMember,
  Post,
  Issue,
  Solution,
};
