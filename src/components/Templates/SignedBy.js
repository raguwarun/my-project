import React, {Component} from "react";
import Template from "./Initial";
import Statutory_Audit_Corporate from "./Audit_Assurance/Statutory_Audit_Corporate";
import Statutory_Audit_Non_Corporate from './Audit_Assurance/Statutory_Audit_Non_Corporate';
import Statutory_Audit_Branch from './Audit_Assurance/Statutory_Audit_Branch';
import Independent_Financial_Audit from './Audit_Assurance/Independent_Financial_Audit';
import Forensic_Audit from './Audit_Assurance/Forensic_Audit';
import Concurrent_Audit from './Audit_Assurance/Concurrent_Audit';
import Internal_Audit from './Audit_Assurance/Internal_Audit';
import Energy_Audit from './Audit_Assurance/Energy_Audit';
import Income_Receipt_and_Payment_Expenditure_Audit from './Audit_Assurance/Income_Receipt_and_Payment_Expenditure_Audit';
import Propriety_Audit from './Audit_Assurance/Propriety_Audit';
import Environment_Audit from './Audit_Assurance/Environment_Audit';
import Information_System_Audit from './Audit_Assurance/Information_System_Audit';
import Stock_Audit from './Audit_Assurance/Stock_Audit';
import Compliance_Audit from './Audit_Assurance/Compliance_Audit';
import Audit_of_Capital_Market_Intermediaries from './Audit_Assurance/Audit_of_Capital_Market_Intermediaries';
import Audit_of_Financial_Intermediaries from './Audit_Assurance/Audit_of_Financial_Intermediaries';
import Valuation_Reports from './Audit_Assurance/Valuation_Reports';
import Insolvency_Services from './Audit_Assurance/Insolvency_Services';
import Audit_of_various_Government_Schemes from './Audit_Assurance/Audit_of_various_Government_Schemes';
import Quarterly_Review_Reports from './Audit_Assurance/Quarterly_Review_Reports';
import Limited_Review_Reports from './Audit_Assurance/Limited_Review_Reports';
import Any_Other_Audit_not_covered_above from './Audit_Assurance/Any_Other_Audit_not_covered_above';
import Section_9A_of_IT_Act_1961 from './GST_Tax/Section_9A_of_IT_Act_1961';
import Tenth_proviso_to_section_10_23C_iv_v_vi_via_of_IT_Act_1961 from './GST_Tax/Tenth_proviso_to_section_10(23C)(iv)_(v)_(vi)_(via)_of_IT_Act_1961';
import Section_10A_5_of_IT_Act_1961 from './GST_Tax/Section_10A(5)_of_IT_Act_1961';
import Section_12A_1_b_of_IT_Act_1961 from './GST_Tax/Section_12A(1)(b)_of_IT_Act_1961';
import Section_13B_of_IT_Act_1961 from './GST_Tax/Section_13B_of_IT_Act_1961';
import Section_33AB_2_of_IT_Act_1961 from './GST_Tax/Section_33AB(2)_of_IT_Act_1961';
import Section_33ABA_2_of_IT_Act_1961_ from './GST_Tax/Section_33ABA(2)_of_IT_Act_1961_';
import Section_35_2AB_of_IT_Act_1961_ from './GST_Tax/Section_35(2AB)_of_IT_Act_1961_';
import Section_35D_4_andnbsp_of_IT_Act_1961_ from './GST_Tax/Section_35D(4)_andnbsp_of_IT_Act_1961_';
import Section_35E_6_of_IT_Act_1961 from './GST_Tax/Section_35E_(6)_of_IT_Act_1961';
import Section_44AB_a_of_IT_Act_1961 from './GST_Tax/Section_44AB(a)_of_IT_Act_1961';
import Section_44AB_b_of_IT_Act_1961 from './GST_Tax/Section_44AB(b)_of_IT_Act_1961';
import Section_44AB_c_of_IT_Act_1961 from './GST_Tax/Section_44AB(c)_of_IT_Act_1961';
import Section_44AB_d_of_IT_Act_1961 from './GST_Tax/Section_44AB(d)_of_IT_Act_1961';
import Section_44AB_e_of_IT_Act_1961 from './GST_Tax/Section_44AB(e)_of_IT_Act_1961';
import Section_44DA_2_of_IT_Act_1961_ from './GST_Tax/Section_44DA(2)_of_IT_Act_1961_';
import Section_50B_3_of_IT_Act_1961 from './GST_Tax/Section_50B(3)_of_IT_Act_1961';
import Section_80_IA_7_of_IT_Act_1961 from './GST_Tax/Section_80_IA_(7)_of_IT_Act_1961';
import Section_80_IB_of_IT_Act_1961 from './GST_Tax/Section_80_IB_of_IT_Act_1961';
import Section_80_IB_11C_of_IT_Act_1961 from './GST_Tax/Section_80_IB(11C)of_IT_Act_1961';
import Section_80_IC_of_IT_Act_1961 from './GST_Tax/Section_80_IC_of_IT_Act_1961';
import Section_80_IE_of_IT_Act_1961 from './GST_Tax/Section_80_IE_of_IT_Act_1961';
import Section_80JJAA_2_c_of_IT_Act_1961 from './GST_Tax/Section_80JJAA(2)(c)_of_IT_Act_1961';
import Section_80LA_3_i_of_IT_Act_1961 from './GST_Tax/Section_80LA(3)(i)_of_IT_Act_1961';
import Section_92E_of_IT_Act_1961 from './GST_Tax/Section_92E_of_IT_Act_1961';
import Section_115JB_4_of_IT_Act_1961 from './GST_Tax/Section_115JB(4)_of_IT_Act_1961';
import Section_115JC_3_of_IT_Act_1961 from './GST_Tax/Section_115JC(3)_of_IT_Act_1961';
import Section_115VW_ii_of_IT_Act_1961 from './GST_Tax/Section_115VW(ii)_of_IT_Act_1961';
import Section_142_2A_of_IT_Act_1961 from './GST_Tax/Section_142(2A)_of_IT_Act_1961';
import Other_Report_under_IT_Act_1961 from './GST_Tax/Other_Report_under_IT_Act_1961';
import Section_35_5_of_CGST_2017_Form_GST_9C from './GST_Tax/Section_35(5)_of_CGST_2017_Form_GST_9C';
import Section_66_1_of_CGST_2017_Form_ADT_04 from './GST_Tax/Section_66(1)_of_CGST_2017_Form_ADT_04';
import Other_Report_under_CGST_Act_2017_ from './GST_Tax/Other_Report_under_CGST_Act_2017_';
import VAT_Audit from './GST_Tax/VAT_Audit';
import Additional_Certification_by_Concurrent_Auditors_not_forming_part_of_concurrent_audit_assignment from './Certificates/Additional_Certification_by_Concurrent_Auditors_not_forming_part_of_concurrent_audit_assignment';
import Capital_Contribution_Certificate_net_worth_certificate from './Certificates/Capital_Contribution_Certificate_net_worth_certificate';
import Certificate_issued_by_Statutory_Auditors_of_Banks from './Certificates/Certificate_issued_by_Statutory_Auditors_of_Banks';
import Certificate_issued_by_Statutory_Auditors_of_Insurance_Companies from './Certificates/Certificate_issued_by_Statutory_Auditors_of_Insurance_Companies';
import Certificate_issued_for_KYC_purpose_to_banks_confirming_sole_proprietorship from './Certificates/Certificate_issued_for_KYC_purpose_to_banks_confirming_sole_proprietorship';
import Certificate_issued_under_RERA from './Certificates/Certificate_issued_under_RERA';
import Certificate_of_Liquid_Asset_Us_45_IB_of_RBI_Act_1945 from './Certificates/Certificate_of_Liquid_Asset_Us_45_IB_of_RBI_Act_1945';
import Certificate_of_physical_verification_of_securities_issued_by_Concurrent_Auditors_of_Treasury_Department_of_Banks from './Certificates/Certificate_of_physical_verification_of_securities_issued_by_Concurrent_Auditors_of_Treasury_Department_of_Banks';
import Certificate_of_Short_Sale_of_securities_issued_by_Concurrent_Auditors_of_Treasury_Department_of_Banks from './Certificates/Certificate_of_Short_Sale_of_securities_issued_by_Concurrent_Auditors_of_Treasury_Department_of_Banks';
import Certificate_Regarding_Sources_of_Income from './Certificates/Certificate_Regarding_Sources_of_Income';
import Certificates_for_Claiming_Deductions_and_Exemptions_under_various_Rules_and_Regulations from './Certificates/Certificates_for_Claiming_Deductions_and_Exemptions_under_various_Rules_and_Regulations';
import Certificates_for_Funds_Grants_utilisation_Charitable_Trust_Institution from './Certificates/Certificates_for_Funds_Grants_utilisation_Charitable_Trust_Institution';
import Certificates_for_Funds_Grants_utilisation_for_NGOs from './Certificates/Certificates_for_Funds_Grants_utilisation_for_NGOs';
import Certificates_for_Funds__Grants_utilisation_for_Statutory_Authority from './Certificates/Certificates_for_Funds__Grants_utilisation_for_Statutory_Authority';
import Certificates_for_Funds_Grants_utilisation_under_FERA_FEMA_Other_Laws from './Certificates/Certificates_for_Funds_Grants_utilisation_under_FERA_FEMA_Other_Laws';
import Certificates_in_form_15CB from './Certificates/Certificates_in_form_15CB';
import Certificates_in_relation_to_initial_Public_Issue_compliances_under_ICDR_and_LODR from './Certificates/Certificates_in_relation_to_initial_Public_Issue_compliances_under_ICDR_and_LODR';
import Certificates_issued_on_basis_of_Statutory_Records_under_Companies_Act_2013_andamp_applicable_provisions from './Certificates/Certificates_issued_on_basis_of_Statutory_Records_under_Companies_Act_2013_andamp_applicable_provisions';
import Certificates_issued_under_LLP_Act from './Certificates/Certificates_issued_under_LLP_Act';
import Certification_for_claim_of_refund_other_Indirect_Taxes from './Certificates/Certification_for_claim_of_refund_other_Indirect_Taxes';
import Certification_for_claim_of_refund_under_GST from './Certificates/Certification_for_claim_of_refund_under_GST';
import Certification_of_arms_length_price_Us_92_of_the_Income_Tax_Act_1961 from './Certificates/Certification_of_arms_length_price_Us_92_of_the_Income_Tax_Act_1961';
import Certification_of_Fair_Values_of_Shares_of_Company_for_Buy_Back from './Certificates/Certification_of_Fair_Values_of_Shares_of_Company_for_Buy_Back';
import Certification_of_Fair_Values_of_Shares_of_Company_for_the_scope_of_merger_de_merger from './Certificates/Certification_of_Fair_Values_of_Shares_of_Company_for_the_scope_of_merger_de_merger';
import Certification_of_Fair_Values_of_Shares_of_Company_for_transfer_of_shares_from_resident_to_non_resident from './Certificates/Certification_of_Fair_Values_of_Shares_of_Company_for_transfer_of_shares_from_resident_to_non_resident';
import Certification_of_Fair_Values_of_Shares_of_Company_for_Allotment_of_further_shares from './Certificates/Certification_of_Fair_Values_of_Shares_of_Company_for_Allotment_of_further_shares';
import Certification_under_Exchange_Control_legislation from './Certificates/Certification_under_Exchange_Control_legislation';
import Certification_under_the_Income_Tax_Laws_for_various_Deductions_etc from './Certificates/Certification_under_the_Income_Tax_Laws_for_various_Deductions_etc';
import Net_worth_Certificates_for_Bank_finances from './Certificates/Net_worth_Certificates_for_Bank_finances';
import Net_worth_Certificates_for_Bank_Guarantee from './Certificates/Net_worth_Certificates_for_Bank_Guarantee';
import Net_worth_Certificates_for_Student_Study_Loan from './Certificates/Net_worth_Certificates_for_Student_Study_Loan';
import Net_worth_Certificates_for_Visa_by_Foreign_Embassy from './Certificates/Net_worth_Certificates_for_Visa_by_Foreign_Embassy';
import RBI_Statutory_Auditor_Certificate_for_NBFCs from './Certificates/RBI_Statutory_Auditor_Certificate_for_NBFCs';
import Turnover_Certificate from './Certificates/Turnover_Certificate';
import Working_Capital_Certificate_Net_Working_Capital_Certificate from './Certificates/Working_Capital_Certificate_Net_Working_Capital_Certificate';
import Others from "./Certificates/OtherCertificate";
export default class SignedBy extends Component {
    constructor(props){
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onChangeAssignment = this.onChangeAssignment.bind(this);
        this.onChangesubAssign = this.onChangesubAssign.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            workAssignment : "",
            workSubAssign : [],
            ClientName : "Template Name",
            YearClose : "2020",
            FirmName : "",
            FRN:"",
            PartnerName : "",
            MemberNo : "",
            RepUdin : "",
            Place : "",
            SignDate : "",
            TemplateAddr : "Template"
        };
    }

    onChangeHandler(e) {this.setState({[e.target.id]:e.target.value})};
    onChangeAssignment(e){
        this.setState({workAssignment : e.target.value});
        switch(e.target.value){
            case "Audit_Assurance":
                this.setState({workSubAssign : ["select","Statutory_Audit_Corporate","Statutory_Audit_Non_Corporate","Statutory_Audit_Branch","Independent_Financial_Audit","Forensic_Audit","Concurrent_Audit","Internal_Audit","Energy_Audit","Income_Receipt_and_Payment_Expenditure_Audit","Propriety_Audit","Environment_Audit","Information_System_Audit","Stock_Audit","Compliance_Audit","Audit_of_Capital_Market_Intermediaries","Audit_of_Financial_Intermediaries","Valuation_Reports","Insolvency_Services","Audit_of_various_Government_Schemes","Quarterly_Review_Reports","Limited_Review_Reports","Any_Other_Audit_not_covered_above"]});
                break;
            case "GST_Tax":
                this.setState({workSubAssign : ["select","Section_9A_of_IT_Act_1961","Tenth_proviso_to_section_10(23C)(iv)_(v)_(vi)_(via)_of_IT_Act_1961","Section_10A(5)_of_IT_Act_1961","Section_12A(1)(b)_of_IT_Act_1961","Section_13B_of_IT_Act_1961","Section_33AB(2)_of_IT_Act_1961","Section_33ABA(2)_of_IT_Act_1961_","Section_35(2AB)_of_IT_Act_1961_","Section_35D(4)_andnbsp_of_IT_Act_1961_","Section_35E_(6)_of_IT_Act_1961","Section_44AB(a)_of_IT_Act_1961","Section_44AB(b)_of_IT_Act_1961","Section_44AB(c)_of_IT_Act_1961","Section_44AB(d)_of_IT_Act_1961","Section_44AB(e)_of_IT_Act_1961","Section_44DA(2)_of_IT_Act_1961_","Section_50B(3)_of_IT_Act_1961","Section_80_IA_(7)_of_IT_Act_1961","Section_80_IB_of_IT_Act_1961","Section_80_IB(11C)of_IT_Act_1961","Section_80_IC_of_IT_Act_1961","Section_80_IE_of_IT_Act_1961","Section_80JJAA(2)(c)_of_IT_Act_1961","Section_80LA(3)(i)_of_IT_Act_1961","Section_92E_of_IT_Act_1961","Section_115JB(4)_of_IT_Act_1961","Section_115JC(3)_of_IT_Act_1961","Section_115VW(ii)_of_IT_Act_1961","Section_142(2A)_of_IT_Act_1961","Other_Report_under_IT_Act_1961","Section_35(5)_of_CGST_2017_Form_GST_9C","Section_66(1)_of_CGST_2017_Form_ADT_04","Other_Report_under_CGST_Act_2017_","VAT_Audit"]});
                break;
            case "Certificates":
                this.setState({workSubAssign : ["select","Additional_Certification_by_Concurrent_Auditors_not_forming_part_of_concurrent_audit_assignment","Capital_Contribution_Certificate_net_worth_certificate","Certificate_issued_by_Statutory_Auditors_of_Banks","Certificate_issued_by_Statutory_Auditors_of_Insurance_Companies","Certificate_issued_for_KYC_purpose_to_banks_confirming_sole_proprietorship","Certificate_issued_under_RERA","Certificate_of_Liquid_Asset_Us_45_IB_of_RBI_Act_1945","Certificate_of_physical_verification_of_securities_issued_by_Concurrent_Auditors_of_Treasury_Department_of_Banks","Certificate_of_Short_Sale_of_securities_issued_by_Concurrent_Auditors_of_Treasury_Department_of_Banks","Certificate_Regarding_Sources_of_Income","Certificates_for_Claiming_Deductions_and_Exemptions_under_various_Rules_and_Regulations","Certificates_for_Funds_Grants_utilisation_Charitable_Trust_Institution","Certificates_for_Funds_Grants_utilisation_for_NGOs","Certificates_for_Funds__Grants_utilisation_for_Statutory_Authority","Certificates_for_Funds_Grants_utilisation_under_FERA_FEMA_Other_Laws","Certificates_in_form_15CB","Certificates_in_relation_to_initial_Public_Issue_compliances_under_ICDR_and_LODR","Certificates_issued_on_basis_of_Statutory_Records_under_Companies_Act_2013_andamp_applicable_provisions","Certificates_issued_under_LLP_Act","Certification_for_claim_of_refund_other_Indirect_Taxes","Certification_for_claim_of_refund_under_GST","Certification_of_arms_length_price_Us_92_of_the_Income_Tax_Act_1961","Certification_of_Fair_Values_of_Shares_of_Company_for_Buy_Back","Certification_of_Fair_Values_of_Shares_of_Company_for_the_scope_of_merger_de_merger","Certification_of_Fair_Values_of_Shares_of_Company_for_transfer_of_shares_from_resident_to_non_resident","Certification_of_Fair_Values_of_Shares_of_Company_for_Allotment_of_further_shares","Certification_under_Exchange_Control_legislation","Certification_under_the_Income_Tax_Laws_for_various_Deductions_etc","Net_worth_Certificates_for_Bank_finances","Net_worth_Certificates_for_Bank_Guarantee","Net_worth_Certificates_for_Student_Study_Loan","Net_worth_Certificates_for_Visa_by_Foreign_Embassy","RBI_Statutory_Auditor_Certificate_for_NBFCs","Turnover_Certificate","Working_Capital_Certificate_Net_Working_Capital_Certificate","Others"]});
                break;
            default :
                this.setState({workSubAssign : []});
        }
    };
    onChangesubAssign(e) {this.setState({TemplateAddr : e.target.value})};

    onSubmit(e){
        e.preventDefault();
        window.print();
    };

    components = {
        Template : Template,
        Statutory_Audit_Corporate:Statutory_Audit_Corporate,
        Statutory_Audit_Non_Corporate:Statutory_Audit_Non_Corporate,
        Statutory_Audit_Branch:Statutory_Audit_Branch,
        Independent_Financial_Audit:Independent_Financial_Audit,
        Forensic_Audit:Forensic_Audit,
        Concurrent_Audit:Concurrent_Audit,
        Internal_Audit:Internal_Audit,
        Energy_Audit:Energy_Audit,
        Income_Receipt_and_Payment_Expenditure_Audit:Income_Receipt_and_Payment_Expenditure_Audit,
        Propriety_Audit:Propriety_Audit,
        Environment_Audit:Environment_Audit,
        Information_System_Audit:Information_System_Audit,
        Stock_Audit:Stock_Audit,
        Compliance_Audit:Compliance_Audit,
        Audit_of_Capital_Market_Intermediaries:Audit_of_Capital_Market_Intermediaries,
        Audit_of_Financial_Intermediaries:Audit_of_Financial_Intermediaries,
        Valuation_Reports:Valuation_Reports,
        Insolvency_Services:Insolvency_Services,
        Audit_of_various_Government_Schemes:Audit_of_various_Government_Schemes,
        Quarterly_Review_Reports:Quarterly_Review_Reports,
        Limited_Review_Reports:Limited_Review_Reports,
        Any_Other_Audit_not_covered_above:Any_Other_Audit_not_covered_above,
        Section_9A_of_IT_Act_1961:Section_9A_of_IT_Act_1961,
        Tenth_proviso_to_section_10_23C_iv_v_vi_via_of_IT_Act_1961:Tenth_proviso_to_section_10_23C_iv_v_vi_via_of_IT_Act_1961,
        Section_10A_5_of_IT_Act_1961:Section_10A_5_of_IT_Act_1961,
        Section_12A_1_b_of_IT_Act_1961:Section_12A_1_b_of_IT_Act_1961,
        Section_13B_of_IT_Act_1961:Section_13B_of_IT_Act_1961,
        Section_33AB_2_of_IT_Act_1961:Section_33AB_2_of_IT_Act_1961,
        Section_33ABA_2_of_IT_Act_1961_:Section_33ABA_2_of_IT_Act_1961_,
        Section_35_2AB_of_IT_Act_1961_:Section_35_2AB_of_IT_Act_1961_,
        Section_35D_4_andnbsp_of_IT_Act_1961_:Section_35D_4_andnbsp_of_IT_Act_1961_,
        Section_35E_6_of_IT_Act_1961:Section_35E_6_of_IT_Act_1961,
        Section_44AB_a_of_IT_Act_1961:Section_44AB_a_of_IT_Act_1961,
        Section_44AB_b_of_IT_Act_1961:Section_44AB_b_of_IT_Act_1961,
        Section_44AB_c_of_IT_Act_1961:Section_44AB_c_of_IT_Act_1961,
        Section_44AB_d_of_IT_Act_1961:Section_44AB_d_of_IT_Act_1961,
        Section_44AB_e_of_IT_Act_1961:Section_44AB_e_of_IT_Act_1961,
        Section_44DA_2_of_IT_Act_1961_:Section_44DA_2_of_IT_Act_1961_,
        Section_50B_3_of_IT_Act_1961:Section_50B_3_of_IT_Act_1961,
        Section_80_IA_7_of_IT_Act_1961:Section_80_IA_7_of_IT_Act_1961,
        Section_80_IB_of_IT_Act_1961:Section_80_IB_of_IT_Act_1961,
        Section_80_IB_11C_of_IT_Act_1961:Section_80_IB_11C_of_IT_Act_1961,
        Section_80_IC_of_IT_Act_1961:Section_80_IC_of_IT_Act_1961,
        Section_80_IE_of_IT_Act_1961:Section_80_IE_of_IT_Act_1961,
        Section_80JJAA_2_c_of_IT_Act_1961:Section_80JJAA_2_c_of_IT_Act_1961,
        Section_80LA_3_i_of_IT_Act_1961:Section_80LA_3_i_of_IT_Act_1961,
        Section_92E_of_IT_Act_1961:Section_92E_of_IT_Act_1961,
        Section_115JB_4_of_IT_Act_1961:Section_115JB_4_of_IT_Act_1961,
        Section_115JC_3_of_IT_Act_1961:Section_115JC_3_of_IT_Act_1961,
        Section_115VW_ii_of_IT_Act_1961:Section_115VW_ii_of_IT_Act_1961,
        Section_142_2A_of_IT_Act_1961:Section_142_2A_of_IT_Act_1961,
        Other_Report_under_IT_Act_1961:Other_Report_under_IT_Act_1961,
        Section_35_5_of_CGST_2017_Form_GST_9C:Section_35_5_of_CGST_2017_Form_GST_9C,
        Section_66_1_of_CGST_2017_Form_ADT_04:Section_66_1_of_CGST_2017_Form_ADT_04,
        Other_Report_under_CGST_Act_2017_:Other_Report_under_CGST_Act_2017_,
        VAT_Audit:VAT_Audit,
        Additional_Certification_by_Concurrent_Auditors_not_forming_part_of_concurrent_audit_assignment:Additional_Certification_by_Concurrent_Auditors_not_forming_part_of_concurrent_audit_assignment,
        Capital_Contribution_Certificate_net_worth_certificate:Capital_Contribution_Certificate_net_worth_certificate,
        Certificate_issued_by_Statutory_Auditors_of_Banks:Certificate_issued_by_Statutory_Auditors_of_Banks,
        Certificate_issued_by_Statutory_Auditors_of_Insurance_Companies:Certificate_issued_by_Statutory_Auditors_of_Insurance_Companies,
        Certificate_issued_for_KYC_purpose_to_banks_confirming_sole_proprietorship:Certificate_issued_for_KYC_purpose_to_banks_confirming_sole_proprietorship,
        Certificate_issued_under_RERA:Certificate_issued_under_RERA,
        Certificate_of_Liquid_Asset_Us_45_IB_of_RBI_Act_1945:Certificate_of_Liquid_Asset_Us_45_IB_of_RBI_Act_1945,
        Certificate_of_physical_verification_of_securities_issued_by_Concurrent_Auditors_of_Treasury_Department_of_Banks:Certificate_of_physical_verification_of_securities_issued_by_Concurrent_Auditors_of_Treasury_Department_of_Banks,
        Certificate_of_Short_Sale_of_securities_issued_by_Concurrent_Auditors_of_Treasury_Department_of_Banks:Certificate_of_Short_Sale_of_securities_issued_by_Concurrent_Auditors_of_Treasury_Department_of_Banks,
        Certificate_Regarding_Sources_of_Income:Certificate_Regarding_Sources_of_Income,
        Certificates_for_Claiming_Deductions_and_Exemptions_under_various_Rules_and_Regulations:Certificates_for_Claiming_Deductions_and_Exemptions_under_various_Rules_and_Regulations,
        Certificates_for_Funds_Grants_utilisation_Charitable_Trust_Institution:Certificates_for_Funds_Grants_utilisation_Charitable_Trust_Institution,
        Certificates_for_Funds_Grants_utilisation_for_NGOs:Certificates_for_Funds_Grants_utilisation_for_NGOs,
        Certificates_for_Funds__Grants_utilisation_for_Statutory_Authority:Certificates_for_Funds__Grants_utilisation_for_Statutory_Authority,
        Certificates_for_Funds_Grants_utilisation_under_FERA_FEMA_Other_Laws:Certificates_for_Funds_Grants_utilisation_under_FERA_FEMA_Other_Laws,
        Certificates_in_form_15CB:Certificates_in_form_15CB,
        Certificates_in_relation_to_initial_Public_Issue_compliances_under_ICDR_and_LODR:Certificates_in_relation_to_initial_Public_Issue_compliances_under_ICDR_and_LODR,
        Certificates_issued_on_basis_of_Statutory_Records_under_Companies_Act_2013_andamp_applicable_provisions:Certificates_issued_on_basis_of_Statutory_Records_under_Companies_Act_2013_andamp_applicable_provisions,
        Certificates_issued_under_LLP_Act:Certificates_issued_under_LLP_Act,
        Certification_for_claim_of_refund_other_Indirect_Taxes:Certification_for_claim_of_refund_other_Indirect_Taxes,
        Certification_for_claim_of_refund_under_GST:Certification_for_claim_of_refund_under_GST,
        Certification_of_arms_length_price_Us_92_of_the_Income_Tax_Act_1961:Certification_of_arms_length_price_Us_92_of_the_Income_Tax_Act_1961,
        Certification_of_Fair_Values_of_Shares_of_Company_for_Buy_Back:Certification_of_Fair_Values_of_Shares_of_Company_for_Buy_Back,
        Certification_of_Fair_Values_of_Shares_of_Company_for_the_scope_of_merger_de_merger:Certification_of_Fair_Values_of_Shares_of_Company_for_the_scope_of_merger_de_merger,
        Certification_of_Fair_Values_of_Shares_of_Company_for_transfer_of_shares_from_resident_to_non_resident:Certification_of_Fair_Values_of_Shares_of_Company_for_transfer_of_shares_from_resident_to_non_resident,
        Certification_of_Fair_Values_of_Shares_of_Company_for_Allotment_of_further_shares:Certification_of_Fair_Values_of_Shares_of_Company_for_Allotment_of_further_shares,
        Certification_under_Exchange_Control_legislation:Certification_under_Exchange_Control_legislation,
        Certification_under_the_Income_Tax_Laws_for_various_Deductions_etc:Certification_under_the_Income_Tax_Laws_for_various_Deductions_etc,
        Net_worth_Certificates_for_Bank_finances:Net_worth_Certificates_for_Bank_finances,
        Net_worth_Certificates_for_Bank_Guarantee:Net_worth_Certificates_for_Bank_Guarantee,
        Net_worth_Certificates_for_Student_Study_Loan:Net_worth_Certificates_for_Student_Study_Loan,
        Net_worth_Certificates_for_Visa_by_Foreign_Embassy:Net_worth_Certificates_for_Visa_by_Foreign_Embassy,
        RBI_Statutory_Auditor_Certificate_for_NBFCs:RBI_Statutory_Auditor_Certificate_for_NBFCs,
        Turnover_Certificate:Turnover_Certificate,
        Working_Capital_Certificate_Net_Working_Capital_Certificate:Working_Capital_Certificate_Net_Working_Capital_Certificate,
        Others:Others,        
    }
    
    render(){
        const SignInfo = {ClientName: this.state.ClientName, YearClose : this.state.YearClose, FirmName : this.state.FirmName,FRN : this.state.FRN,PartnerName : this.state.PartnerName,MemberNo : this.state.MemberNo,RepUdin : this.state.RepUdin,Place : this.state.Place,SignDate : this.state.SignDate};
        //const componentName = "Statutory_Audit_Corporate";
        const componentName = this.state.TemplateAddr;
        const Tagname = this.components[componentName];
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Type of Work</label>
                        <select required className="form-control" selected={this.state.workAssignment} id="workAssignment" onChange={this.onChangeAssignment}>
                            <option defaultValue value="">Select</option>
                            <option value="Audit_Assurance">Audit & Assurance</option>
                            <option value="GST_Tax">GST & Tax Audit</option>
                            <option value="Certificates">Certificates</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Assignment</label>
                        <select required className="form-control" id="worksubAssign" onChange={this.onChangesubAssign}>
                            {this.state.workSubAssign.map(function(i) {return <option key={i} value={i}>{i}</option>;})}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Client Name</label>
                        <input  className="form-control" type="text" required value={this.state.ClientName} id="ClientName" onChange={this.onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label>Close Year</label>
                        <input type="number" required className="form-control" value={this.state.YearClose} id="YearClose" onChange={this.onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label className="">Firm Name</label>
                        <input required className="form-control" type="text" value={this.state.FirmName} id="FirmName" onChange={this.onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label className="">Firm Registration Number</label>
                        <input required className="form-control" type="text" value={this.state.FRN} id="FRN" onChange={this.onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label className="">Partner Name</label>
                        <input required className="form-control" type="text" value={this.state.PartnerName} id="PartnerName" onChange={this.onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label className="">Membership Number</label>
                        <input required className="form-control" type="text" value={this.state.MemberNo} id="MemberNo" onChange={this.onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label className="">Udin</label>
                        <input required className="form-control" type="text" value={this.state.RepUdin} id="RepUdin" onChange={this.onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label className="">Place</label>
                        <input required className="form-control" type="text" value={this.state.Place} id="Place" onChange={this.onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label className="">Sign Date</label>
                        <input required className="form-control" type="text" value={this.state.SignDate} id="SignDate" onChange={this.onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <input required className="form-control" type="submit" value="Print"/>
                    </div>
                </form>
                <Tagname signInfo={SignInfo} />
            </div>
        )
    }
}