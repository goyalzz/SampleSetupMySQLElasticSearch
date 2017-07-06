package com.jugmugitservices.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.jugmugitservices.domain.User;
import com.jugmugitservices.exceptions.EntityNotFoundException;
import com.jugmugitservices.exceptions.IllegalArgumentException;
import com.jugmugitservices.service.UserService;
import com.jugmugitservices.utils.Constants;
import com.jugmugitservices.utils.RestResponse;
import com.jugmugitservices.utils.RestUtils;

@RestController
@RequestMapping(value = Constants.Api_Base_Path + "/user")
public class UserController {

  @Autowired
  private UserService userService;

  /**
   * GET /create --> Create a new user and save it in the database.
   */
  @RequestMapping(value = "/", method = RequestMethod.POST)
  @ResponseBody
  public ResponseEntity<RestResponse<User>> createUser(@RequestBody @Valid User user) {
    return RestUtils.successResponse(userService.createUser(user.getEmail(), user.getName()));
  }

  /**
   * GET /delete --> Delete the user having the passed id.
   */
  @RequestMapping(value = "/", method = RequestMethod.DELETE)
  @ResponseBody
  public ResponseEntity<RestResponse<Boolean>> delete(@RequestBody User user) throws IllegalArgumentException {
    return RestUtils.successResponse(userService.deleteUser(user.getId()));
  }

  /**
   * GET /get-by-email --> Return the id for the user having the passed email.
   * @throws EntityNotFoundException 
   */
  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  @ResponseBody
  public ResponseEntity<RestResponse<User>> findByEmail(@PathVariable String emailId) throws EntityNotFoundException {
    return RestUtils.successResponse(userService.findByEmail(emailId));
  }
  
  @RequestMapping(value = "/", method = RequestMethod.GET)
  @ResponseBody
  public ResponseEntity<RestResponse<List<User>>> getAll() {
    return RestUtils.successResponse(userService.findAll());
  }

  /**
   * GET /update --> Update the email and the name for the user in the database having the passed
   * id.
   */
  @RequestMapping(value = "/", method = RequestMethod.PUT)
  @ResponseBody
  public ResponseEntity<RestResponse<User>> updateUser(@RequestBody User user) throws EntityNotFoundException {
    return RestUtils.successResponse(userService.updateUser(user));
  }

}
