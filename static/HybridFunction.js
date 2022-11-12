function View_Today_SchoolMeal() {
    var IorA = navigator.userAgent.toLowerCase();

    try {
        if(IorA.indexOf("android") !== -1){
            Android.VTS(value);
        }
        else {//if(IorA.indexOf("iphone") !== -1){
            window.webkit.messageHandlers.VTS(value);
        }
    } catch (e) {
        Notiflix.Report.init({
            backOverlayClickToClose: true,
        });
        Notiflix.Report.failure(
            '오류',
            "<plaintext><p>해당 기능은 \"김해제일고 Smart Center 앱\"에서만 사용가능합니다!<br>아래의 \"확인\"을 누르면 다운로드 패이지로 이동합니다!</p></plaintext>",
            '확인',
            () => {
                IorA = navigator.vendor;

                if(IorA.indexOf("Apple Computer") > -1) {
                    window.location.href = 'https://apps.apple.com/us/app/%EA%B9%80%ED%95%B4%EC%A0%9C%EC%9D%BC%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90-smart-center/id1603759752';
                }
                else {
                    window.location.href='https://play.google.com/store/apps/details?id=com.makerksh.gjh_smart_center';
                }
            });
    }
}