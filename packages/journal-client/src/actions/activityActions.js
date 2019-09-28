import entryTransformer from '../transformers/entryTransformer';

export const ACTIVITIES_SAVE_START = 'ACTIVITIES_SAVE_START';
export const ACTIVITIES_SAVE_SUCCESS = 'ACTIVITIES_SAVE_SUCCESS';
export const ACTIVITIES_SAVE_ERROR = 'ACTIVITIES_SAVE_ERROR';
export const ACTIVITIES_SAVE = 'ACTIVITIES_SAVE';

export const saveActivitiesStart = () => ({
  type: ACTIVITIES_SAVE_START,
});

