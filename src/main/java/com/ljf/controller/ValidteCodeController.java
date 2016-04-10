package com.ljf.controller;

import java.io.IOException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.ljf.utils.VerifyCodeUtils;

@Controller
@RequestMapping("/validateCode")
public class ValidteCodeController {
	private static final int VCODE_WIDTH = 200;
	private static final int VCODE_HEIGHT = 80;
	private static final int VCODE_LENGTH = 4;

  @RequestMapping(value = "/get", method = RequestMethod.GET)
  public void getValidateCode(HttpServletResponse response) throws IOException {
	  
	  String codeStr = VerifyCodeUtils.generateVerifyCode(VCODE_LENGTH);
	  //1. 验证码存入cookie
	  Cookie code = new Cookie("vcode", codeStr);
	  code.setPath("/");
	  response.addCookie(code);
	  
	  //2. 生成图片
	  ServletOutputStream sos = response.getOutputStream();
	  VerifyCodeUtils.outputVerifyImage(VCODE_WIDTH, VCODE_HEIGHT, sos, codeStr);
	  
	  response.setHeader("Cache-Control", "no-store");
      response.setHeader("Pragma", "no-cache");
      response.setDateHeader("Expires", 0L);
      response.setContentType("image/jpeg");
      
      //以上步骤1, 2顺序不可对调
      sos.flush();
      sos.close();
  }
}
