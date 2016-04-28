using Microsoft.Reporting.WebForms;
using System.Net;
using System.Security.Principal;

namespace DashboardDemo.ngDashboardDemo.Views
{
    internal class ReportCredentials : IReportServerCredentials
    {
        private string Domain;
        private string Password;
        private string UserName;

        public ReportCredentials(string userName, string password, string domain)
        {
            UserName = userName;
            Password = password;
            Domain = domain;
        }
        public WindowsIdentity ImpersonationUser
        {
            get
            {
                return null;        
            }
        }
        public ICredentials NetworkCredentials
        {
            get
            {
                return new NetworkCredential(UserName, Password, Domain);
            }
        }

        public bool GetFormsCredentials (out Cookie authCookie, out string userName, out string password, out string authority)
        {
            authCookie = null;
            userName = UserName;
            password = Password;
            authority = null;
            return true;
        }


    }
}