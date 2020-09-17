import React, {Component} from "react";

export default class AddressLine extends Component {
    constructor(props){
        super(props);
    }

// DRY Principle is useful but it should pass through states i.e., each file to here

    render() {
        return(
            <address>
                    For {this.props.signInfo.FirmName} ,<br/>
                    Chartered Accountants,<br />
                    Firm Registration Number:{this.props.signInfo.FRN}.<br /><br />
                    {this.props.signInfo.PartnerName},<br />
                    Partner.<br />
                    Membership No: {this.props.signInfo.MemberNo}.<br/><br/>
                    Udin: {this.props.signInfo.RepUdin},<br/>
                    Place: {this.props.signInfo.Place},<br/>
                    Date: {this.props.signInfo.SignDate}.
            </address>
        )
    }
}