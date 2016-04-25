package com.ljf.bean;
/**
 * <p>Title: PaginationParam.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ22ÈÕ
 * @version 1.0
 */

public class PaginationParam {
	private int birthFrom;
	private int birthTo;
	private String country;
	private String province;
	private String city;
	private String gender;
	private int fromStature;
	private int toStature;
	private String education;
	private String salaryRange;
	private int currentPage;
	private int pageSize;
	private String id;
	
	public int getBirthFrom() {
		return birthFrom;
	}
	public void setBirthFrom(int birthFrom) {
		this.birthFrom = birthFrom;
	}
	public int getBirthTo() {
		return birthTo;
	}
	public void setBirthTo(int birthTo) {
		this.birthTo = birthTo;
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
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getFromStature() {
		return fromStature;
	}
	public void setFromStature(int fromStature) {
		this.fromStature = fromStature;
	}
	public int getToStature() {
		return toStature;
	}
	public void setToStature(int toStature) {
		this.toStature = toStature;
	}
	public String getEducation() {
		return education;
	}
	public void setEducation(String education) {
		this.education = education;
	}
	public String getSalaryRange() {
		return salaryRange;
	}
	public void setSalaryRange(String salaryRange) {
		this.salaryRange = salaryRange;
	}
	public int getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	@Override
	public String toString() {
		return "PaginationParam [birthFrom=" + birthFrom + ", birthTo="
				+ birthTo + ", country=" + country + ", province=" + province
				+ ", city=" + city + ", gender=" + gender + ", fromStature="
				+ fromStature + ", toStature=" + toStature + ", education="
				+ education + ", salaryRange=" + salaryRange + ", currentPage="
				+ currentPage + ", pageSize=" + pageSize + ", id=" + id + "]";
	}
}
