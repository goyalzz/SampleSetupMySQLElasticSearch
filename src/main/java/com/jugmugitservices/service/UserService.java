package com.jugmugitservices.service;

import java.util.List;

import com.jugmugitservices.domain.User;
import com.jugmugitservices.exceptions.EntityNotFoundException;
import com.jugmugitservices.exceptions.IllegalArgumentException;

public interface UserService {

  public User createUser(String email, String name);
  
  public Boolean deleteUser(Long id) throws IllegalArgumentException;
  
  public User findByEmail(String email) throws EntityNotFoundException;
  
  public List<User> findAll();
  
  public User updateUser(User user) throws EntityNotFoundException;
  
  public User login(User user) throws EntityNotFoundException;
}