import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  SEARCH_RESULT,
  UPDATE_CONTACT,
} from "../actions/index";

const initialContactListState = [
  {
    id: 1,
    gender: "male",
    name: "Mr Dwight Stevens",
    location: {
      street: {
        number: 5083,
        name: "Jones Road",
      },
      city: "Dundalk",
      state: "Leitrim",
      country: "Ireland",
      postcode: 53817,
    },
    phone: "7555589353",
    picture: "https://randomuser.me/api/portraits/med/men/8.jpg",
    group: "Colleagues",
  },
  {
    id: 2,
    gender: "female",
    name: "Ms Astrid Poulsen",
    location: {
      street: {
        number: 5805,
        name: "Tøndervej",
      },
      city: "Branderup J",
      state: "Hovedstaden",
      country: "Denmark",
      postcode: 79609,
    },
    phone: "7555512353",
    picture: "https://randomuser.me/api/portraits/med/women/18.jpg",
    group: "Family",
  },

  {
    id: 3,
    gender: "female",
    name: "Ms Isabel Roberts",
    location: {
      street: {
        number: 8288,
        name: "Devonport Road",
      },
      city: "Hamilton",
      state: "Canterbury",
      country: "New Zealand",
      postcode: 81734,
    },
    phone: "7125512353",
    picture: "https://randomuser.me/api/portraits/med/women/32.jpg",
    group: "Friend",
  },
  {
    id: 4,
    gender: "male",
    name: "Mr Anton Nielsen",
    location: {
      street: {
        number: 7260,
        name: "Højstrupvej",
      },
      city: "Brøndby Strand",
      state: "Hovedstaden",
      country: "Denmark",
      postcode: 21071,
    },
    phone: "7425512553",
    picture: "https://randomuser.me/api/portraits/med/men/17.jpg",
    group: "Colleagues",
  },
  {
    id: 5,
    gender: "female",
    name: "Miss Susan Simmons",
    location: {
      street: {
        number: 2522,
        name: "York Road",
      },
      city: "Durham",
      state: "Dumfries and Galloway",
      country: "United Kingdom",
      postcode: "I1W 2FT",
    },
    phone: "9825512553",
    picture: "https://randomuser.me/api/portraits/med/women/55.jpg",
    group: "Colleagues",
  },
  {
    id: 6,
    gender: "male",
    name: "Mr Madhav Kini",
    location: {
      street: {
        number: 9523,
        name: "Dadabhai Naoroji Rd",
      },
      city: "Chandrapur",
      state: "Dadra and Nagar Haveli",
      country: "India",
      postcode: 99587,
    },
    phone: "9825518853",
    picture: "https://randomuser.me/api/portraits/med/men/97.jpg",
    group: "Friend",
  },
  {
    id: 7,
    gender: "male",
    name: "Mr Levi Grøterud",
    location: {
      street: {
        number: 5167,
        name: "Svingen",
      },
      city: "Utgård",
      state: "Bergen",
      country: "Norway",
      postcode: "6030",
    },
    phone: "9820008853",
    picture: "https://randomuser.me/api/portraits/med/men/30.jpg",
    group: "Family",
  },
];

export default function contact(state = initialContactListState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.user];
    case REMOVE_CONTACT:
      const filterArray = state.filter((item) => item.id !== action.userId);
      return [...filterArray];
    case UPDATE_CONTACT:
      return state.map((user) => {
        if (user.id == action.user.id) {
          return {
            ...user,
            name: action.user.name,
            phone: action.user.phone,
          };
        }
        return user;
      });
    case SEARCH_RESULT:
      return state.filter((ele) => {
        return ele.name.toLowerCase().match(action.searchTerm.toLowerCase());
      });

    default:
      return state;
  }
}
