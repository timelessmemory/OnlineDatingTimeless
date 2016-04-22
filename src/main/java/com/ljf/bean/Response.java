package com.ljf.bean;
/**
 * <p>Title: Response.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ16ÈÕ
 * @version 1.0
 */

public class Response {
	private Integer statusCode;
	private String explanation;
	private String extraMessage;
	
	public Response() {
	}
	
	public Response(Integer statusCode, String explanation) {
		this.statusCode = statusCode;
		this.explanation = explanation;
	}
	
	public Response(Integer statusCode, String explanation, String extraMessage) {
		this.statusCode = statusCode;
		this.explanation = explanation;
		this.extraMessage = extraMessage;
	}

	public String getExtraMessage() {
		return extraMessage;
	}

	public void setExtraMessage(String extraMessage) {
		this.extraMessage = extraMessage;
	}

	public Integer getStatusCode() {
		return statusCode;
	}
	
	public void setStatusCode(Integer statusCode) {
		this.statusCode = statusCode;
	}
	
	public String getExplanation() {
		return explanation;
	}
	
	public void setExplanation(String explanation) {
		this.explanation = explanation;
	}
	
	@Override
	public String toString() {
		return "Response [statusCode=" + statusCode + ", explanation="
				+ explanation + "]";
	}
}
