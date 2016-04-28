Imports System.Data
Imports System.Data.SqlClient
Imports System.Net
Imports Microsoft.Reporting.WebForms
Imports System.Web.Security
Imports System.Security.Principal
Imports System.Web.UI.ScriptManager

Partial Class rptload
    Inherits System.Web.UI.Page
    Dim strclientid, strclienttype, paramValue, groupnum, cid, dms, corpdb As String
    Dim strParam1, strParam2, strParam3, strParam4 As String
    Dim cidarray
    Public Property myStr() As String
        Get
            myStr = CStr(Request.QueryString("ReportName"))
        End Get
        Set(ByVal Value As String)
            myStr = Value
        End Set
    End Property

    Sub Page_Load(sender As Object, e As System.EventArgs) Handles Me.Load
        'strclientid = Request.Cookies("clientid").Value
        'groupnum = Request.Cookies("groupnum").Value
        'dms = Nothing
        'dms = Request.Cookies("dms").Value
        'userlabel.text = Request.Cookies("name").Value & " | Control Panel"
        'storelabel.Text = Request.Cookies("storename").Value
        'If Request.Cookies("corpuser").Value = "Yes" Then
        '    cid = Request.Cookies("corpdb").Value
        'Else
        '    cid = Request.Cookies("useraccess").Value
        'End If


        If Page.IsPostBack = False Then
            'stop browsers from caching?
            'Response.Cache.SetCacheability(System.Web.HttpCacheability.NoCache)
            'Response.Cache.SetNoStore()

            'strclientid = Request.Cookies("clientid").Value
            'groupnum = Request.Cookies("groupnum").Value
            dms = "arkona"
            'If Request.Cookies("corpuser").Value = "Yes" Then
            '    dms = "arkona"
            'ElseIf Request.Cookies("dms").Value = "DT" Then
            '    dms = "arkona"
            'Else
            '    dms = Request.Cookies("dms").Value
            'End If

            'userlabel.text = Request.Cookies("name").Value & " | Control Panel"
            'storelabel.Text = Request.Cookies("storename").Value
            'If Request.Cookies("corpuser").Value = "Yes" Then
            '    'cid = Request.Cookies("corpdb").Value
            '    cid = Request.Cookies("useraccess").Value
            'Else
            '    cid = Request.Cookies("useraccess").Value
            'End If
            cid = "6152617337"
            Dim zStart, zEnd, zUserDept, zServername, zMonth, zYear As String
            'If Request.Cookies("zTimeStart") Is Nothing Then
            '    zStart = Date.Now.Month & "-" & "1-" & Date.Now.Year
            'Else
            '    zStart = Request.Cookies("zTimeStart").Value
            'End If
            'If Request.Cookies("zTimeEnd") Is Nothing Then
            '    Dim original As DateTime = DateTime.Now ' The date you want to get the last day of the month for
            '    Dim lastOfMonth As DateTime = original.Date.AddDays(-(original.Day - 1)).AddMonths(1).AddDays(-1)
            '    'zEnd = DateTime.Today.AddMonths(1).AddDays(-1)
            '    zEnd = lastOfMonth
            'Else
            '    zEnd = Request.Cookies("zTimeEnd").Value
            'End If

            'zUserDept = Request.Cookies("department").Value
            'zServername = Request.Cookies("servername").Value
            zServername = "da-sql03"
            If Request.Cookies("zmonth") Is Nothing Then
                zMonth = Date.Now.Month
            Else
                zMonth = Request.Cookies("zmonth").Value
            End If
            If Request.Cookies("zyear") Is Nothing Then
                zYear = Date.Now.Year
            Else
                zYear = Request.Cookies("zyear").Value
            End If
            If Request.Cookies("corpdb") Is Nothing Then
                corpdb = Nothing
            Else
                corpdb = Request.Cookies("corpdb").Value
            End If


            Dim rptname As String = Nothing
            'rptname = Nothing
            If Request.Cookies("rptname") Is Nothing Then
                rptname = myStr
            Else
                rptname = Request.Cookies("rptname").Value
            End If

            'ReportViewer1.ServerReport.Refresh()
            'ReportViewer1.Reset()
            ReportViewer1.ProcessingMode = ProcessingMode.Remote
            ReportViewer1.AsyncRendering = True
            ReportViewer1.ServerReport.ReportServerUrl = New System.Uri("http://ids-web01/RS08")
            ReportViewer1.ServerReport.ReportPath = "/" & dms & "/reports/" & rptname
            ReportViewer1.ShowCredentialPrompts = False
            ReportViewer1.ServerReport.ReportServerCredentials = New MyReportServerCredentialsRptLoad
            'cid is the string value: Store1, Store2, Store3 etc.
            Dim ParamValues As String() = New String() {}
            'split the CID cookie based on comma
            Dim aryCID() As String = cid.Split(",")
            'declare new param list
            Dim paramList As New List(Of ReportParameter)()
            'set useraccess param name
            Dim param As New ReportParameter("CID")
            Dim values As String() = New String() {}
            ' Add a range of elements from an array to the end of the StringCollection.
            param.Values.AddRange(aryCID)
            ' Add the parameter to the list of ReportParameters
            paramList.Add(param)
            'set new report params
            'Dim Parzstart As New ReportParameter()
            'Parzstart.Values.Clear()
            'Parzstart.Name = "zstart"
            'Parzstart.Values.Add(zStart)
            'paramList.Add(Parzstart)
            'Dim ParzEnd As New ReportParameter()
            'ParzEnd.Values.Clear()
            'ParzEnd.Name = "zend"
            'ParzEnd.Values.Add(zEnd)
            'paramList.Add(ParzEnd)
            If dms Like "adp" Then
                Dim ParServername As New ReportParameter()
                ParServername.Values.Clear()
                ParServername.Name = "servername"
                ParServername.Values.Add(zServername)
                paramList.Add(ParServername)
            End If

            'Dim ParzUserDept As New ReportParameter()
            'ParzUserDept.Values.Clear()
            'ParzUserDept.Name = "zuserdept"
            'ParzUserDept.Values.Add(zUserDept)
            'paramList.Add(ParzUserDept)
            'Dim ParzMonth As New ReportParameter()
            'ParzMonth.Values.Clear()
            'ParzMonth.Name = "zmonth"
            'ParzMonth.Values.Add(zMonth)
            'paramList.Add(ParzMonth)
            'Dim ParzYear As New ReportParameter()
            'ParzYear.Values.Clear()
            'ParzYear.Name = "zyear"
            'ParzYear.Values.Add(zYear)
            'paramList.Add(ParzYear)

            'If Request.Cookies("corpuser").Value = "Yes" Then
            '    ' send dbname param to reportviewer1
            '    Dim corpdbRP As New ReportParameter()
            '    corpdbRP.Values.Clear()
            '    corpdbRP.Name = "corpdb"
            '    corpdbRP.Values.Add(corpdb)
            '    paramList.Add(corpdbRP)
            'End If
            ''Set the report parameters for the report
            ReportViewer1.ServerReport.SetParameters(paramList)

        End If

    End Sub


