package com.ljf.bean;
/**
 * <p>Title: QiNiuToken.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê3ÔÂ31ÈÕ
 * @version 1.0
 */

public class QiNiuToken {
	private String token;
	private String domain;
	private String uploadDomain;
	
	public String getToken() {
		return token;
	}
	
	public void setToken(String token) {
		this.token = token;
	}
	public String getDomain() {
		return domain;
	}
	
	public void setDomain(String domain) {
		this.domain = domain;
	}
	
	public String getUploadDomain() {
		return uploadDomain;
	}
	
	public void setUploadDomain(String uploadDomain) {
		this.uploadDomain = uploadDomain;
	}
	
	@Override
	public String toString() {
		return "QiNiuToken [token=" + token + ", domain=" + domain
				+ ", uploadDomain=" + uploadDomain + "]";
	}
}
