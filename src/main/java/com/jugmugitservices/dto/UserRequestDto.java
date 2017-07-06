package com.jugmugitservices.dto;

public class UserRequestDto<T> {

  private Boolean status;

  private String message;

  private T data;

  public Boolean getStatus() {
    return status;
  }

  public void setStatus(Boolean status) {
    this.status = status;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public T getData() {
    return data;
  }

  public void setData(T data) {
    this.data = data;
  }

  @Override
  public String toString() {
    return "UserResponseDto [status=" + status + ", message=" + message + ", data=" + data + "]";
  }

}