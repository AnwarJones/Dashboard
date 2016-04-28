<%@ Page Language="VB" AutoEventWireup="false" CodeFile="rptload.aspx.vb" Inherits="rptload" %>
<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=12.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91"
    Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>
     
<html>
<head runat="server">
    <title></title>
    
    <style type="text/css">
 
html, body, form
{
    width: 100%;
    margin:0;
    padding:0;
    <%--height: 100%;--%>
}
 
body
{
    <%--height: 100%;--%>
    width: 100%
}
 
table#ReportViewer1
{
    display:table !important;
    width: 100%;
    <%--height: 100%;--%>
}
iframe
        {
            width:98%;
            <%--height: 100%;--%>
        }
         html#html, body#body, form#form1, div#content, center#center
  { 
   border: 0px solid black;
   padding: 0px;
   margin: 0px;
   <%--height: 100%;--%>
  }

</style>
</head>
<body>
    <form id="formRptLoad" runat="server">
    <asp:ScriptManager ID="ScriptManagerRptLoad" runat="server"></asp:ScriptManager>    
    <div style="width:100%; height:99%;">
    <rsweb:ReportViewer ID="ReportViewer1" runat="server" Width="100%" Height="98%" Style="display: table !important; margin: 0px; overflow: auto !important; background-color: White; width: 100%;">

    </rsweb:ReportViewer>

    
    </div>
    </form>
</body>
</html>
