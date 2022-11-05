import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service'

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  stateInfo: any = [];
  countryInfo: any=[];
  cityInfo: any=[];
  countryValue : any=[];
  constructor(private country:CountriesService) { }

  ngOnInit(): void {
    this.getCountries()
  }
  getCountries(){
    this.country.allCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
        console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

  onChangeCountry(countryValue : any) {
    console.log("country",this.countryInfo)
    let country=this.countryInfo.filter(function(ele:any){
      if(ele.CountryName==countryValue){
      return ele

  }}) 
  console.log("coun",country);
  
  this.stateInfo=country[0].States
  
    
  }

  onChangeState(stateValue : any) {
    let city=this.stateInfo.filter(function(ele:any){
      if(ele.StateName==stateValue){
      return ele

  }})    
   this.cityInfo=city[0].Cities;
         console.log("cityyy",city)
    // this.cityInfo=this.stateInfo[stateValue].Cities;
   
    
  }
}

