package com.ljf.exception;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ljf.bean.Response;
import com.ljf.commons.Constants;

/**
 * <p>Title: GlobalHandleException.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ18ÈÕ
 * @version 1.0
 */

@ControllerAdvice
public class GlobalHandleException {
	private static Logger logger = Logger.getLogger(GlobalHandleException.class);  
	
	@ResponseBody
	@ExceptionHandler({RuntimeException.class})
	public Response handleRuntimeExcpetion(Exception ex) {
		logger.error(ex);
		return new Response(Constants.UNKNOWN_ERROR_CODE, Constants.UNKNOWN_ERROR);
	}
	
	@ResponseBody
	@ExceptionHandler({LoginException.class})
	public Response handleLoginExcpetion(LoginException ex) {
		logger.error(ex);
		return new Response(ex.getErrorCode(), ex.getMessage());
	}
	
	@ResponseBody
	@ExceptionHandler({AuthorityException.class})
	public Response handleAuthorityException(AuthorityException ex) {
		logger.error(ex);
		return new Response(ex.getErrorCode(), ex.getMessage());
	}
}
