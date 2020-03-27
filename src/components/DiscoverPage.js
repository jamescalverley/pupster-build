import React from 'react';
import PuppyBeFriend from './PuppyBeFriend'

function DiscoverPage() {
  const discoverStyle = {
    image: { },
    alert: { display: 'none' },
    imageWrapper: {margin: '0 auto', position: 'relative', width: '40vw'},
    imageLike: { position: 'absolute', left: '20px', bottom: '50px', borderRadius: '50%'},
    imageDislike: { position: 'absolute', right: '20px', bottom: '50px', borderRadius: '50%'}
  }
  return (
    <div>
      <div class="container text-center">
        <h1>Make New Friends</h1>
        <h2>Thumbs up on any pups you want to meet</h2>
        <PuppyBeFriend />
      
        <h1>Make New Friends</h1>

        <div class="alert alert-success" role="alert" style={discoverStyle.alert}>
        This is a success alert—check it out!
        </div>

      </div>
      
    </div>
  );
};

export default DiscoverPage;