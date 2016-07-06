<html xmlns="http://www.w3.org/1999/xhtml" >
    <head>
        <title>登录高国豪主页</title>
        <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                    <meta name="description" content="">
                        <meta name="author" content="">
        <script>
            function r()
            {
                
                var username=document.getElementById("username");
                
                var pass=document.getElementById("password");
                if(username.value=="")
                {
                    alert("请输入用户名");
                    username.focus();
                    return;
                }else if(pass.value=="")
                {
                    alert("请输入密码");
                    return;
                }else if(username.value == "gaoguohao" && pass.value == "123456"){
                    window.location.href="userHome.html";
                    return;
                }
                alert("请输入正确的用户名或密码!");
                return true;
            }
        </script>
    </head>
    <body>
        <form>
            <table  width="350" bgcolor="#ccffcc" style="border-color" border="1" align=center>
                <tr align=center>
                    <td>用户名</td><td><input type="text" name="username"  id="username"></td>
                </tr>
                <tr align=center><td>密 码</td><td><input type="password" name="password" id="password"></td></tr>
                <tr align=center><td colspan="2"><input type="button" value="登 录" onclick="r();"/>  </td></tr>
                
            </table>
        </form>
    </body>
</html>
