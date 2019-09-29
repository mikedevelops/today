import { connect } from 'react-redux';
import { EnhancedSelect } from '../EnhancedSelect/EnhancedSelect';
import { mapActivityToOption } from '../../transformers/activityTransformer';

const mapProps = ({ entries }, { entry, update }) => {
  return {
    options: entries.get('activities').toArray().map(mapActivityToOption),
    selected: entry !== null ? entry.activities.map(mapActivityToOption) : [],
    searchableProps: ['icon', 'label'],
    update,
  };
};

export default connect(mapProps)(EnhancedSelect);
