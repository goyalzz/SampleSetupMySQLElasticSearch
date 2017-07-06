package com.jugmugitservices.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jugmugitservices.domain.User;
import com.jugmugitservices.exceptions.EntityNotFoundException;
import com.jugmugitservices.exceptions.IllegalArgumentException;
import com.jugmugitservices.repository.UserRepository;
import com.jugmugitservices.service.UserService;

@Service
public class UserServiceImpl implements UserService {

  @Autowired
  private UserRepository userRepository;

  @Override
  public User createUser(String email, String name) {
    User user = new User(email, name);
    user = userRepository.save(user);
    return user;
  }

  @Override
  public Boolean deleteUser(Long id) throws IllegalArgumentException {
    User user = new User().withId(id);
    try {
      userRepository.delete(user);
    } catch (Exception e) {
      throw new IllegalArgumentException();
    }
    return Boolean.TRUE;
  }

  @Override
  public User findByEmail(String email) throws EntityNotFoundException {
    return userRepository.findByEmail(email);
  }

  @Override
  public List<User> findAll() {
    List<User> dataSet = new ArrayList<User>();
    if(userRepository.count() > 0) {
     userRepository.findAll().forEach(user -> dataSet.add(user));
    }
    return dataSet;
  }

  @Override
  public User updateUser(User user) throws EntityNotFoundException {
    User userData = userRepository.findOne(user.getId());
    if(userData == null)
      throw new EntityNotFoundException("User not exist.");
    return userRepository.save(user);
  }
}
