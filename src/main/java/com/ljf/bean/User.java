package com.ljf.bean;

import java.util.Date;

import org.bson.types.ObjectId;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * <p>Title: User.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ20ÈÕ
 * @version 1.0
 */
@JsonIgnoreProperties({ "retypePassword" })
@Document(collection="user")
public class User {
	@Id
	private String id;
	private String mobile;
	private String email;
	private String nickname;
	private String password;
	private String realName;
	private String avatar = "frontend/images/default.jpg";
	private Birthday birthday;
	private Integer age;
	private String gender;
	private String country;
	private String province;
	private String city;
	private String salary;
	private String education;
	private String introduction;
	private Integer weight;
	private Integer stature;
	private String isNeedChild;
	private String marriage;
	private String job;
	private String house;
	private String isAcceptDf;
	private String isWillingTl;
	private String wantType;
	private String wantCountry;
	private String wantProvince;
	private String wantCity;
	private Integer wantStature;
	private String wantSalary;
	private Integer wantAgeFrom;
	private Integer wantAgeTo;
	private String wantEducation;
	private Date registerDate = new Date();
	private Date LastLoginTime;
	private boolean isVIP;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRealName() {
		return realName;
	}
	public void setRealName(String realName) {
		this.realName = realName;
	}
	public String getAvatar() {
		return avatar;
	}
	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}
	public Birthday getBirthday() {
		return birthday;
	}
	public void setBirthday(Birthday birthday) {
		this.birthday = birthday;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getSalary() {
		return salary;
	}
	public void setSalary(String salary) {
		this.salary = salary;
	}
	public String getEducation() {
		return education;
	}
	public void setEducation(String education) {
		this.education = education;
	}
	public String getIntroduction() {
		return introduction;
	}
	public void setIntroduction(String introduction) {
		this.introduction = introduction;
	}
	public Integer getWeight() {
		return weight;
	}
	public void setWeight(Integer weight) {
		this.weight = weight;
	}
	public Integer getStature() {
		return stature;
	}
	public void setStature(Integer stature) {
		this.stature = stature;
	}
	public String getIsNeedChild() {
		return isNeedChild;
	}
	public void setIsNeedChild(String isNeedChild) {
		this.isNeedChild = isNeedChild;
	}
	public String getMarriage() {
		return marriage;
	}
	public void setMarriage(String marriage) {
		this.marriage = marriage;
	}
	public String getJob() {
		return job;
	}
	public void setJob(String job) {
		this.job = job;
	}
	public String getHouse() {
		return house;
	}
	public void setHouse(String house) {
		this.house = house;
	}
	public String getIsAcceptDf() {
		return isAcceptDf;
	}
	public void setIsAcceptDf(String isAcceptDf) {
		this.isAcceptDf = isAcceptDf;
	}
	public String getIsWillingTl() {
		return isWillingTl;
	}
	public void setIsWillingTl(String isWillingTl) {
		this.isWillingTl = isWillingTl;
	}
	public String getWantType() {
		return wantType;
	}
	public void setWantType(String wantType) {
		this.wantType = wantType;
	}
	public String getWantCountry() {
		return wantCountry;
	}
	public void setWantCountry(String wantCountry) {
		this.wantCountry = wantCountry;
	}
	public String getWantProvince() {
		return wantProvince;
	}
	public void setWantProvince(String wantProvince) {
		this.wantProvince = wantProvince;
	}
	public String getWantCity() {
		return wantCity;
	}
	public void setWantCity(String wantCity) {
		this.wantCity = wantCity;
	}
	public Integer getWantStature() {
		return wantStature;
	}
	public void setWantStature(Integer wantStature) {
		this.wantStature = wantStature;
	}
	public String getWantSalary() {
		return wantSalary;
	}
	public void setWantSalary(String wantSalary) {
		this.wantSalary = wantSalary;
	}
	public Integer getWantAgeFrom() {
		return wantAgeFrom;
	}
	public void setWantAgeFrom(Integer wantAgeFrom) {
		this.wantAgeFrom = wantAgeFrom;
	}
	public Integer getWantAgeTo() {
		return wantAgeTo;
	}
	public void setWantAgeTo(Integer wantAgeTo) {
		this.wantAgeTo = wantAgeTo;
	}
	public String getWantEducation() {
		return wantEducation;
	}
	public void setWantEducation(String wantEducation) {
		this.wantEducation = wantEducation;
	}
	
	public Date getRegisterDate() {
		return registerDate;
	}
	public void setRegisterDate(Date registerDate) {
		this.registerDate = registerDate;
	}
	public Date getLastLoginTime() {
		return LastLoginTime;
	}
	public void setLastLoginTime(Date lastLoginTime) {
		LastLoginTime = lastLoginTime;
	}
	public boolean isVIP() {
		return isVIP;
	}
	public void setVIP(boolean isVIP) {
		this.isVIP = isVIP;
	}
	
	@Override
	public String toString() {
		return "User [id=" + id + ", mobile=" + mobile + ", email=" + email
				+ ", nickname=" + nickname + ", password=" + password
				+ ", realName=" + realName + ", avatar=" + avatar
				+ ", birthday=" + birthday + ", age=" + age + ", gender="
				+ gender + ", country=" + country + ", province=" + province
				+ ", city=" + city + ", salary=" + salary + ", education="
				+ education + ", introduction=" + introduction + ", weight="
				+ weight + ", stature=" + stature + ", isNeedChild="
				+ isNeedChild + ", marriage=" + marriage + ", job=" + job
				+ ", house=" + house + ", isAcceptDf=" + isAcceptDf
				+ ", isWillingTl=" + isWillingTl + ", wantType=" + wantType
				+ ", wantCountry=" + wantCountry + ", wantProvince="
				+ wantProvince + ", wantCity=" + wantCity + ", wantStature="
				+ wantStature + ", wantSalary=" + wantSalary + ", wantAgeFrom="
				+ wantAgeFrom + ", wantAgeTo=" + wantAgeTo + ", wantEducation="
				+ wantEducation + ", registerDate=" + registerDate
				+ ", LastLoginTime=" + LastLoginTime + ", isVIP=" + isVIP + "]";
	}
}
