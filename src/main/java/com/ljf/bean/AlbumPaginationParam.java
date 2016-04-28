package com.ljf.bean;
/**
 * <p>Title: AlbumPaginationParam.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ28ÈÕ
 * @version 1.0
 */

public class AlbumPaginationParam {
	private int currentPage;
	private int pageSize;
	private String userId;
	
	public int getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	@Override
	public String toString() {
		return "AlbumPaginationParam [currentPage=" + currentPage
				+ ", pageSize=" + pageSize + ", userId=" + userId + "]";
	}
}
