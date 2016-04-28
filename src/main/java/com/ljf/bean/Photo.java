package com.ljf.bean;
/**
 * <p>Title: Photo.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ16ÈÕ
 * @version 1.0
 */

public class Photo {
	private String photoId;
	private String url;
	private String description;
	
	public String getPhotoId() {
		return photoId;
	}

	public void setPhotoId(String photoId) {
		this.photoId = photoId;
	}

	public String getUrl() {
		return url;
	}
	
	public void setUrl(String url) {
		this.url = url;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	@Override
	public String toString() {
		return "Photo [photoId=" + photoId + ", url=" + url + ", description="
				+ description + "]";
	}
}
