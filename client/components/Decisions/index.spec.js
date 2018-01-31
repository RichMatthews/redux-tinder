import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import Decisions from './index';

describe.only('Decisions', () => {
  let wrapper;
  const userLikedStub = sinon.spy();
  const userDislikedStub = sinon.spy();
  const usersStub = {allUsers: []}
  beforeEach(() => {
    wrapper = shallow(
      <Decisions
        userLiked={userLikedStub}
        userDisliked={userDislikedStub}
        users={usersStub}
      />
    )
  })
  it('calls userDisliked when clicked', () => {
    const button = wrapper.find('.userLikedBtn');
    button.simulate('click');
    expect(userLikedStub.called).to.equal(true)
  });
  it('calles userLiked when clicked', () => {
    const button = wrapper.find('.userDislikedBtn');
    button.simulate('click');
    expect(userDislikedStub.called).to.equal(true)
  });
  it('renders a redcross image', () => {
    const container = wrapper.find('.userDislikedBtn');
    const image = container.find('img')
    console.log(image.node.props.src, 'image****');
    expect(container.children()).to.have.length(1)
  });
});
