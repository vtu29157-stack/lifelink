const axios = require('axios');
async function test() {
  const { data } = await axios.get('http://localhost:5000/api/donors', {
    params: { blood_group: 'B+', city: 'kadapa' }
  });
  console.log(data);
}
test();
