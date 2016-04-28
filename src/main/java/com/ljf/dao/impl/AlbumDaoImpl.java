package com.ljf.dao.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import com.ljf.bean.Album;
import com.ljf.bean.AlbumPaginationParam;
import com.ljf.bean.PaginationParam;
import com.ljf.bean.Photo;
import com.ljf.dao.AlbumDao;

/**
 * <p>Title: AlbumDaoImpl.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ26ÈÕ
 * @version 1.0
 */

@Repository("albumDao")
public class AlbumDaoImpl implements AlbumDao {
	
	@Resource
	private MongoTemplate mongoTemplate;
	
	public MongoTemplate getMongoTemplate() {
		return mongoTemplate;
	}

	public void setMongoTemplate(MongoTemplate mongoTemplate) {
		this.mongoTemplate = mongoTemplate;
	}
	
	public boolean queryOneByUserId(String userId) {
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		Album album = mongoTemplate.findOne(query, Album.class);
		if (album == null) {
			return false;
		} else {
			return true;
		}
	}
	
	public void insertAlbum(String userId, List<Photo> ls) {
		Album album = new Album();
		album.setUserId(userId);
		album.setAlbums(ls);
		mongoTemplate.insert(album);
	}
	
	public void updateAlbumByUserId(String userId, Photo photo) {
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		Update update = new Update();
		update.push("albums", photo);
		mongoTemplate.upsert(query, update, Album.class);
	}
	
	public void updatePhotoInfoById(String userId, String photoId, String description) {
		Query query = Query.query(Criteria.where("userId").is(userId)
                .and("albums.photoId").is(photoId));
        Update update = new Update();
        update.set("albums.$.description", description);
        mongoTemplate.updateFirst(query, update, Album.class);
	}
	
	public void deleteAlbumByUserId(String userId, Photo photo) {
		Query query = Query.query(Criteria.where("userId").is(userId));
        Update update = new Update();
        update.pull("albums", photo);
        mongoTemplate.updateFirst(query, update, Album.class);
	}
	
	public List<Photo> queryPhotosByUserId(String userId) {
		Query query = new Query();
		query.fields().include("albums");
		query.addCriteria(Criteria.where("userId").is(userId));
        
        Album album = mongoTemplate.findOne(query, Album.class);
        if (album == null) return null;
        return album.getAlbums();
	}
	
	public List<Photo> queryPartPhotos(AlbumPaginationParam paginationParam) {
		Query query = new Query();
		query.fields().include("albums");
		query.addCriteria(Criteria.where("userId").is(paginationParam.getUserId()));
        
        Album album = mongoTemplate.findOne(query, Album.class);
        
        if (album == null) return null;
        
        List<Photo> allList = album.getAlbums();
        
        List<Photo> resuList = new ArrayList<Photo>();
        
        int totalPhoto = allList.size(); 
        int fromPhoto = (paginationParam.getCurrentPage() - 1) * paginationParam.getPageSize();
        int toPhoto = 0;
        
        if (fromPhoto + paginationParam.getPageSize() > totalPhoto) {
        	toPhoto = totalPhoto - 1;
        } else {
        	toPhoto = fromPhoto + paginationParam.getPageSize() - 1;
        }
        
        for (int i = fromPhoto; i <= toPhoto; i++) {
        	resuList.add(allList.get(i));
        }
        
        return resuList;
	}
}
