package com.jugmugitservices.config;

import java.util.List;
import java.util.Properties;

import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.runtime.RuntimeConstants;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.jugmugitservices.annotation.AuthenticatedArgumentResolver;

@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {

  @Value("${templates.dir}")
  private String templatesDir;

  @Bean
  public VelocityEngine velocityEngine() {

    VelocityEngine ve = new VelocityEngine();
    ve.setProperty(RuntimeConstants.FILE_RESOURCE_LOADER_PATH, templatesDir);

    Properties props = new Properties();
    props.put("runtime.log.logsystem.class", "org.apache.velocity.runtime.log.SimpleLog4JLogSystem");
    props.put("runtime.log.logsystem.log4j.category", "velocity");
    props.put("runtime.log.logsystem.log4j.logger", "velocity");

    ve.init(props);
    return ve;

  }
  
  @Bean
  public AuthenticatedArgumentResolver authenticatedArgumentResolver() {
    return new AuthenticatedArgumentResolver();
  }

  @Override
  public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
    argumentResolvers.add(authenticatedArgumentResolver());
  }

}
