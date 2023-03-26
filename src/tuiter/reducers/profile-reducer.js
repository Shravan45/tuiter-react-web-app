import {createSlice} from "@reduxjs/toolkit";

const initialState = [{
    name: "Shravan Ramdurg",
    handle: "shravan_ar",
    profilePicture: '/images/avatar.svg',
    bannerPicture: "/images/cover.jpeg",
    bio: 'Student, MS Computer Science @ Khoury College of Computer Sciences.',
    website: 'github.com/shravan45',
    location: 'Boston, MA',
    dateOfBirth: '30th November 1997',
    dateJoined: '09 October, 2022',
    followingCount: 509,
    followersCount: 731,

}];

const profileReducer = createSlice({
                                       name: "profile",
                                       initialState: initialState,
                                       reducers: {
                                           saveNewProfile(state, action) {
                                               state.shift();
                                               state.push({
                                                              name: action.payload.name,
                                                              handle: "shravan_ar",
                                                              profilePicture: '/images/avatar.svg',
                                                              bannerPicture: "/images/cover.jpeg",
                                                              bio: action.payload.bio,
                                                              website: action.payload.website,
                                                              location: action.payload.location,
                                                              dateOfBirth: action.payload.dateOfBirth,
                                                              dateJoined: '09 October, 2022',
                                                              followingCount: 509,
                                                              followersCount: 731,
                                                          })
                                           }
                                       }
                                   })

export const {saveNewProfile} = profileReducer.actions
export default profileReducer.reducer