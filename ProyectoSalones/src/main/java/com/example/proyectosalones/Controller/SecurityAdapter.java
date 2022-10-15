package com.example.proyectosalones.Controller;


import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecurityAdapter extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http.authorizeRequests(a-> a.antMatchers("/","/index.html","/error","/webjars/**","/logout","/api/**")
                        .permitAll()
                        .anyRequest()
                        .authenticated())
                .oauth2Login();

        http.cors().and().csrf().disable();
    }

}
