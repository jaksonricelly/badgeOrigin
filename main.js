const SocialMediaLinks = {
  github: "jaksonricelly",
  youtube: "UCtxDx-D5Q8GP4XhAB6sZKbA",
  facebook: "jaksonricellymds",
  instagram: "jaksonricelly",
  twitter: "jaksonricelly",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    li.children[0].href = `https://${social}.com/${SocialMediaLinks[social]}`;
  }
}
changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${SocialMediaLinks.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userNameProfile.textContent = data.name;
      userBio.textContent = data.bio;
      userUrlGithub.href = data.html_url;
      userImgGitHub.src = data.avatar_url;
      userLoginGit.textContent = data.login;
    });
}

getGitHubProfileInfos();
