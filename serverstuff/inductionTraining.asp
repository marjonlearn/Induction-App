<%@LANGUAGE="JAVASCRIPT" CODEPAGE="65001"%>
<% Response.ContentType = "application/javascript" %>
<script language="javascript" runat="server" src='json2.js'></script>
<script language="javascript" runat="server">

var sourceObj = [{ "session" : "IT Basics", "date" : "01/08/13"},{ "session" : "Harvard Referencing", "date" : "11/09/13" }];
var jsonstr = JSON.stringify(sourceObj);
Response.Write("jsoncallback(" + jsonstr + ");");

</script>
