import React from 'react';

function SearchPage() {
  return (
    <div>
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Search</h1>
          <p class="lead text-muted">Please search for breed of dog.</p>
          
          <form class="row">
              <div class="col-10">
                <input type="text" class="form-control" placeholder="First name"/>
              </div>
              <div class="col-2">
                <a href="#" class="btn btn-primary my-2">Search</a>
              </div>
          </form>
      
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">

          <div class="row">
            
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="https://i.pinimg.com/originals/be/da/86/beda8664f4608ebeb54697a61d5121c2.jpg" alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="https://i.pinimg.com/originals/be/da/86/beda8664f4608ebeb54697a61d5121c2.jpg" alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="https://i.pinimg.com/originals/be/da/86/beda8664f4608ebeb54697a61d5121c2.jpg" alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default SearchPage;