package com.ljf.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ljf.bean.AlbumPaginationParam;
import com.ljf.bean.Photo;
import com.ljf.bean.Response;
import com.ljf.commons.Constants;
import com.ljf.service.AlbumService;

/**
 * <p>Title: AlbumController.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ15ÈÕ
 * @version 1.0
 */

@Controller
@RequestMapping("/album")
public class AlbumController {
	
	@Resource
	private AlbumService albumService;
	
	public AlbumService getAlbumService() {
		return albumService;
	}

	public void setAlbumService(AlbumService albumService) {
	    this.albumService = albumService;
	}

	@ResponseBody
	@RequestMapping(value = "/multiUpload", method = RequestMethod.POST)
    public Response multiUpload(@RequestBody List<Photo> ps, @RequestParam String userId) {
	    albumService.addPhotoToAlbum(userId, ps);
	    return new Response(Constants.SUCCESS_CODE, Constants.SUCCESS);
    }
	
	@ResponseBody
	@RequestMapping(value = "/getPhotosCount", method = RequestMethod.POST)
	public Response getPhotosCount(@RequestParam String userId) {
		Integer count = albumService.getPhotos(userId).size();
		return new Response(Constants.SUCCESS_CODE, count.toString());
	}
	
	@ResponseBody
	@RequestMapping(value = "/getPhotos", method = RequestMethod.POST)
	public List<Photo> getPhotos(@RequestBody AlbumPaginationParam albumPaginationParam) {
		return albumService.getPhotos(albumPaginationParam);
	}
	
	@ResponseBody
	@RequestMapping(value = "/modifyPhotoInfo", method = RequestMethod.POST)
    public Response modifyPhotoInfo(@RequestParam String userId, @RequestParam String photoId, @RequestParam String description) {
	    albumService.modifyOnePhotoInfo(userId, photoId, description);
	    return new Response(Constants.SUCCESS_CODE, Constants.SUCCESS);
    }
	
	@ResponseBody
	@RequestMapping(value = "/deletPhotos", method = RequestMethod.POST)
    public Response deletPhotos(@RequestParam String userId, @RequestBody List<Photo> data) {
		albumService.deletePhoto(userId, data);
	    return new Response(Constants.SUCCESS_CODE, Constants.SUCCESS);
    }
}
