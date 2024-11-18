const express = require('express');
const mongoose = require('mongoose');
const resumeRoutes = require('./routes/resumeRoutes');
const companyRoutes = require('./routes/companyRoutes');
const getResumeRoutes=require('./routes/getResumeRoutes')
const {PORT, CONECTIONSTRING}=require('./config/serverconfig')
const infoRoutes=require('./routes/infoRoutes')
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('src/public'));

// Routes
app.use('/api', resumeRoutes);
app.use('/api', companyRoutes);
app.use('/api',infoRoutes);
app.use('/api',getResumeRoutes);
app.use('/uploads', express.static('uploads'));
app.get('/add-company', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/addCompany.html'));
});

app.get('/upload-resume', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/get-languages-and-projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/getLanguagesAndProjects.html'));
});
mongoose.connect(CONECTIONSTRING)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.log('Database connection error:', err));



