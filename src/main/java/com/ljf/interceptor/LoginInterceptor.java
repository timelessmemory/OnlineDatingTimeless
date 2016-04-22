package com.ljf.interceptor;

import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.auth0.jwt.JWTVerifier;
import com.ljf.commons.Constants;
import com.ljf.exception.AuthorityException;
import com.ljf.utils.AccessTokenUtils;

/**
 * <p>Title: LoginInterceptor.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ17ÈÕ
 * @version 1.0
 */

public class LoginInterceptor implements HandlerInterceptor{

	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		
		System.out.println(request.getRequestURI());
		String accessToken = (String)request.getParameter("accessToken");
		
		if (accessToken == null || accessToken == "") {
			throw new AuthorityException(Constants.NO_ACCESS_TOKEN_CODE, Constants.NO_ACCESS_TOKEN);
		} else {
			long expireTime = AccessTokenUtils.verifyAccessToken(accessToken);
			long currentTime = System.currentTimeMillis();
			if (expireTime > currentTime) {
				Cookie cookie = new Cookie("accessToken", AccessTokenUtils.generateAccessToken());
				cookie.setPath("/");
				response.addCookie(cookie);
				return true;
			} else {
				throw new AuthorityException(Constants.ACCESS_TOKEN_EXPIRE_CODE, Constants.ACCESS_TOKEN_EXPIRE);
			}
		}
	}

	public void postHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
	}

	public void afterCompletion(HttpServletRequest request,
			HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
	}
}
