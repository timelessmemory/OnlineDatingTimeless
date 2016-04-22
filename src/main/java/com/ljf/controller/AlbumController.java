package com.ljf.controller;

import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ljf.bean.Photo;
import com.ljf.bean.Response;
import com.ljf.exception.LoginException;

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
	
	  @RequestMapping(value = "/add", method = RequestMethod.POST)
	  public void addAlbum(@RequestBody Photo photo) {
		  System.out.println("add");
		  System.out.println(photo.getId());
		  System.out.println(photo.getUrl());
		  System.out.println(photo.getDescription());
	  }
	  
	  @RequestMapping(value = "/add2", method = RequestMethod.POST)
	  public void addAlbum2(@RequestParam Integer id, @RequestParam String url, @RequestParam String description) {
		  System.out.println("add2");
		  System.out.println(id);
		  System.out.println(url);
		  System.out.println(description);
	  }
	  
	  @ResponseBody
	  @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	  public Response deleteAlbum(@PathVariable("id") Integer id) {
		  System.out.println("delete " + id);
		  if (id == 1) {
			  throw new LoginException();
		  }
		  return new Response(200, "ok");
	  }
	  
	  @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
	  public void updateAlbum(@PathVariable("id") Integer id, @RequestBody Photo photo) {
		  System.out.println("put" + id);
		  System.out.println(photo.getId());
		  System.out.println(photo.getUrl());
		  System.out.println(photo.getDescription());
	  }
	  
	  @RequestMapping(value = "/get/{id}", method = RequestMethod.GET)
	  public void getAlbum(@PathVariable("id") Integer id) {
		  System.out.println("get" + id);
	  }
	  
	  @RequestMapping(value = "/deletes", method = RequestMethod.DELETE)
	  public void deletes(@RequestParam(value="ids[]") int[] ids) {
		  System.out.println("deletes");
		  for(int item : ids) {
			  System.out.println(item);
		  }
	  }
	  
//	  httpService.post('http://localhost:8080/OnlineDatingTimeless/album/deletelist', 
//      		  [{
//              id : 1,
//              url : 'baidu.com',
//              description : 'goods'
//            }]
//          )
	  @RequestMapping(value = "/deletelist", method = RequestMethod.POST)
	  public void deletes(@RequestBody List<Photo> ps) {
		  System.out.println("deletes");
		  for(Photo item : ps) {
			  System.out.println(item);
		  }
	  }
}
