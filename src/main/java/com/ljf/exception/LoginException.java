package com.ljf.exception;
/**
 * <p>Title: LoginException.java<��p>
 * <p>Description: <��p>
 * <p>Company: <��p>
 * @author timeless
 * @date 2016��4��18��
 * @version 1.0
 */

public class LoginException extends RuntimeException{
	private int errorCode = 50;
	private String message = "�û����������벻��ȷ";
	
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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

}
