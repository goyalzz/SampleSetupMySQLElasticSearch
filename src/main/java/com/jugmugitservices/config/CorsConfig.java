package com.jugmugitservices.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

/**
 * The Class CorsConfig.
 *
 * @author Ankush Goyal
 * @version v1.0
 * @see car-project
 * @see com.carproject.config
 * @since 9 Jan, 2017
 */
@Configuration
@Component
public class CorsConfig extends OncePerRequestFilter {

  /*
   * (non-Javadoc)
   * 
   * @see org.springframework.web.filter.OncePerRequestFilter#doFilterInternal(javax.servlet.http.
   * HttpServletRequest, javax.servlet.http.HttpServletResponse, javax.servlet.FilterChain)
   */
  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {
    response.addHeader("Access-Control-Allow-Origin", "*");
    response.addHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    response.addHeader("Access-Control-Allow-Headers", "Content-Type,X-AUTH-TOKEN,AUTH-TOKEN");
    response.addHeader("Access-Control-Max-Age", "1");
    filterChain.doFilter(request, response);
  }
}