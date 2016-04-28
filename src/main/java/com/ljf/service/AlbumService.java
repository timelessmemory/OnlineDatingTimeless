package com.ljf.service;

import java.util.List;

import com.ljf.bean.AlbumPaginationParam;
import com.ljf.bean.Photo;

/**
 * <p>Title: AlbumService.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ27ÈÕ
 * @version 1.0
 */

public interface AlbumService {

	public void addPhotoToAlbum(String userId, List<Photo> ls);

	public List<Photo> getPhotos(String userId);
	
	public List<Photo> getPhotos(AlbumPaginationParam albumPaginationParam);

	public void deletePhoto(String userId, List<Photo> ls);

	public void modifyOnePhotoInfo(String userId, String photoId,
			String description);

}