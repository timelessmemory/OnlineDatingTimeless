package com.ljf.bean;

import java.util.List;

import org.bson.types.ObjectId;

/**
 * <p>Title: Album.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ16ÈÕ
 * @version 1.0
 */

public class Album {
	private ObjectId id;
	private String userId;
	private List<Photo> albums;
	
	public ObjectId getId() {
		return id;
	}
	
	public void setId(ObjectId id) {
		this.id = id;
	}
	
	public String getUserId() {
		return userId;
	}
	
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	public List<Photo> getAlbums() {
		return albums;
	}
	
	public void setAlbums(List<Photo> albums) {
		this.albums = albums;
	}

	@Override
	public String toString() {
		return "Album [id=" + id + ", userId=" + userId + ", albums=" + albums
				+ "]";
	}
}
