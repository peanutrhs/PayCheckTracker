import React, { Component } from 'react';
import DatePicker from 'react-datepicker/dist/react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../index.css';
import axios from 'axios';


class CreatePayStub extends Component {
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
        this.onChangeFICA = this.onChangeFICA.bind(this);
        this.onChangeFICAYTD = this.onChangeFICAYTD.bind(this);
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
            CompanyName: "",
            EmployeeId: "",
            StartPeriod: "",
            EndPeriod: "",
            PayDate: "",
            Rate: "",
            RegHours: "",
            Amount: "",
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
            FICA: "",
            FICAYTD: "",
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
   onChangeEndPeriod(e){
    this.setState({
        EndPeriod: e.target.value
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
        CompanyName: e.target.value
    });
   }
   onChangeAmount(e){
    this.setState({
        Amount: e.target.value
    });
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
   onChangeFICA(e){
    this.setState({
        FICA: e.target.value
    });
   }
   onChangeFICAYTD(e){
    this.setState({
        FICAYTD: e.target.value
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
        FICA: this.state.FICA,
        FICAYTD: this.state.FICAYTD,
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
    axios.post('http://localhost:5000/stubs/add', stub)
      .then(res => console.log(res.data));

    window.location = '/';
   }

    render() {
        return (
            <div>
                <h1>Create New Pay Stub</h1>
                <form onSubmit = {this.onSubmit} className = 'movieTitle-left'>
                    <div className='movieTitle-left'>
                        <label>Company Name:  </label> 

                        <input
                            type="text"
                            className= 'movieTitle-h2'
                            value={this.state.CompanyName}
                            onChange ={this.onChangeCompanyName}
                            />
                    </div>
                    <br/>
                    <div className='movieTitle-left'>
                        <label>Employee Id: </label>
                        <input
                            type="text"
                            className= 'movieTitle-h2'
                            value={this.state.EmployeeId}
                            onChange ={this.onChangeEmployeeId}
                            />
                    </div>
                    <br/>
                    <div className='movieTitle-left'>
                        <label>Start Period: </label>
                        <div className='movieTitle-h2'>
                            <DatePicker
                                className = 'movieTitle-h2'
                                selected={this.state.StartPeriod}
                                onChange={this.onChangeStartPeriod}
                            />
                        </div>
                    </div>
                    <br/>
                    <div className='movieTitle-left'>
                        <label>End Period: </label>
                        <div className='movieTitle-h2'>
                            <DatePicker
                                className = 'movieTitle-h2'
                                selected={this.state.EndPeriod}
                                onChange={this.onChangeEndPeriod}
                            />
                        </div>
                    </div>
                    <br/>
                    <div className='movieTitle-left'>
                        <label>Pay Date: </label>
                        <div className='movieTitle-h2'>
                            <DatePicker
                                className = 'movieTitle-h2'
                                selected={this.state.PayDate}
                                onChange={this.onChangePayDate}
                            />
                        </div>
                    </div>
                    <br/>
                    <div className='movieTitle-left'>
                        <label>Rate:  </label> 

                        <input
                            type="text"
                            className= 'movieTitle-h2'
                            value={this.state.Rate}
                            onChange ={this.onChangeRate}
                            />
                    </div>
                    <br/>
                    <div className='movieTitle-left'>
                        <label>Regular hours:  </label> 

                        <input
                            type="text"
                            className= 'movieTitle-h2'
                            value={this.state.React}
                            onChange ={this.onChangeRegHours}
                            />
                    </div>
                    <br/>
                    <div className='movieTitle-left'>
                        <input type = "submit" value="Create Pay Stub" className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreatePayStub;