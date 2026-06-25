const fs = require('fs');
const path = require('path');

const files = [
  'pages/ActiveRequests.tsx',
  'pages/BloodRequest.tsx',
  'pages/DonorRegistration.tsx',
  'pages/Login.tsx',
  'pages/Register.tsx',
  'pages/SearchDonor.tsx'
];

files.forEach(file => {
  const fullPath = path.join(__dirname, 'src', file);
  const content = fs.readFileSync(fullPath, 'utf8');
  const replaced = content.replace(/http:\/\/localhost:5000/g, '${import.meta.env.VITE_API_URL}');
  fs.writeFileSync(fullPath, replaced);
});
console.log('Replaced localhost URLs with environment variables');
