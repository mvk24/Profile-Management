// Function to check if a profile has multiple skills
function mul(profile)
{
  return profile.skill.length >= 2;
}

// Function to display the search results
function dis(results)
{
  const resTab = document.getElementById('resTab');
  const noRes = document.getElementById('noRes');
  const resBody = document.getElementById('resBody');

  if (results.length > 0)
  {
    resTab.style.display = 'block';
    noRes.style.display = 'none';

    resBody.innerHTML = '';

    results.forEach(profile => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${profile.name}</td>
        <td>${profile.phone1}</td>
        <td>${profile.phone2}</td>
        <td>${profile.skill}</td>
      `;
      resBody.appendChild(row);
    });
  }
  else
  {
    resTab.style.display = 'none';
    noRes.style.display = 'block';
  }
}




document.getElementById('searchForm').addEventListener('submit', function (event)
{
  event.preventDefault();
  const skillToSearch = document.getElementById('skillSearch').value.trim().toLowerCase();
  const profiles = JSON.parse(localStorage.getItem('profiles')) || [];


  // Filter profiles with matching skills
  const results = profiles.filter(profile => {
    const skills = profile.skill.map(skill => skill.toLowerCase());
    return skills.includes(skillToSearch);
  });


  // Filter profiles with multiple skills
  const profilesWithMultipleSkills = profiles.filter(mul);


  // Check conditions before displaying search results
  if (profiles.length >= 10 && profilesWithMultipleSkills.length >= 4)
  {
    dis(results);
  } 
  else if(profilesWithMultipleSkills.length < 4) 
  {
    const resTab = document.getElementById('resTab');
    const noRes = document.getElementById('noRes');
    resTab.style.display = 'none';
    noRes.style.display = 'block';
    noRes.textContent = 'Add multiple skills to at least 4 profiles to display search results.';
  }
  else if(profiles.length < 10)
  {
    const resTab = document.getElementById('resTab');
    const noRes = document.getElementById('noRes');
    resTab.style.display = 'none';
    noRes.style.display = 'block';
    noRes.textContent = 'Add at least 10 profiles to display search results.';
  }
  
});
