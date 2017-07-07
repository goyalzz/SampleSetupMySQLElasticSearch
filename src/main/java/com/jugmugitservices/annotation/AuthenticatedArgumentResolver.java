package com.jugmugitservices.annotation;

import java.lang.annotation.Annotation;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

import com.jugmugitservices.service.UserService;

public class AuthenticatedArgumentResolver implements HandlerMethodArgumentResolver {

  private static final Logger LOGGER = Logger.getLogger("AuthenticatedArgumentResolver");
  
  @Autowired
  private UserService userService;

  @Override
  public String resolveArgument(MethodParameter param, ModelAndViewContainer mavContainer, NativeWebRequest request,
      WebDataBinderFactory binderFactory) throws Exception {
    Annotation[] paramAnns = param.getParameterAnnotations();
    for (Annotation annotation : paramAnns) {
      if (Authenticated.class.isInstance(annotation)) {
        Authenticated authAnnotation = (Authenticated) annotation;
        HttpServletRequest httprequest = (HttpServletRequest) request.getNativeRequest();
        String token = httprequest.getHeader("Authorization");
        return token;
      }
    }
    return null;
  }

  @Override
  public boolean supportsParameter(MethodParameter parameter) {
    return parameter.hasParameterAnnotation(Authenticated.class);
  }

}
