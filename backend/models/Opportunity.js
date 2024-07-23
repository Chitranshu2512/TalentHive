import mongoose from 'mongoose';

const opportunitySchema = new mongoose.Schema({
  profileName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  stipend: {
    type: String,
  },
  location: {
    type: String,
  },
  duration: {
    type: String,
  },
  startDate: {
    type: Date,
  },
});

const Opportunity = mongoose.model('Opportunity', opportunitySchema);
export default Opportunity;
