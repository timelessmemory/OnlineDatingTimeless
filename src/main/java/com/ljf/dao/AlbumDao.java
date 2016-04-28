package com.ljf.dao;

import java.util.List;

import org.springframework.data.mongodb.core.MongoTemplate;

import com.ljf.bean.AlbumPaginationParam;
import com.ljf.bean.PaginationParam;
import com.ljf.bean.Photo;

/**
 * <p>Title: AlbumDao.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ27ÈÕ
 * @version 1.0
 */

public interface AlbumDao {

	public MongoTemplate getMongoTemplate();

	public void setMongoTemplate(MongoTemplate mongoTemplate);

	public boolean queryOneByUserId(String userId);
	
	public List<Photo> queryPartPhotos(AlbumPaginationParam paginationParam);

	public void insertAlbum(String userId, List<Photo> ls);

	public void updateAlbumByUserId(String userId, Photo photo);

	public void deleteAlbumByUserId(String userId, Photo photo);

	public List<Photo> queryPhotosByUserId(String userId);
	
	public void updatePhotoInfoById(String userId, String photoId, String description);

}