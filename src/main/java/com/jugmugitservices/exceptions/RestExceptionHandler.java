/*
 * 
 */
package com.jugmugitservices.exceptions;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.jugmugitservices.utils.RestResponse;
import com.jugmugitservices.utils.RestUtils;

/**
 * The Class RestExceptionHandler.
 *
 * @author Ankush Goyal
 * @version v1.0
 * @see TutionCenter
 * @see com.tutioncenter.exception
 * @since 22 Jan, 2017
 */
@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

  /** The logger. */
  private Logger LOGGER = LoggerFactory.getLogger(RestExceptionHandler.class);

  /* (non-Javadoc)
   * @see org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler#handleMethodArgumentNotValid(org.springframework.web.bind.MethodArgumentNotValidException, org.springframework.http.HttpHeaders, org.springframework.http.HttpStatus, org.springframework.web.context.request.WebRequest)
   */
  @Override
  protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
      HttpHeaders headers, HttpStatus status, WebRequest request) {
    return new ResponseEntity<Object>(new RestResponse<>(convertConstraintViolation(ex), null, Boolean.FALSE),
        HttpStatus.BAD_REQUEST);
  }

  /**
   * Convert constraint violation.
   *
   * @param ex the ex
   * @return the string
   */
  private String convertConstraintViolation(MethodArgumentNotValidException ex) {
    List<FieldError> fieldErrors = ex.getBindingResult().getFieldErrors();
    List<String> errorMessages = new ArrayList<String>();
    for (FieldError c : fieldErrors) {
      errorMessages.add(c.getField() + '-' + c.getDefaultMessage());
    }
    return errorMessages.toString();
  }

  /**
   * Handle unknown exception.
   *
   * @param ex the ex
   * @param request the request
   * @return the response entity
   */
  @ExceptionHandler(value = {Exception.class})
  protected ResponseEntity<RestResponse<?>> handleUnknownException(Exception ex, WebRequest request) {
    LOGGER.error(ex.getMessage(), ex);
    return RestUtils.errorResponse(BaseException.DEFAULT_MESSAGE, BaseException.DEFAULT_HTTP_STATUS);
  }

  /**
   * Handle base exception.
   *
   * @param ex the ex
   * @param request the request
   * @return the response entity
   */
  @ExceptionHandler(value = {BaseException.class})
  protected ResponseEntity<RestResponse<?>> handleBaseException(BaseException ex, WebRequest request) {
    LOGGER.error(ex.getMessage(), ex);
    return RestUtils.errorResponse(ex.getMessage(), ex.getHttpStatus());
  }

}
