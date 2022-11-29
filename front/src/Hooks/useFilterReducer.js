import { useReducer } from 'react';

const FilterInitial = {
  monday: '',
  tuesday: '',
  wednesday: '',
  thursday: '',
  friday: '',
  saturday: '',
  sunday: '',
  allLevel: '',
  beginner: '',
  confirmed: '',
  mixt: '',
  women: '',
  men: '',
};

function filterReducer(oldState, action) {
  switch (action.type) {
    case 'SET_VALUE': {
      if (action.payload.name === 'monday') {
        let monday = (action.payload.value);
        if (monday) {
          monday = 'Lundi';
        }
        else {
          monday = '';
        }
        return {
          ...oldState,
          monday,
        };
      }
      if (action.payload.name === 'tuesday') {
        let tuesday = (action.payload.value);
        if (tuesday) {
          tuesday = 'Mardi';
        }
        else {
          tuesday = '';
        }
        return {
          ...oldState,
          tuesday,
        };
      }
      if (action.payload.name === 'wednesday') {
        let wednesday = (action.payload.value);
        if (wednesday) {
          wednesday = 'Mercredi';
        }
        else {
          wednesday = '';
        }
        return {
          ...oldState,
          wednesday,
        };
      }
      if (action.payload.name === 'thursday') {
        let thursday = (action.payload.value);
        if (thursday) {
          thursday = 'Jeudi';
        }
        else {
          thursday = '';
        }
        return {
          ...oldState,
          thursday,
        };
      }
      if (action.payload.name === 'friday') {
        let friday = (action.payload.value);
        if (friday) {
          friday = 'Vendredi';
        }
        else {
          friday = '';
        }
        return {
          ...oldState,
          friday,
        };
      }
      if (action.payload.name === 'saturday') {
        let saturday = (action.payload.value);
        if (saturday) {
          saturday = 'Samedi';
        }
        else {
          saturday = '';
        }
        return {
          ...oldState,
          saturday,
        };
      }

      if (action.payload.name === 'sunday') {
        let sunday = (action.payload.value);
        if (sunday) {
          sunday = 'Dimanche';
        }
        else {
          sunday = '';
        }
        return {
          ...oldState,
          sunday,
        };
      }
      if (action.payload.name === 'allLevel') {
        let allLevel = (action.payload.value);
        if (allLevel) {
          allLevel = 'Tous niveaux';
        }
        else {
          allLevel = '';
        }
        return {
          ...oldState,
          allLevel,
        };
      }
      if (action.payload.name === 'beginner') {
        let beginner = (action.payload.value);
        if (beginner) {
          beginner = 'Débutant';
        }
        else {
          beginner = '';
        }
        return {
          ...oldState,
          beginner,
        };
      }
      if (action.payload.name === 'confirmed') {
        let confirmed = (action.payload.value);
        if (confirmed) {
          confirmed = 'Confirmé';
        }
        else {
          confirmed = '';
        }
        return {
          ...oldState,
          confirmed,
        };
      }
      if (action.payload.name === 'mixt') {
        let mixt = (action.payload.value);
        if (mixt) {
          mixt = 'Mixte';
        }
        else {
          mixt = '';
        }
        return {
          ...oldState,
          mixt,
        };
      }
      if (action.payload.name === 'women') {
        let women = (action.payload.value);
        if (women) {
          women = 'Féminin';
        }
        else {
          women = '';
        }
        return {
          ...oldState,
          women,
        };
      }
      if (action.payload.name === 'men') {
        let men = (action.payload.value);
        if (men) {
          men = 'Masculin';
        }
        else {
          men = '';
        }
        return {
          ...oldState,
          men,
        };
      }
      return {
        ...oldState,
        [action.payload.name]: action.payload.value,
      };
    }
    default: {
      return oldState;
    }
  }
}
// creation action generateur
export function getActionValue(name, value) {
  return {
    type: 'SET_VALUE',
    payload: {
      name,
      value,
    },
  };
}

function useFilterReducer() {
  const [Filter, filterDispatch] = useReducer(filterReducer, FilterInitial);
  return {
    Filter, filterDispatch,
  };
}

export default useFilterReducer;
