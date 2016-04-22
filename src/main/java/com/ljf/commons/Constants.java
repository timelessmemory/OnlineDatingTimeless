package com.ljf.commons;
/**
 * <p>Title: Constants.java<／p>
 * <p>Description: <／p>
 * <p>Company: <／p>
 * @author timeless
 * @date 2016年4月20日
 * @version 1.0
 */

public class Constants {
	
	public static final String TOKEN_SECRET = "timeless";
	public static final int EXPIRE_DURATION = 20 * 60 * 1000;
	
	public static final int SUCCESS_CODE = 200;
	public static final String SUCCESS = "success";
	
	public static final int UNKNOWN_ERROR_CODE = 500;
	public static final String UNKNOWN_ERROR = "未知错误";
	
	public static final int NICKNAME_PASS_CODE = 20;
	public static final String NICKNAME_PASS = "昵称可用";
	
	public static final int NICKNAME_EXIST_CODE = 40;
	public static final String NICKNAME_EXIST = "昵称已存在";
	
	public static final int MOBILE_PASS_CODE = 60;
	public static final String MOBILE_PASS = "手机号可用";
	
	public static final int MOBILE_EXIST_CODE = 80;
	public static final String MOBILE_EXIST = "手机号已注册";
	
	public static final int NO_ACCESS_TOKEN_CODE = 100;
	public static final String NO_ACCESS_TOKEN = "没有提供合法的凭证";
	
	public static final int ACCESS_TOKEN_EXPIRE_CODE = 120;
	public static final String ACCESS_TOKEN_EXPIRE = "凭证过期";
}
