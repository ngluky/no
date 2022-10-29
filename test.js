window.Ath = '';
window.IsLogin = false;
function LoginIn(name, pass) {
    window.IsLogin = false;
    Service.call(function (result) {
        console.log(result);
        var data = result.Data;
        if (data.get('Error')) {
            window.IsLogin = false;
        }
        else {
            window.Ath = data.get('location')
            console.log(data.get('location'))
            window.IsLogin = true;
        }
        window.IsLogin = true;
    }, DLL, 'VietSchoolCheckLogin', name, pass, '', '', '2');

}


