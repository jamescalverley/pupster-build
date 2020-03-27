import React from 'react';

function PuppyBeFriend( props ) {
  const puppyStyle = {
    imageWrapper: {margin: '0 auto', position: 'relative', width: '40vw'},
    imageLike: { position: 'absolute', left: '20px', bottom: '50px', borderRadius: '50%'},
    imageDislike: { position: 'absolute', right: '20px', bottom: '50px', borderRadius: '50%'}
  }


  return (
    <div style={puppyStyle.imageWrapper}>
      <img src="https://placedog.net/500" alt="dog-pic" class="img-thumbnail" style={puppyStyle.image}/>
      <button class="btn btn-lg btn-success" style={puppyStyle.imageLike}><i class="fas fa-thumbs-up"></i></button>
      <button class="btn btn-lg btn-danger" style={puppyStyle.imageDislike}><i class="fas fa-thumbs-down"></i></button>
    </div>
  );
};

export default PuppyBeFriend;