import { connect } from 'react-redux';
import { EnhancedSelect } from './EnhancedSelect';
import { mapActivityToOption } from '../../transformers/activityTransformer';

const mapProps = ({ entries }, { entry }) => {
  return {
    options: entries.get('activities').toArray().map(mapActivityToOption),
    selected: entry !== null ? entry.activities.map(mapActivityToOption) : [],
    searchableProps: ['icon', 'label'],
  };
};

export default connect(mapProps)(EnhancedSelect);
