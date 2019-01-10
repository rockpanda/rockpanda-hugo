window.onload=function () { 
    document.getElementById('TableOfContents').addEventListener("mouseover", function () {
        document.getElementById('TableOfContents').setAttribute('style','background: #fff;height: max-content;max-height: 600px;top: 92px;right: 40px;width: 350px;bottom: 1px;overflow-y: scroll;border-radius: 4px;box-shadow: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);')
      });
      document.getElementById("TableOfContents").addEventListener("mouseout", function () { 
        document.getElementById('TableOfContents').setAttribute('style','position: fixed;z-index: 9999;height: 40px;width: 41px;top: 160px;right: 60px;overflow: hidden;background-size: 40px 40px;text-indent: 0px;background-position: center center;border-radius: 20px;box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);font-family: "Microsoft YaHei" !important;font-weight: 500 !important;')
       });
 }