End Class

Public Class MyReportServerCredentialsRptLoad
    Implements IReportServerCredentials


    Public ReadOnly Property ImpersonationUser() As WindowsIdentity _
            Implements IReportServerCredentials.ImpersonationUser
        Get

            'Use the default windows user.  Credentials will be
            'provided by the NetworkCredentials property.
            Return Nothing

        End Get
    End Property

    Public ReadOnly Property NetworkCredentials() As ICredentials _
            Implements IReportServerCredentials.NetworkCredentials
        Get

            'Read the user information from the web.config file.  
            'By reading the information on demand instead of storing 
            'it, the credentials will not be stored in session, 
            'reducing the vulnerable surface area to the web.config 
            'file, which can be secured with an ACL.

            'User name
            Dim userName As String = _
                ConfigurationManager.AppSettings("MyReportViewerUser")

            If (String.IsNullOrEmpty(userName)) Then
                Throw New Exception("Missing user name from web.config file")
            End If

            'Password
            Dim password As String = _
                ConfigurationManager.AppSettings("MyReportViewerPassword")

            If (String.IsNullOrEmpty(password)) Then
                Throw New Exception("Missing password from web.config file")
            End If

            'Domain
            Dim domain As String = _
                ConfigurationManager.AppSettings("MyReportViewerDomain")

            If (String.IsNullOrEmpty(domain)) Then
                Throw New Exception("Missing domain from web.config file")
            End If

            Return New NetworkCredential(userName, password, domain)

        End Get
    End Property

    Public Function GetFormsCredentials(ByRef authCookie As Cookie, _
                                   ByRef userName As String, _
                                   ByRef password As String, _
                                   ByRef authority As String) _
                                   As Boolean _
       Implements IReportServerCredentials.GetFormsCredentials

        authCookie = Nothing
        userName = Nothing
        password = Nothing
        authority = Nothing

        'Not using form credentials
        Return False

    End Function
End Class