---
description: Playwright介紹與爬蟲教學
---

# Playwright介紹與爬蟲教學

本篇重點分為兩個部分，

第一部分介紹playwright與基本操作，

第二部分分享如何進行PTT爬蟲，

再來就是一些細節部分。

## Playwright介紹

Playwright 是微軟開發的 web 自動化測試工具，它有幾項特性：

*  跨平台
     * Windows
     * Linux
     * macOS 
*  跨瀏覽器
     * Chromium
     * WebKit 
     * Firefox
* 跨語言
    * NodeJs
    * Python
    * .NET
    * JAVA

接下來以下都會使用.NET進行操作演示

## 創建專案

1. 創建專案

    使用.NET CLI進行操作，

    可以參考[官方文件](https://playwright.dev/dotnet/docs/library)的Usage部分進行複製並更改一些地方，

    更改第十行，改為正在使用的.net版本

    ```bash{10}
    # 創建專案
    dotnet new console -n PlaywrightDemo
    cd PlaywrightDemo

    # 添加 Playwright 套件依賴
    dotnet add package Microsoft.Playwright
    # 建置專案
    dotnet build
    # 安裝 playwright 所需的瀏覽器資源，它默認不是吃自己的瀏覽器
    pwsh bin/Debug/net6.0/playwright.ps1 install
    ```
2. 撰寫程式碼
   
    開啟 **Program.cs** 並貼上以下程式碼

    ```csharp
    using Microsoft.Playwright;
    // 創建一個 Playwright 的 Instance
    using var playwright = await Playwright.CreateAsync();
    // 取得一個 Browser 的 Instance
    await using var browser = await playwright.Chromium.LaunchAsync();
    // 取得一個Page 的 Instance
    var page = await browser.NewPageAsync();
    // 前往 https://playwright.dev/dotnet 這個網頁
    await page.GotoAsync("https://playwright.dev/dotnet");
    //截圖當前畫面
    await page.ScreenshotAsync(new()
    {
        Path = "screenshot.png"
    });
    ```
3. 執行程式

    ```bash
    dotnet run
    ```
4. 觀看結果

    可以看到資料夾內有 **screenshot.png** 這張截圖就代表成功囉!


## PTT爬蟲

1. 先找一篇文章

    這次我找[這篇](https://www.ptt.cc/bbs/BeautySalon/M.1654351685.A.0B7.html)當範例

2. 更改程式碼

    ```csharp
    using Microsoft.Playwright;
    // 創建一個 Playwright 的 Instance
    using var playwright = await Playwright.CreateAsync();
    // 取得一個 Browser 的 Instance
    await using var browser = await playwright.Chromium.LaunchAsync();
    // 取得一個Page 的 Instance
    var page = await browser.NewPageAsync();
    // 前往 https://www.ptt.cc/bbs/BeautySalon/M.1654351685.A.0B7.html 這個網頁
    await page.GotoAsync("https://www.ptt.cc/bbs/BeautySalon/M.1654351685.A.0B7.html");
    // 搭配css selector 取得 html 內的 text
    var html = await page.InnerTextAsync("#main-content");
    // 顯示結果
    Console.WriteLine(html);
    ```
3. 執行程式

    ```bash
    dotnet run
    ```
4. 觀看結果

    就可以看到捕獲的文字囉~

## 執行 Javascript 語法

1. 語法 :
   
    ```csharp
    await page.EvaluateAsync();
    ```
    會返回 ```JsonElement``` 的物件

2. 用法 :

    可以把上面撈取 Text 的語法改寫成下列這行，再進行爬取

    ```csharp
    var html = await page.EvaluateAsync("document.querySelector('#main-content').innerText");
    ```

    也一樣可以返回 ```innerText``` 的結果。

3. **navigator.webdriver** 設置 :

    有些網站會進行 ```navigator.webdriver``` 的偵測阻擋，
    就可以用 EvaluateAsync 語法進行隱蔽

     ```csharp
    await page.EvaluateAsync("Object.defineProperty (navigator, 'webdriver', {get: () => false})");
    ```

    就可以看到 ```navigator.webdriver``` 從 ```true``` 改為 ```false```

## 參考文獻
<https://blog.miniasp.com/post/2021/09/12/Writing-E2E-Testing-using-Playwright-for-NET>
<https://dotblogs.com.tw/supershowwei/2021/11/07/234421>
<https://github.com/microsoft/playwright-python/issues/527>