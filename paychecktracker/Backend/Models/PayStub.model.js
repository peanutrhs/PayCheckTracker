const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let StubSchema = new Schema({
  CompanyName: {type: String},
  EmployeeId: {
    type: String,
    trim: true,
    unique: true,
    minlength: 3,
  },
  StartPeriod: {type: Date},
  EndPeriod: {type: Date},
  PayDate: {type: Date},
  Rate: {type:Number},
  RegHours:{type:Number,default:0.00},
  Amount: {type:Number,default:0.00},
  GrossAmountYTD:{type:Number,default:0.00},
  HolidayHours:{type:Number,default: 0.00},
  HolidayAmount:{type:Number,default:0.00},
  HolidayAmountYTD: {type:Number,default:0.00},
  PTOHours:{type:Number,default:0.00},
  PTOAmount: {type:Number,default:0.00},
  PTOAmountYTD: {type:Number,default:0.00},
  OvertimeHours: {type:Number,default:0.00},
  OvertimeAmount:{type:Number},
  OvertimeAmountYTD: {type:Number},
  FICA: {type:Number,default:0.00},
  FICAYTD: {type:Number,default:0.00},
  Medicare: {type:Number,default:0.00},
  MedicareYTD: {type:Number,default: 0.00},
  SocSec: {type:Number,default:0.00},
  SocSecYTD: {type:Number,default:0.00},
  Federal: {type:Number,default:0.00},
  FederalYTD: {type:Number,default:0.00},
  State: {type:Number,default:0.00},
  StateYTD: {type:Number,default:0.00},
  Local: {type:Number,default:0.00},
  LocalYTD: {type:Number,default:0.00},
  ORTransitTax: {type:Number,default:0.00},
  ORTransitTaxYTD: {type:Number,default:0.00},
  ORWBFTax: {type:Number,default:0.00},
  ORWBFTaxYTD: {type:Number,default:0.00},
  CompanyLogo: {type:String},
  
},{
  timestamps: true,
});

const Stub = mongoose.model("Stub", StubSchema);
module.exports = Stub;
