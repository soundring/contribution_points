var appKey    = "603c8218a92e15034623e7bfefd6c5c30ade040806ecadfb5ec5725ee168ac8e";
var clientKey = "3306a72777dfb56da539548a9c897f42f8e053409d03dc0a0e085a4061d2e88f";

var ncmb = new NCMB(appKey, clientKey);

///// Called when app launch
$(function() {
  $("#LoginBtn").click(onLoginBtn);
  $("#RegisterBtn").click(onRegisterBtn);
  $("#YesBtn_logout").click(onLogoutBtn);
});

//----------------------------------USER MANAGEMENT-------------------------------------//
var currentLoginUser; //現在ログイン中ユーザー

function onRegisterBtn()
{
    //入力フォームからusername, password変数にセット
    var username = $("#reg_username").val();
    var password = $("#reg_password").val();
    
    var user = new ncmb.User();
    user.set("userName", username)
        .set("password", password);
    
    // 任意フィールドに値を追加 
    user.signUpByAccount()
        .then(function(user) {
            alert("新規登録に成功");
            currentLoginUser = ncmb.User.getCurrentUser();
            $.mobile.changePage('#DetailPage');
        })
        .catch(function(error) {
            alert("新規登録に失敗！次のエラー発生：" + error);
        });
}

function onLoginBtn()
{
    var username = $("#login_username").val();
    var password = $("#login_password").val();
    // ユーザー名とパスワードでログイン
    ncmb.User.login(username, password)
        .then(function(user) {
            alert("ログイン成功");
            currentLoginUser = ncmb.User.getCurrentUser();
            $.mobile.changePage('#DetailPage');
        })
        .catch(function(error) {
            alert("ログイン失敗！次のエラー発生: " + error);
        });
}

function onLogoutBtn()
{
    ncmb.User.logout();
    alert('ログアウト成功');
    currentLoginUser = null;
    $.mobile.changePage('#LoginPage');
}
