import { expect } from 'chai';
import reducer from './index';

describe('USERS', () => {
  it('should return default state if unknown action fired', () => {
    const fakeUser = { age: 25, city: 'London', name: 'Hannah'}
    const action = { type: 'UNKNOWN_ACTION', data: fakeUser };
    const initialState = {
      matches: [],
      usersLiked: [{name: 'Already liked user'}],
      usersDisliked: [],
      allUsers: [],
      usersQueue: []
    };
    const result = reducer(initialState, action);
    expect(result).to.deep.equal({
      matches: [],
      usersLiked: [{name: 'Already liked user'}],
      usersDisliked: [],
      allUsers: [],
      usersQueue: []
    })
  });
  it('should REMOVE_USER_FROM_QUEUE', () => {
    const fakeUser = { age: 25, city: 'London', name: 'Hannah'}
    const action = { type: 'FAKE_ACTION', data: fakeUser };
    const initialState = {};
  });
  it('should PULL_INITIAL_USERS when app loads', () => {
    const fakeUser = { age: 25, city: 'London', name: 'Hannah'}
    const action = { type: 'PULL_INITIAL_USERS', data: fakeUser };
    const initialState = { allUsers: [] };
    const result = reducer(initialState, action);
    expect(result.allUsers).to.deep.equal([fakeUser]);
  });
  it('should add a user to array when USER_LIKED', () => {
    const fakeUser = { age: 25, city: 'London', name: 'Hannah'}
    const action = { type: 'USER_LIKED', data: fakeUser };
    const initialState = { usersLiked: [] };
    const result = reducer(initialState, action);
    expect(result.usersLiked.length).to.equal(1)
  });
  it('should add a user to array when USER_DISLIKED', () => {
    const fakeUser = {age: 25, city:'London', name:'Hannah'};
    const action = { type: 'USER_DISLIKED', data: fakeUser };
    const initialState = { usersDisliked: [] };
    const result = reducer(initialState, action);
    expect(result.usersDisliked.length).to.equal(1)
  });
});
