using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Microsoft.Reporting.WebForms;

namespace DashboardDemo.ngDashboardDemo.Views
{
    public partial class Viewer : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    string reportId = Request.QueryString["id"].ToString();

                    string reportServerUrl = ConfigurationManager.AppSettings["ReportServerURL"];
                    string domain = ConfigurationManager.AppSettings["rsDomain"];
                    string userName = ConfigurationManager.AppSettings["rsUserName"];
                    string password = ConfigurationManager.AppSettings["rsPassword"];
                    string reportPath = ConfigurationManager.AppSettings["ReportPath"];

                    ReportViewer1.ServerReport.ReportServerUrl = new Uri(reportServerUrl);
                    ReportViewer1.ServerReport.ReportServerCredentials = new ReportCredentials(userName, password, domain);
                    ReportViewer1.ServerReport.ReportPath = string.Format(reportPath, reportId);
                    ReportViewer1.ProcessingMode = ProcessingMode.Remote;
                    ReportViewer1.ShowCredentialPrompts = false;
                    ReportViewer1.ServerReport.Refresh();
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}