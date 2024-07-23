import Opportunity from '../models/Opportunity.js';

export const createOpportunity = async (req, res) => {
  const { profileName, companyName, stipend, location, duration, startDate } = req.body;

  try {
    const opportunity = new Opportunity({
      profileName,
      companyName,
      stipend,
      location,
      duration,
      startDate,
    });
    await opportunity.save();
    res.json(opportunity);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const getOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.find();
    res.json(opportunities);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const applyForOpportunity = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  console.log('Apply request received:', { opportunityId: id, userId });

  try {
    const opportunity = await Opportunity.findById(id);
    if (!opportunity) {
      console.log('Opportunity not found');
      return res.status(404).json({ msg: 'Opportunity not found' });
    }

    // Assuming there is an applicants field in the Opportunity model
    if (!opportunity.applicants) {
      opportunity.applicants = [];
    }

    // Check if the user has already applied
    if (opportunity.applicants.includes(userId)) {
      console.log('User already applied');
      return res.status(400).json({ msg: 'You have already applied for this opportunity' });
    }

    opportunity.applicants.push(userId);
    await opportunity.save();

    console.log('Application successful');
    res.json({ msg: 'Application successful' });
  } catch (err) {
    console.error('Server error:', err.message);
    res.status(500).send('Server error');
  }
};
