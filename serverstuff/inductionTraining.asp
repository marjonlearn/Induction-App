<%@LANGUAGE="JAVASCRIPT" CODEPAGE="65001"%>
<% Response.ContentType = "application/javascript" %>
<script language="javascript" runat="server" src='json2.js'></script>
<script language="javascript" runat="server">

var sourceObj = { "testkey" : "test value", "otherkey" : 5 };
var jsonstr = JSON.stringify(sourceObj);
Response.Write("jsoncallback(" + jsonstr + ");");

</script>
