import React from 'react';
import BreedSearchForm from './BreedSearchForm';
import BreedResultsList from './BreedResultsList';

function SearchPage() {
  return (
    <div>
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Search</h1>
          <p class="lead text-muted">Please search for breed of dog.</p>
          <BreedSearchForm />
        </div>
      </section>
      <div class="album py-5 bg-light">
        <BreedResultsList />
      </div>
    </div>
  );
};

export default SearchPage;