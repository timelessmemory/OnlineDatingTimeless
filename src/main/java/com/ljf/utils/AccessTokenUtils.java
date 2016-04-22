package com.ljf.utils;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SignatureException;
import java.util.HashMap;
import java.util.Map;

import com.auth0.jwt.JWTSigner;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.JWTVerifyException;
import com.ljf.commons.Constants;

/**
 * <p>Title: AccessTokenUtils.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ21ÈÕ
 * @version 1.0
 */

public class AccessTokenUtils {
	
	public static String generateAccessToken() {
		JWTSigner signer = new JWTSigner(Constants.TOKEN_SECRET);
		HashMap<String, Object> claims = new HashMap<String, Object>();
		Long currentTime = System.currentTimeMillis();
		claims.put("exp", currentTime + Constants.EXPIRE_DURATION);
		return signer.sign(claims);
	}
	
	public static long verifyAccessToken(String accessToken) throws Exception {
		JWTVerifier verifier = new JWTVerifier(Constants.TOKEN_SECRET);
		Map<String, Object> decoded = verifier.verify(accessToken);
		return (Long) decoded.get("exp");
	}

}
