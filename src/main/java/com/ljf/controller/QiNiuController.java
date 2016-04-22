package com.ljf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ljf.bean.QiNiuToken;
import com.qiniu.util.Auth;

/**
 * <p>Title: QiNiuController.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ22ÈÕ
 * @version 1.0
 */

@Controller
@RequestMapping("/api")
public class QiNiuController {
	  private static final String ACCESS_KEY = "p5F8CyN2va5ChFVqBs-BQBi57PgL8c3Wfw3yX8Qu";
	  private static final String SECRET_KEY = "eFw4m-LLDMn3fGvr-_EKh8GjptvevQ10iTI-47jR";
	  private static final String DOMAIN = "7xqayl.com1.z0.glb.clouddn.com";
	  private static final String UPLOAD_DOMAIN = "http://upload.qiniu.com";
	  private static final String BUCKET_NAME = "timeless";
	
	  @ResponseBody
	  @RequestMapping(value = "/getQiNiuToken", method = RequestMethod.GET)
	  public QiNiuToken getQiNiuToken() {
		  QiNiuToken qiNiuToken = new QiNiuToken();
		  Auth auth = Auth.create(ACCESS_KEY, SECRET_KEY);
		  String token = auth.uploadToken(BUCKET_NAME);
		  
		  qiNiuToken.setToken(token);
		  qiNiuToken.setDomain(DOMAIN);
		  qiNiuToken.setUploadDomain(UPLOAD_DOMAIN);
		  return qiNiuToken;  
	  }
}
