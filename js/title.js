//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '(っ °Д °;)っ记得会来哟~';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = 'ヾ(≧▽≦*)o欢迎回来～';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = 'Zpetrichor🍂';
    }, 2000);
  }
});