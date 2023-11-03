const activityModel = require("../models/activityModel");

const getActivity =  async (req, res) => {
    try {
        const activity = await activityModel.getActivity();

        res.setHeader('Content-Type', 'application/json');
        
        res.status(200).send(activity);
    }
    catch(error){
        data = {
            status:400
        }
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getActivity,
};