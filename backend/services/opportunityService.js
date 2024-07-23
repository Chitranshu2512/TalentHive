import Opportunity from '../models/Opportunity.js';

const createOpportunity = async (data) => {
  const opportunity = new Opportunity(data);
  await opportunity.save();
  return opportunity;
};

const getAllOpportunities = async () => {
  return await Opportunity.find();
};

export { createOpportunity, getAllOpportunities };
