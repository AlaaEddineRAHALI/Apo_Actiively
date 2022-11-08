import React from 'react';
import PropTypes from 'prop-types';

import FiltersList from './Filters/filters/FiltersList';
import PostsList from './Posts/Posts/PostsList';

import './activityListStyles.css';

function ActivityList({
  results,
}) {
  return (
    <div>
      <div className="container-activity">
        <FiltersList />
        <PostsList
          results={results}
        />
      </div>
    </div>
  );
}

ActivityList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    activity_name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    zip_code: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    price_type: PropTypes.string.isRequired,
    organism_name: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default React.memo(ActivityList);
