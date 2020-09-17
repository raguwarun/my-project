import React, {Component} from 'react';
export default class Capital_Contribution_Certificate_net_worth_certificate extends Component{
constructor(props){
    super(props)
    this.fnAddRow = this.fnAddRow.bind(this);
    this.fnDeleteRow = this.fnDeleteRow.bind(this);
}

fnAddRow(e) {
    var tr = e.target.parentNode.parentNode.parentNode.nextElementSibling.firstChild.cloneNode(true);;
    e.target.parentNode.parentNode.parentNode.nextElementSibling.appendChild(tr);}

fnDeleteRow(e){
    var len = e.target.parentNode.parentNode.parentNode.nextElementSibling.children.length;
    if(len != 1){
        e.target.parentNode.parentNode.parentNode.nextElementSibling.lastChild.remove();
    } else {alert("Please remove entire table by selection")}}

render(){
return(
<div  className="text-justify" style={{pageBreakBefore:"always",fontSize:20 }} contentEditable="true" suppressContentEditableWarning={true}>
    <h5 className="text-center">NETWORTH CERTIFICATE</h5>
    <h6 className="text-center">(For Individual/Partnership Firms/Corporates)</h6>
    <p>This is to certify that the Networth of _________________________(TRADE NAME/FIRM NAME/COMPANY NAME) as on March 31st/September 30th, 20__ as per the  statement of computation of even date annexed to this report is Rs._______/- (in figures) [Rupees __________________________ only (in words)]. <br/> <br/> ___________________________ (TRADE NAME/FIRM NAME/COMPANY NAME) is also a member of ______________________________ (name(s) of the stock exchange, wherein the Networth requirement(s) is/are as given below:
    <table className="table table-bordered table-hover table-condensed" style={{pageBreakInside: "avoid"}}><thead><tr><th>S.No</th><th>Name of the stock Exchange</th><th>Networh Requirements (Rs.) <span className="btn" onClick={this.fnAddRow}>+</span> <span className="btn" onClick={this.fnDeleteRow}>-</span></th></tr></thead>
    <tbody><tr><td></td><td></td><td></td></tr></tbody></table></p>
    <p>___________________________ (TRADE NAME/FIRM NAME/COMPANY NAME), as required by SEBI under the multiple membership criteria, satisfies the Networth requirement of ISE and each of the Exchange(s) as stated above separately.<br/> We also certify that ___________________________ (TRADE NAME/FIRM NAME/COMPANY NAME) is not engaged in any fund-based activities or business other than that of securities. Existing fund based assets, if any, have been divested from the books of account and have not been included for the purpose of calculation of Networth.<br/>It is further certified that the computation of Networth based on my/our scrutiny of the books of accounts, records and documents is true and correct to the best of my/our knowledge and as per information provided to my/our satisfaction.</p>
    </div>
)}}
