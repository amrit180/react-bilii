import React, { useEffect } from 'react'
import tech from '../Image/techdata.jpg'
import './Database.css'
import List from '../components/List'
import { FaRegDotCircle, FaDotCircle } from 'react-icons/fa'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Database() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])



    return (
        <div>
            <div className="Dimage">
                <img src={tech} alt="tech" className="techimg" />
            </div>
            <div className="techcontainer">
                <h1 className="techh1" data-aos-duration="1000" data-aos="fade-up">TECHNOLOGY DATABASE</h1>
                <div className="techbullet">
                    <h4 data-aos-duration="800" data-aos="fade-up">An absolute must for those engaged in the field Technology to grow.</h4>
                    <h4 data-aos-duration="800" data-aos="fade-up">A good Technology mailing database provides you with an ocean of opportunities to grow your business.</h4>
                    <h4 data-aos-duration="800" data-aos="fade-up">A Technology database is extremely dynamic and difficult to keep updated apart from being very time consuming.</h4>
                    <h4 data-aos-duration="800" data-aos="fade-up">Venalicium digital can take that load from your shoulders and provide you with comprehensive lists at a moments notice.</h4>
                    <h4 data-aos-duration="800" data-aos="fade-up">Technology database lists are complex because of the varying use and requirement. One size fits all rarely works</h4>
                    <h4 data-aos-duration="800" data-aos="fade-up">Venalicium digital can make a list to suit your company’s specific requirements</h4>
                    <h4 data-aos-duration="800" data-aos="fade-up">Venalicium digital has the skill set and uses the best in class tools to create a dynamic, effective and ever fresh database.</h4>
                    <h4 data-aos-duration="800" data-aos="fade-up">Venalicium digital provides Technology Databases that are latest, accurate, updated with cured and qualified information. All of this in super quick time, ensuring maximum returns on your campaigns.</h4>
                </div>

                <div className="techlist">
                    <div>
                        <List details="Adobe Experience Manager Users List" />
                        <List details="Adobe FrameMaker Users List" />
                        <List details="Altair Users List" />
                        <List details="Amazon RDS Users List" />
                        <List details="AS 400 Users List" />
                        <List details="Atlassian Users List" />
                        <List details="Axway Users List" />
                        <List details="Adobe CQ5 (CMS) Users List" />
                        <List details="Airwatch Users List" />
                        <List details="Amazon Web Services Users List" />
                        <List details="AS/400 Users List" />
                        <List details="ATG Users List" />
                        <List details="Agresso ERP Users List" />
                        <List details="Amdocs CRM Users List" />
                        <List details="AutoDesk Users List" />
                        <List details="AutoDesk AutoCAD Users List" />
                        <List details="Avaya Users List" />
                        <List details="Avaya Aura Users List" />
                        <List details="Asigra Users List" />
                        <List details="ACT CRM Users List" />
                        <List details="BEA ERP Users List" />
                        <List details="BEA WebLogic Users List" />
                        <List details="BMC ERP Users List" />
                        <List details="BMC Remedy Users List" />
                        <List details="Baan Users List" />
                        <List details="Big Data Users List" />
                        <List details="Blackberry Users List" />
                        <List details="Barco Users List" />
                        <List details="CA Nimsoft Users Email List" />
                        <List details="Citrix XenDesktop Users List" />
                        <List details="Cloud Service Providers Email List" />
                        <List details="Cloudera Users List" />
                        <List details="Commvault Users List" />
                        <List details="CommVault Simpana Users List" />
                        <List details="Cisco Network Users List" />
                        <List details="Citrix Network Users List" />
                        <List details="Cognos ERP List" />
                        <List details="Deltek ERP Users List" />
                        <List details="Deltek Costpoint Users List" />
                        <List details="Dell AppAssure Users List" />
                        <List details="EMC Avamar Users List" />
                        <List details="EMC Documentum ERP Users List" />
                        <List details="EMC Network Users List" />
                        <List details="Epicor ERP Users List" />
                        <List details="Epicor Retail Users List" />
                        <List details="ESRI Users List" />
                        <List details="Enterprise Project Management (EPM) ERP List" />
                        <List details="Five9 Users List" />
                        <List details="Filenet Users List" />
                        <List details="FireEye Users List" />
                        <List details="Filemaker Database Users List" />
                        <List details="Genesys Users List" />
                        <List details="Gold Mine CRM Users List" />
                        <List details="Hadoop Users List" />
                        <List details="Hummingbird ERP Users List" />
                        <List details="Hyperion ERP Users List" />
                        <List details="HP Hardware Users List" />
                        <List details="HP 3Com Network Users List" />
                        <List details="HP 3PAR SAN Users List" />
                        <List details="HP LoadRunner Users List" />
                        <List details="HP UX Operating Systems Users List" />
                        <List details="iCims Users List" />
                        <List details="Intalio ERP Users List" />
                        <List details="ISVs Providers Email List" />
                        <List details="i2 Master Data Management Users List" />
                        <List details="IBM Users Email and Mailing List" />
                        <List details="IBM ECM Users List" />
                        <List details="IBM Informix Database Users List" />
                        <List details="IBM ERP Users List" />
                        <List details="IBM Notes Users List" />
                        <List details="IBM Tivoli ERP Users List" />
                        <List details="IBM Maximo ERP Users List" />
                        <List details="IBM Websphere Users List" />
                        <List details="IBM z/Operating System Users List" />
                        <List details="IBM DB2 Database Software Users List" />
                        <List details="IBM Mainframe Users List" />
                        <List details="IBM ProtecTIER Users List" />
                        <List details="Infor Baan ERP Services Users List" />
                        <List details="Infor ERP Software Users List" />
                        <List details="Infor Mapics ERP Users List" />
                        <List details="Informatica ERP Users List" />
                        <List details="Isilon Users List" />
                        <List details="IBM Server Users List" />
                        <List details="Intacct Users List" />
                        <List details="IBM Content Manager Users List" />
                        <List details="Jobscience Users List" />
                        <List details="JD Edwards ERP Users List" />
                        <List details="Java Users List" />
                        <List details="Juniper Networks Users List" />
                    </div>
                    <div>


                        <List details="Kenexa Users List" />
                        <List details="Kofax Users List" />
                        <List details="Kronos Users List" />
                        <List details="Lawson ERP Users List" />
                        <List details="LeadDesk Users List" />
                        <List details="MobileIron Users List" />
                        <List details="Map Info Mapping Software Users List" />
                        <List details="MacAfee Network Security Software Users List" />
                        <List details="Micro Strategy Users List" />
                        <List details="MS ASP Programming Language Users List" />
                        <List details="MS Dynamics ERP Software Users List" />
                        <List details="MS Dynamics AX ERP Users List" />
                        <List details="MS Dynamics CRM Users List" />
                        <List details="MS Dynamics GP ERP List" />
                        <List details="MS Dynamics NAV ERP Users List" />
                        <List details="Microsoft Exchange Server CRM Users List" />
                        <List details="MS Exchange Server Users Email and Mailing List" />
                        <List details="MS System Center ERP Users List" />
                        <List details="MS SharePoint ERP Users List" />
                        <List details="MS SQL Server Database Users List" />
                        <List details="My SQL Server Software Users List" />
                        <List details="MS Office ERP Software Users List" />
                        <List details="Microsoft Live Project Server ERP Software Users List" />
                        <List details="Mozy Users List" />
                        <List details="Magento Users List" />
                        <List details="MongoDB Users List" />
                        <List details="Ms Azure Users List" />
                        <List details="Ms Lync Users List" />
                        <List details="NetApp Storage System Users List" />
                        <List details="Netezza Users List" />
                        <List details="Netscout Users List" />
                        <List details="Niksun Users List" />
                        <List details="Net App Server Database storage Software Users List" />
                        <List details="NetSuite Web Based ERP Business Software Users List" />
                        <List details="Nortel Network Software Users List" />
                        <List details="Novell Operating System Software Users List" />
                        <List details="Open Text ERP (Enterprise Content Management) Software Users List" />
                        <List details="OSIsoft PI Users List" />
                        <List details="Oracle Fusion Middleware Users List" />
                        <List details="Polycom Users List" />
                        <List details="PL/SQL Users List" />
                        <List details="PeopleSoft Users List" />
                        <List details="QuickBooks Users List" />
                        <List details="Rackspace Users List" />
                        <List details="Sage ERP Users List" />
                        <List details="Sage Accpac ERP Users List" />
                        <List details="Sage ACT CRM Users List" />
                        <List details="Sage MAS 200 ERP Users List" />
                        <List details="Sage MAS 90 ERP Users List" />
                        <List details="Sage Peachtree ERP Users List" />
                        <List details="Sage SalesLogix CRM Users List" />
                        <List details="Sage Timberline ERP Users List" />
                        <List details="Salesforce CRM Users List" />
                        <List details="SAP ERP Users List" />
                        <List details="SAP Business Objects ERP Users" />
                        <List details="SAP Business One ERP Users List" />
                        <List details="SAP Crystal Reports ERP Users List" />
                        <List details="SAP Netweaver ERP Users List" />
                        <List details="SAP R3 ERP Users List" />
                        <List details="SAP Variant Configuration Users List" />
                        <List details="SAS ERP Users List" />
                        <List details="Siebel CRM Users List" />
                        <List details="Sitecore Users List" />
                        <List details="Siemens PLM ERP Users List" />
                        <List details="Sterling Commerce ERP Users List" />
                        <List details="SugarCRM Users List" />
                        <List details="Sun Microsystems Users List" />
                        <List details="Sun SeeBeyond ERP Users List" />
                        <List details="Sybase ERP Users List" />
                        <List details="Symantec Network Users List" />
                        <List details="Syspro ERP Users List" />
                        <List details="Symantec NetBackup Users List" />
                        <List details="Softlayer Users List" />
                        <List details="Splunk Users List" />
                        <List details="SolidWorks Users List" />
                        <List details="Sonicwall Users List" />
                        <List details="Sage CRM Users List" />
                        <List details="Tableau Users List" />
                        <List details="Terremark Users List" />
                        <List details="Teradata ERP Users List" />
                        <List details="Tibco ERP Users List" />
                        <List details="VMware Hardware Users List" />
                        <List details="VMware ESX Users List" />
                        <List details="Verint Users List" />
                        <List details="Vantage Users List" />
                        <List details="Webex CRM Users List" />
                        <List details="WebMethods ERP Users List" />
                        <List details="Websense Users List" />
                    </div>
                </div>
                <div className="offer">
                    <h2>What is on offer:</h2>
                    <ul className="ul">
                        <li className="li"> <FaDotCircle color="#fff" className="iconssd" /><h4>Sourced from multiple sources, accurate, complete and fast.</h4></li>
                        <li className="li"> <FaDotCircle color="#fff" className="iconssd" /><h4>Keeps the mailing list updated in real time.</h4></li>
                        <li className="li"> <FaDotCircle color="#fff" className="iconssd" /><h4>Tailor made for specific requirements.</h4></li>
                        <li className="li"> <FaDotCircle color="#fff" className="iconssd" /><h4>Express delivery to target audience</h4></li>
                        <li className="li"> <FaDotCircle color="#fff" className="iconssd" /><h4>Guarantees success of any mailing campaign on</h4></li>
                        <ul className="ul pli">
                            <li className="li"> <FaRegDotCircle color="#fff" className="iconssd" /><h4>On delivery</h4></li>
                            <li className="li"> <FaRegDotCircle color="#fff" className="iconssd" /><h4>Open rates</h4></li>
                            <li className="li"> <FaRegDotCircle color="#fff" className="iconssd" /><h4>Lower bounce rates</h4></li>
                        </ul>
                        <li className="li"> <FaDotCircle color="#fff" className="iconssd" /><h4>Reduced cost and improved ROI.</h4></li>
                    </ul>
                </div>
                <div className="offerp">
                    <p>
                        Obtain an email list that ensures deliverability, relevance and highest accuracy. Find out how Venalicium digital can help you in earning maximum email ROI, connect with our experts at 630-326-8036 for a free consultation or email us at <a href="https://venaliciumdigital.com">info@venaliciumdigital.com</a></p>
                </div>
            </div>

        </div>
    )
}
