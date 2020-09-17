import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Others extends Component {
    render() {
        return(
            <div className="text-justify" style={{pageBreakBefore:"always",fontSize:20 }} contentEditable="true" suppressContentEditableWarning={true}>
                <p className="text-center"><b>Certificate</b></p>
                <div >
                    <table  className="table table-borderless table-sm">
                        <tbody>
                        <tr><td className="text-left">To</td><td className="text-right">Date: {this.props.signInfo.SignDate},</td></tr>
                        <tr><td className="text-left">{this.props.signInfo.ClientName}</td><td className="text-right">Place: Hyderabad.</td></tr>
                        <tr><td className="text-left">Company Address</td><td className="text-right"></td></tr></tbody>
                    </table>
                </div><br />
                <div><b>Sub:</b> This is the certificate issued for the purpose of only ******* company/Branch/Bank</div><br /><br />
                <p>
                    This is a certificate issued in the public Interest of the Humans. Please do not entertain this further
                </p>
                <address>
                    For {this.props.signInfo.FirmName} ,<br/>
                    Chartered Accountants,<br />
                    Firm Registration Number:{this.props.signInfo.FRN}.<br /><br /><br/>
                    {this.props.signInfo.PartnerName},<br />
                    Partner.<br />
                    Membership No: {this.props.signInfo.MemberNo}.<br/>
                    Udin: {this.props.signInfo.RepUdin},<br/><br/>
                    Place: {this.props.signInfo.Place},<br/>
                    Date: {this.props.signInfo.SignDate}.
                </address>
            </div>
        )
    }
}