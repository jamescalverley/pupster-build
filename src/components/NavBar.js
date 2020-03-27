import React from 'react';

function NavBar( props ) {
  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" onClick={ function(){props.changePage('AboutPage')}}>pupster</a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item { props.activePage==='AboutPage' ? 'nav-item active' : 'nav-item'}">
              <a class="nav-link" href="#" onClick={ function(){props.changePage('AboutPage')}}>About</a>
            </li>
            <li class="nav-item { props.activePage==='DiscoverPage' ? 'nav-item active' : 'nav-item'}">
              <a class="nav-link" href="#" onClick={ function(){props.changePage('DiscoverPage')}}>Discover</a>
            </li>
            <li class="nav-item { props.activePage==='SearchPage' ? 'nav-item active' : 'nav-item'}">
              <a class="nav-link" href="#" onClick={ function(){props.changePage('SearchPage')}}>Search</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;