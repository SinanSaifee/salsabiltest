const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to restrict access based on IP
const restrictAccess = (allowedIP) => {
  return (req, res, next) => {
    const clientIP = req.connection.remoteAddress;

    if (clientIP === allowedIP) {
      next(); // Allow access for the specified IP
    } else {
      res.status(404).send('Page Not Found'); // Deny access for other IPs
    }
  };
};

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Apply the IP restriction middleware for auth.html
app.get('/auth.html', restrictAccess('127.0.0.1'), (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/admin_dashboard/auth.html'));
});

// Apply the IP restriction middleware for dashboard.html
app.get('/dashboard.html', restrictAccess('127.0.0.1'), (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
