import React from 'react';

function BreedSearchForm(){
  return (
    <div class="input-group mb-3">
      <input type="text"  class="form-control addMyTask" placeholder="Search your breed"/>
      <div class="input-group-append">
          <button class="btn btn-outline-primary" id="addTaskBtn" type="button">Search</button>
      </div>
    </div>
  )
}

export default BreedSearchForm;