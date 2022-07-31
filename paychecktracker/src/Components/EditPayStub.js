import React, { Component } from 'react';
import DatePicker from 'react-datepicker/dist/react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../index.css';
import '../App.css';
import axios from 'axios';


class EditPayStub extends Component {
    constructor(props){
        super(props);

        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeEmployeeId = this.onChangeEmployeeId.bind(this);
        this.onChangeStartPeriod = this.onChangeStartPeriod.bind(this);
        this.onChangeEndPeriod = this.onChangeEndPeriod.bind(this);
        this.onChangePayDate = this.onChangePayDate.bind(this);
        this.onChangeRate = this.onChangeRate.bind(this);
        this.onChangeRegHours = this.onChangeRegHours.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeGross = this.onChangeGross.bind(this);
        this.onChangeGrossAmountYTD = this.onChangeGrossAmountYTD.bind(this);
        this.onChangeHolidayHours = this.onChangeHolidayHours.bind(this);
        this.onChangeHolidayAmount = this.onChangeHolidayAmount.bind(this);
        this.onChangeHolidayAmountYTD = this.onChangeHolidayAmountYTD.bind(this);
        this.onChangePTOHours = this.onChangePTOHours.bind(this);
        this.onChangePTOAmount = this.onChangePTOAmount.bind(this);
        this.onChangePTOAmountYTD = this.onChangePTOAmountYTD.bind(this);
        this.onChangeOverTimeHours = this.onChangeOverTimeHours.bind(this);
        this.onChangeOverTimeAmount = this.onChangeOverTimeAmount.bind(this);
        this.onChangeOverTimeAmountYTD = this.onChangeOverTimeAmountYTD.bind(this);
        this.onChangeMedicare = this.onChangeMedicare.bind(this);
        this.onChangeMedicareYTD = this.onChangeMedicareYTD.bind(this);
        this.onChangeSocSec = this.onChangeSocSec.bind(this);
        this.onChangeSocSecYTD = this.onChangeSocSecYTD.bind(this);
        this.onChangeFederal = this.onChangeFederal.bind(this);
        this.onChangeFederalYTD = this.onChangeFederalYTD.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeStateYTD = this.onChangeStateYTD.bind(this);
        this.onChangeLocal = this.onChangeLocal.bind(this);
        this.onChangeLocalYTD = this.onChangeLocalYTD.bind(this);
        this.onChangeORTransitTax = this.onChangeORTransitTax.bind(this);
        this.onChangeORTransitTaxYTD = this.onChangeORTransitTaxYTD.bind(this);
        this.onChangeORWBFTax = this.onChangeORWBFTax.bind(this);
        this.onChangeORWBFTaxYTD = this.onChangeORWBFTaxYTD.bind(this);
        this.onChangeCompanyLogo = this.onChangeCompanyLogo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            CompanyName: props.CompanyName,
            EmployeeId: "",
            StartPeriod: "",
            EndPeriod: "",
            PayDate: "",
            Rate: "",
            RegHours: "",
            Amount: "",
            Gross: "",
            GrossAmountYTD: "",
            HolidayHours: "",
            HolidayAmount: "",
            HolidayAmountYTD: "",
            PTOHours: "",
            PTOAmount: "",
            PTOAmountYTD: "",
            OvertimeHours: "",
            OvertimeAmount: "",
            OvertimeAmountYTD: "",
            Medicare: "",
            MedicareYTD: "",
            SocSec: "",
            SocSecYTD: "",
            Federal: "",
            FederalYTD: "",
            State: "",
            StateYTD: "",
            Local: "",
            LocalYTD:"",
            ORTransitTax: "",
            ORTransitTaxYTD: "",
            ORWBFTax: "",
            ORWBFTaxYTD: "",
            CompanyLogo: "",
    
        };
       
           
        
    }
    componentDidMount(){
        axios.get(`http://localhost:5000/stubs/`)
        .then(response => {
          this.setState({paystubs: response.data})
          console.log(response.data[0].CompanyName);
        })
        .catch((error)=> {
            console.log(error);
        })
    }
   onChangeCompanyName(e){
    this.setState({
        CompanyName: e.target.value
    });
   }
    onChangeEmployeeId(e){
        this.setState({
            EmployeeId: e.target.value
    }); 
   }
   onChangeStartPeriod(date){
    this.setState({
        StartPeriod: date
    });
   }
   onChangeEndPeriod(date){
    this.setState({
        EndPeriod: date
    });
   }
   onChangePayDate(date){
    this.setState({
        PayDate: date
    });
   }
   onChangeRate(e){
    this.setState({
        Rate: e.target.value
    });
   }
   onChangeRegHours(e){
    this.setState({
        RegHours: e.target.value
    });
    
   }
   onChangeAmount(e){
    this.setState({
        Amount: e.target.value
    });
   }
   onChangeGross(e){
    this.setState({
        Gross: e.target.value
    })
   }
   onChangeGrossAmountYTD(e){
    this.setState({
        GrossAmountYTD: e.target.value
    });
   }
   onChangeHolidayHours(e){
    this.setState({
        HolidayHours: e.target.value
    });
   }
   onChangeHolidayAmount(e){
    this.setState({
        HolidayAmount: e.target.value
    });
   }
   onChangeHolidayAmountYTD(e){
    this.setState({
        HolidayAmountYTD: e.target.value
    });
   }
   onChangePTOHours(e){
    this.setState({
        PTOHours: e.target.value
    });
   }
   onChangePTOAmount(e){
    this.setState({
        PTOAmount: e.target.value
    });
   }
   onChangePTOAmountYTD(e){
    this.setState({
        PTOAmountYTD: e.target.value
    });
   }
   onChangeOverTimeHours(e){
    this.setState({
        OvertimeHours: e.target.value
    });
   }
   onChangeOverTimeAmount(e){
    this.setState({
        OvertimeAmount: e.target.value
    });
   }
   onChangeOverTimeAmountYTD(e){
    this.setState({
        OvertimeAmountYTD: e.target.value
    });
   }
  
   onChangeMedicare(e){
    this.setState({
        Medicare: e.target.value
    });
   }
   onChangeMedicareYTD(e){
    this.setState({
        MedicareYTD: e.target.value
    });
   }
   onChangeSocSec(e){
    this.setState({
        SocSec: e.target.value
    });
   }
   onChangeSocSecYTD(e){
    this.setState({
        SocSecYTD: e.target.value
    });
   }
   onChangeFederal(e){
    this.setState({
    // This one needs some thought.  Need to ensure it changes as 
    // the gross earnings for the year changes brackets
        Federal: e.target.value
    });
   }
   onChangeFederalYTD(e){
    this.setState({
        FederalYTD: e.target.value
    });
   }
   onChangeState(e){
    this.setState({
        State: e.target.value
    });
   }
   onChangeStateYTD(e){
    this.setState({
        StateYTD: e.target.value
    });
   }
   onChangeLocal(e){
    this.setState({
        Local: e.target.value
    });
   }
   onChangeLocalYTD(e){
    this.setState({
        LocalYTD: e.target.value
    });
   }
   onChangeORTransitTax(e){
    this.setState({
        ORTransitTax: e.target.value
    });
   }
   onChangeORTransitTaxYTD(e){
    this.setState({
        ORTransitTaxYTD: e.target.value
    });
   }
   onChangeORWBFTax(e){
    this.setState({
        ORWBFTax: e.target.value
    });
   }
   
   onChangeORWBFTaxYTD(e){
    this.setState({
        ORWBFTaxYTD: e.target.value
    });
   }
   onChangeCompanyLogo(e){
    this.setState({
        CompanyLogo: e.target.value
    });
   }
   
   onSubmit(e){
    
    
    e.preventDefault();
    const stub = {
        CompanyName: this.state.CompanyName,
        EmployeeId: this.state.EmployeeId,
        StartPeriod: this.state.StartPeriod,
        EndPeriod: this.state.EndPeriod,
        PayDate: this.state.PayDate,
        Rate: this.state.Rate,
        RegHours: this.state.RegHours,
        Amount: this.state.Amount,
        Gross: this.state.Gross,
        GrossAmountYTD: this.state.GrossAmountYTD,
        HolidayHours: this.state.HolidayHours,
        HolidayAmount: this.state.HolidayAmount,
        HolidayAmountYTD: this.state.HolidayAmountYTD,
        PTOHours: this.state.PTOHours,
        PTOAmount: this.state.PTOAmount,
        PTOAmountYTD: this.state.PTOAmountYTD,
        OvertimeHours: this.state.OvertimeHours,
        OvertimeAmount: this.state.OvertimeAmount,
        OvertimeAmountYTD: this.state.OvertimeAmountYTD,
        Medicare: this.state.Medicare,
        MedicareYTD: this.state.MedicareYTD,
        SocSec: this.state.SocSec,
        SocSecYTD: this.state.SocSecYTD,
        Federal: this.state.Federal,
        FederalYTD: this.state.FederalYTD,
        State: this.state.State,
        StateYTD: this.StateYTD,
        Local: this.state.Local,
        LocalYTD: this.state.LocalYTD,
        ORTransitTax: this.state.ORTransitTax,
        ORTransitTaxYTD: this.state.ORTransitTaxYTD,
        ORWBFTax: this.state.ORWBFTax,
        ORWBFTaxYTD: this.state.ORWBFTaxYTD,
        CompanyLogo: this.state.CompanyLogo,
    }
    console.log(stub);
    axios.post('http://localhost:5000/stubs/edit', stub)
      .then(res => console.log(res.data));

    window.location = '/PayStubList';
   }

    render() {
        return (
            <div>
                <h1>Edit Pay Stub</h1>
                <form className='form-style-9' onSubmit = {this.onSubmit} >
                   <div className='form-style-child'>
                   <input
                            name ="field1"
                            type="text"
                            placeholder='Company Name'
                            value={this.state.CompanyName}
                            onChange ={this.onChangeCompanyName}
                            />
                        <input
                            type="text"
                            name = 'field2'
                            placeholder='Employee Id'
                            value={this.state.EmployeeId}
                            onChange ={this.onChangeEmployeeId}
                            />
                        <input
                            type='text'
                            name ='netwages'
                            placeholder='Net Wages'
                            value={this.state.Amount}
                            onChange={this.onChangeAmount}
                        />
                   </div>
                       

                    <div className='form-style-child'>
                        <DatePicker 
                            placeholderText = "Start Period"
                            name="field3"
                            selected={this.state.StartPeriod}
                            onChange={this.onChangeStartPeriod}
                        />
                        <DatePicker 
                            placeholderText = "End Period"
                            name="field4"
                            selected={this.state.EndPeriod}
                            onChange={this.onChangeEndPeriod}
                        />
                        <DatePicker 
                            placeholderText = "Pay Date"
                            name="field5"
                            selected={this.state.PayDate}
                            onChange={this.onChangePayDate}
                        />
                        <input 
                            type="text"
                            placeholder='Rate'
                            name="field6"
                            value={this.state.Rate}
                            onChange ={this.onChangeRate}
                        />
                        </div>
                             
                           
                    <div className='form-style-child'>
                        
                        <input 
                            type="text"
                            placeholder='Regular Hours'
                            value={this.state.RegHours}
                            onChange ={this.onChangeRegHours}
                        />
                        <input
                            type = "text"
                            placeholder='Holiday Hours'
                            name="field7"
                            value = {this.state.HolidayHours}
                            onChange ={this.onChangeHolidayHours}
                        />
                        <input
                            type = "text"
                            placeholder='PTO Hours'
                            name="field8"
                            value={this.state.PTOHours}
                            onChange = {this.onChangePTOHours}
                        />
                        <input
                            type ="text"
                            placeholder='Overtime Hours'
                            name='overtimeHours'
                            value={this.state.OvertimeHours}
                            onChange={this.onChangeOverTimeHours}
                        />
                        
                    </div>
                    
                    <div className='form-style-child'>
                        <input
                            type = "text"
                            placeholder='Gross Wages'
                            value = {this.state.Gross}
                            onChange={this.onChangeGross}
                        />
                        <input
                            type='text'
                            placeholder='Holiday Wages'
                            name = 'netwages'    
                            value={this.state.HolidayAmount}
                            onChange={this.onChangeHolidayAmount}
                        />
                        <input
                            type='text'
                            placeholder='PTO Wages'
                            name='ptowages'
                            value={this.state.PTOAmount}
                            onChange={this.onChangePTOAmount}
                        />
                        <input
                            type='text'
                            placeholder='Overtime Wages'
                            name='overtimewages'
                            value={this.state.OvertimeAmount}
                            onChange={this.onChangeOverTimeAmount}
                        />
                    </div>
                    <div className='form-style-child'>
                    
                        <input 
                            type="text"
                            placeholder='Gross Wages YTD'
                            name="field10"
                            value={this.state.GrossAmountYTD}
                            onChange={this.onChangeGrossAmountYTD}       
                        />
                        <input
                            type = "text"
                            placeholder='Holiday Wages YTD'
                            name="field11"
                            value = {this.state.HolidayAmountYTD}
                            onChange={this.onChangeHolidayAmountYTD}       
                        />
                        <input
                            type = "text"
                            placeholder='PTO Wages YTD'
                            name="field12"
                            value={this.state.PTOAmountYTD}
                            onChange={this.onChangePTOAmountYTD}      
                        />
                        <input
                            type ='text'
                            placeholder='Overtime Wages YTD'
                            value={this.state.OvertimeAmountYTD}
                            onChange={this.onChangeOverTimeAmountYTD}
                        />
                    </div>
                    <div className='form-style-child'>
                        <input
                            type='text'
                            placeholder='Medicare Tax'
                            name='medicaretax'
                            value={this.state.Medicare}
                            onChange={this.onChangeMedicare}
                        />
                        <input
                            type='text'
                            placeholder='Social Sec Tax'
                            name='socsectax'
                            value={this.state.SocSec}
                            onChange={this.onChangeSocSec}
                        />
                        <input
                            type='text'
                            placeholder='Federal Tax'
                            name='federaltax'
                            value={this.state.Federal}
                            onChange={this.onChangeFederal}
                        />
                        <input
                            type='text'
                            placeholder='State Tax'
                            name='statetax'
                            value={this.state.State}
                            onChange={this.onChangeState}
                        />
                    </div>
                    <div className='form-style-child'>
                        <input
                            type='text'
                            placeholder='Medicare Taxes YTD'
                            name='medicareytd'
                            value={this.state.MedicareYTD}
                            onChange={this.onChangeMedicareYTD}
                        />
                        <input
                            type='text'
                            placeholder='Soc Sec Taxes YTD'
                            value={this.state.SocSecYTD}
                            onChange={this.onChangeSocSecYTD}
                        />
                        <input
                            type='text'
                            placeholder='Federal Taxes YTD'
                            value={this.state.FederalYTD}
                            onChange={this.onChangeFederalYTD}
                        />
                        <input
                            type='text'
                            placeholder='State Taxes YTD'
                            value={this.state.onChangeStateYTD}
                            onChange={this.onChangeStateYTD}
                        />
                    </div>
                    <div className='form-style-child'>
                        <input
                            type='text'
                            placeholder='Local Tax'
                            value={this.state.Local}
                            onChange={this.onChangeLocal}
                        />
                        <input
                            type='text'
                            placeholder='Oregon Transit tax'
                            value={this.state.ORTransitTax}
                            onChange={this.onChangeORTransitTax}
                        />
                        <input
                            type='text'
                            placeholder='OR Workers Benifit Tax'
                            value={this.state.ORWBFTax}
                            onChange={this.onChangeORWBFTax}
                        />
                    </div>
                    <div className='form-style-child'>
                        <input
                            type='text'
                            placeholder='Local Taxes YTD'
                            value={this.state.LocalYTD}
                            onChange={this.onChangeLocalYTD}
                        />
                        <input
                            type='text'
                            placeholder='Oregon Transit taxes YTD'
                            value={this.state.ORTransitTaxYTD}
                            onChange={this.onChangeORTransitTaxYTD}
                        />
                        <input
                            type='text'
                            placeholder='OR WBF Taxes YTD'
                            value={this.state.ORWBFTaxYTD}
                            onChange={this.onChangeORWBFTaxYTD}
                        />
                    </div>
                    <div>
                        <input type = "submit" value="Create Pay Stub" className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditPayStub;
 