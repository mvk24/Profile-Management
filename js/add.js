document.getElementById('addForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const phone1 = document.getElementById('phone1').value;
  const phone2 = document.getElementById('phone2').value;
  const address = document.getElementById('address').value;
  const skill = document.getElementById('skill').value.split(',').map(skill => skill.trim());
  
  const profile = { name, phone1, phone2, address, skill };
  let profiles = JSON.parse(localStorage.getItem('profiles')) || [];
  profiles.push(profile);
  localStorage.setItem('profiles', JSON.stringify(profiles));
  alert('Profile added successfully!');
  event.target.reset();
});
