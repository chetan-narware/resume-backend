const Company = require('../models/company');

exports.addCompany = async (req, res) => {
  try {
    const { name, roles } = req.body;

    // Check if the company already exists
    let company = await Company.findOne({ name });

    if (company) {
      // If the company exists, add the new roles
      // Use a Set to avoid duplicates, then convert back to an array
      const updatedRoles = new Set([...company.roles, ...roles]);
      company.roles = Array.from(updatedRoles);

      await company.save();
      res.status(200).json({ message: 'Roles added to existing company successfully', company });
    } else {
      // If the company does not exist, create a new company
      company = new Company({ name, roles });
      console.log("hello1");
      await company.save();
      res.status(201).json({ message: 'Company and roles added successfully', company });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error adding company', error });
  }
};