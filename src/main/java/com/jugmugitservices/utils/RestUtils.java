/*
 * 
 */
package com.jugmugitservices.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

/**
 * The Class RestUtils.
 *
 * @author Ankush Goyal
 * @version v1.0
 * @see car-project
 * @see com.carproject.util
 * @since 9 Jan, 2017
 */
public class RestUtils {

  /**
   * Success response.
   *
   * @param <T> the generic type
   * @param data the data
   * @param statusCode the status code
   * @return the response entity
   */
  public static <T> ResponseEntity<RestResponse<T>> successResponse(T data, HttpStatus statusCode) {
    return new ResponseEntity<RestResponse<T>>(new RestResponse<T>(data), statusCode);
  }

  /**
   * Success response.
   *
   * @param <T> the generic type
   * @param data the data
   * @return the response entity
   */
  public static <T> ResponseEntity<RestResponse<T>> successResponse(T data) {
    return successResponse(data, HttpStatus.OK);
  }

  /**
   * Error response.
   *
   * @param <T> the generic type
   * @param errorMessage the error message
   * @param statusCode the status code
   * @return the response entity
   */
  public static <T> ResponseEntity<RestResponse<?>> errorResponse(String errorMessage, HttpStatus statusCode) {
    return new ResponseEntity<RestResponse<?>>(new RestResponse<T>(errorMessage, null, Boolean.FALSE), statusCode);
  }
}
