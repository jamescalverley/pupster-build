import React from 'react';

function AboutPage() {
  const aboutStyle = {
    height: '70vh',
    backgroundImage: 'url("https://i.imgur.com/qkdpN.jpg%22")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <div>
      <div class="jumbotron jumbotron-fluid" style={aboutStyle}>
        <div class="text-center">
          <h1 class="display-4">pupster</h1>
          <p class="lead">It's like Tinder...but for dogs. </p>
        </div>
      </div>
      <div class="container-fluid">
      <h2>Welcome to pupster</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
        
      </div> 
      


    </div>
  );
};

export default AboutPage;