// action types
const SET_LOCATION = 'searchForm/SET_LOCATION';
const SET_CHECKIN = 'searchForm/SET_CHECKIN';
const SET_CHECKOUT = 'searchForm/SET_CHECKOUT';
const SET_FLEXIBLE_DATE = 'searchForm/SET_FLEXIBLE_DATE';
const SET_GUESTS = 'searchForm/SET_GUESTS';

// action creators
export const setSearchData = data => {
  const payload = data.value;
  switch (data.name) {
    case 'location':
      return { type: SET_LOCATION, payload };
    case 'checkIn':
      return { type: SET_CHECKIN, payload };
    case 'checkOut':
      return { type: SET_CHECKOUT, payload };
    case 'flexibleDate':
      return { type: SET_FLEXIBLE_DATE, payload };
    case 'guests':
      return { type: SET_GUESTS, payload };
    default:
      break;
  }
};

const getDateDiff = (date1, date2) => {
  console.log('dates: ', date1, date2);
  if (!date1 || !date2) return 0;
  const checkIn = new Date(date1);
  const checkOut = new Date(date2);
  const timeDiff = checkOut.getTime() - checkIn.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

// initialState
const initialState = {
  location: '서울',
  checkIn: '2020.09.02',
  checkOut: '2020.09.05',
  dateDiff: null,
  flexibleDate: 0,
  guests: {
    adult: 0,
    child: 0,
    infant: 0,
  },
};

// reducer
const searchForm = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case SET_CHECKIN: {
      return {
        ...state,
        checkIn: action.payload,
        dateDiff: getDateDiff(action.payload, state.checkOut),
      };
    }
    case SET_CHECKOUT: {
      return {
        ...state,
        checkOut: action.payload,
        dateDiff: getDateDiff(state.checkIn, action.payload),
      };
    }
    case SET_FLEXIBLE_DATE: {
      return {
        ...state,
        flexibleDate: action.payload,
      };
    }
    case SET_GUESTS: {
      return {
        ...state,
        guests: action.payload,
      };
    }
    default:
      return state;
  }
};

export default searchForm;
