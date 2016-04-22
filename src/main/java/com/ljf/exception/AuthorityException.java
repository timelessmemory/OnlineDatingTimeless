package com.ljf.exception;
/**
 * <p>Title: AuthorityException.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ21ÈÕ
 * @version 1.0
 */

public class AuthorityException extends RuntimeException {

	private int errorCode;
	private String message;
	
	public AuthorityException() {
	}

	public AuthorityException(int errorCode, String message) {
		this.errorCode = errorCode;
		this.message = message;
	}

	public int getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "AuthorityException [errorCode=" + errorCode + ", message="
				+ message + "]";
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

}
