/*
 * 
 */
package com.jugmugitservices.utils;

/**
 * The Class RestResponse.
 *
 * @author Ankush Goyal
 * @version v1.0
 * @param <T> the generic type
 * @see car-project
 * @see com.carproject.util
 * @since 9 Jan, 2017
 */
public class RestResponse<T> {

  /** The error message. */
  private String errorMessage;

  /** The status. */
  private Boolean status = true;

  /** The data. */
  private T data;

  /**
   * Gets the error message.
   *
   * @return the error message
   */
  public String getErrorMessage() {
    return errorMessage;
  }

  /**
   * Sets the error message.
   *
   * @param errorMessage the new error message
   */
  public void setErrorMessage(String errorMessage) {
    this.errorMessage = errorMessage;
  }

  /**
   * Gets the status.
   *
   * @return the status
   */
  public Boolean getStatus() {
    return status;
  }

  /**
   * Sets the status.
   *
   * @param status the new status
   */
  public void setStatus(Boolean status) {
    this.status = status;
  }

  /**
   * Gets the data.
   *
   * @return the data
   */
  public T getData() {
    return data;
  }

  /**
   * Sets the data.
   *
   * @param data the new data
   */
  public void setData(T data) {
    this.data = data;
  }

  /**
   * Instantiates a new rest response.
   *
   * @param errorMessage the error message
   * @param data the data
   * @param status the status
   */
  public RestResponse(String errorMessage, T data, Boolean status) {
    this.errorMessage = errorMessage;
    this.data = data;
    this.status = status;
  }

  /**
   * Instantiates a new rest response.
   *
   * @param data the data
   */
  public RestResponse(T data) {
    this.data = data;
  }

  /**
   * Instantiates a new rest response.
   */
  public RestResponse() {}

}
