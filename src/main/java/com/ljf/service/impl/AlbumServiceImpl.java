package com.ljf.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.ljf.bean.AlbumPaginationParam;
import com.ljf.bean.Photo;
import com.ljf.dao.AlbumDao;
import com.ljf.service.AlbumService;

/**
 * <p>Title: AlbumServiceImpl.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ26ÈÕ
 * @version 1.0
 */

@Service("albumService")
public class AlbumServiceImpl implements AlbumService {
	
	@Resource
	private AlbumDao albumDao;
	
	public void addPhotoToAlbum(String userId, List<Photo> ls) {
		if (albumDao.queryOneByUserId(userId)) {
			for (Photo item : ls) {
				albumDao.updateAlbumByUserId(userId, item);
			}
		} else {
			albumDao.insertAlbum(userId, ls);
		}
	}
	
	public List<Photo> getPhotos(String userId) {
		return albumDao.queryPhotosByUserId(userId);
	}
	
	public List<Photo> getPhotos(AlbumPaginationParam albumPaginationParam) {
		return albumDao.queryPartPhotos(albumPaginationParam);
	}
	
	public void deletePhoto(String userId, List<Photo> ls) {
		for (Photo item : ls) {
			albumDao.deleteAlbumByUserId(userId, item);
		}
	}
	
	public void modifyOnePhotoInfo(String userId, String photoId, String description) {
		albumDao.updatePhotoInfoById(userId, photoId, description);
	}
}
