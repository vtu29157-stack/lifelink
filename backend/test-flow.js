const axios = require('axios');

async function test() {
  try {
    const email = 'test' + Date.now() + '@example.com';
    console.log('1. Registering user:', email);
    await axios.post('http://localhost:5000/api/auth/register', {
      full_name: 'Test User',
      email: email,
      phone: '1234567890',
      password: 'Password1!'
    });

    console.log('2. Logging in...');
    const loginRes = await axios.post('http://localhost:5000/api/auth/login', {
      email: email,
      password: 'Password1!'
    });
    const token = loginRes.data.token;
    console.log('Logged in! Token:', token.slice(0,10) + '...');

    console.log('3. Registering as donor...');
    await axios.post('http://localhost:5000/api/donors', {
      age: 25,
      gender: 'Male',
      blood_group: 'B+',
      weight: 70,
      city: 'Kadapa',
      state: 'Andhra Pradesh',
      address: '123 Test St'
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('Donor registered!');

    console.log('4. Searching for donors in Kadapa with B+...');
    const searchRes = await axios.get('http://localhost:5000/api/donors', {
      params: { blood_group: 'B+', city: 'Kadapa' }
    });
    console.log('Search Results:', searchRes.data);
    
  } catch(e) {
    console.error('ERROR:', e.response ? e.response.data : e.message);
  }
}
test();
