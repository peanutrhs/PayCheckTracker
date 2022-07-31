const router = require('express').Router();
let Stub = require('../Models/PayStub.model');

router.route('/').get((req,res)=>{
    Stub.find()
    .then(stubs => res.json(stubs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=>{
    const CompanyName = req.body.CompanyName;
    const EmployeeId = req.body.EmployeeId;
    const StartPeriod= req.body.StartPeriod;
    const EndPeriod = req.body.EndPeriod;
    const PayDate = req.body.PayDate;
    const Rate = req.body.Rate;
    const RegHours = req.body.RegHours;  
    const Amount = req.body.Amount;
    const Gross = req.body.Gross;
    const GrossAmountYTD = req.body.GrossAmountYTD;
    const HolidayHours = req.body.HolidayHours;
    const HolidayAmount = req.body.HolidayAmount;
    const HolidayAmountYTD = req.body.HolidayAmountYTD;
    const PTOHours = req.body.PTOHours;
    const PTOAmount = req.body.PTOAmount;
    const PTOAmountYTD = req.body.PTOAmountYTD;
    const OvertimeHours = req.body.OvertimeHours;
    const OvertimeAmount = req.body.OvertimeAmount;
    const OvertimeAmountYTD = req.body.OvertimeAmountYTD;
    const FICA = req.body.FICA;
    const FICAYTD = req.body.FICAYTD;
    const Medicare = req.body.Medicare;
    const MedicareYTD = req.body.MedicareYTD;
    const SocSec = req.body.SocSec;
    const SocSecYTD = req.body.SocSecYTD;
    const Federal = req.body.Federal;
    const FederalYTD = req.body.FederalYTD;
    const State = req.body.State;
    const StateYTD = req.body.StateYTD;
    const Local = req.body.Local;
    const LocalYTD = req.body.LocalYTD;
    const ORTransitTax = req.body.ORTransitTax;
    const ORTransitTaxYTD = req.body.ORTransitTaxYTD;
    const ORWBFTax = req.body.ORWBFTax;
    const ORWBFTaxYTD = req.body.ORTransitTaxYTD;
    const CompanyLogo = req.body.CompanyLogo;
    const newStub = new Stub({
        CompanyName,
        EmployeeId,
        StartPeriod,
        EndPeriod,
        PayDate,
        Rate,
        RegHours,
        Amount,
        Gross,
        GrossAmountYTD,
        HolidayHours,
        HolidayAmount,
        HolidayAmountYTD,
        PTOHours,
        PTOAmount,
        PTOAmountYTD,
        OvertimeHours,
        OvertimeAmount,
        OvertimeAmountYTD,
        FICA,
        FICAYTD,
        Medicare,
        MedicareYTD,
        SocSec,
        SocSecYTD,
        Federal,
        FederalYTD,
        State,
        StateYTD,
        Local,
        LocalYTD,
        ORTransitTax,
        ORTransitTaxYTD,
        ORWBFTax,
        ORWBFTaxYTD,
        CompanyLogo
    });
    newStub
    .save()
    .then(()=>res.json('Pay Stub Added!'))
    .catch((err) => res.status(400).json("Error: " + err));

});

router.route("/:id").get((req, res) => {
    Stub.findById(req.params.id)
        .then((stub) => res.json(stub))
       .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    Stub.findByIdAndDelete(req.params.id)
        .then(() => res.json("Stub deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/edit/:id").post((req,res)=>{
    Stub.findByIdAndUpdate(req.params.id)
    .then(stub =>{
        stub.CompanyName = req.body.CompanyName;
        stub.EmployeeId = req.body.EmployeeId;
        stub.StartPeriod= req.body.StartPeriod;
        stub.EndPeriod = req.body.EndPeriod;
        stub.PayDate = req.body.PayDate;
        stub.Rate = req.body.Rate;
        stub.RegHours = req.body.RegHours;  
        stub.Amount = req.body.Amount;
        stub.Gross = req.body.Gross;
        stub.GrossAmountYTD = req.body.GrossAmountYTD;
        stub.HolidayHours = req.body.HolidayHours;
        stub.HolidayAmount = req.body.HolidayAmount;
        stub.HolidayAmountYTD = req.body.HolidayAmountYTD;
        stub.PTOHours = req.body.PTOHours;
        stub.PTOAmount = req.body.PTOAmount;
        stub.PTOAmountYTD = req.body.PTOAmountYTD;
        stub.OvertimeHours = req.body.OvertimeHours;
        stub.OvertimeAmount = req.body.OvertimeAmount;
        stub.OvertimeAmountYTD = req.body.OvertimeAmountYTD;
        stub.Medicare = req.body.Medicare;
        stub.MedicareYTD = req.body.MedicareYTD;
        stub.SocSec = req.body.SocSec;
        stub.SocSecYTD = req.body.SocSecYTD;
        stub.Federal = req.body.Federal;
        stub.FederalYTD = req.body.FederalYTD;
        stub.State = req.body.State;
        stub.StateYTD = req.body.StateYTD;
        stub.Local = req.body.Local;
        stub.LocalYTD = req.body.LocalYTD;
        stub.ORTransitTax = req.body.ORTransitTax;
        stub.ORTransitTaxYTD = req.body.ORTransitTaxYTD;
        stub.ORWBFTax = req.body.ORWBFTax;
        stub.ORWBFTaxYTD = req.body.ORTransitTaxYTD;
        stub.CompanyLogo = req.body.CompanyLogo;
    stub.save()
    .then(() => res.json('Stub updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

    module.exports = router;