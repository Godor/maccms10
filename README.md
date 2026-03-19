# MacCMS 10 Ultra

`MacCMS 10 Ultra` 是基于苹果 CMS v10（`v2025.1000.4052`）的二开版本，底层仍为 `ThinkPHP 5.x`。已移除原版广告植入脚本，并关闭在线更新、插件市场请求等相关外部请求。

一套跑在 `PHP + MySQL` 上的内容建站程序，适合做影视、漫画、资讯等站点。程序自带采集、搜索、会员、评论、付费、模板切换、播放器配置等常用功能，同时支持插件扩展，适合直接搭站。

## 技术基线

- PHP：建议 `7.4`
- MySQL：支持 `5.7 / 8.0+`
- 运行方式：`PHP + MySQL + Nginx/Apache/IIS`

### 建议开启的 PHP 扩展

- `pdo`
- `pdo_mysql`
- `curl`
- `mbstring`
- `xml`（含 `simplexml` / `libxml`）
- `zip`
- `fileinfo`
- `gd`
- `iconv`

### 按需开启

- `openssl`、`sockets`（邮件发送）
- `ftp`（FTP 存储）
- `redis` / `memcached`（对应缓存模式）

---

## English Version

`MacCMS 10 Ultra` is a secondary development edition based on Apple CMS v10 (`v2025.1000.4052`), and it still runs on `ThinkPHP 5.x`. The original ad-injection scripts have been removed, and online updates, plugin marketplace requests, and other related external requests have been disabled.

It is a content site builder running on `PHP + MySQL`, suitable for film and TV, comics, news, and similar content sites. It includes built-in features such as content collection, search, membership, comments, paid access, template switching, player configuration, and plugin extension support, making it suitable for direct deployment.

## Technical Baseline

- PHP: `7.4` recommended
- MySQL: supports `5.7 / 8.0+`
- Runtime: `PHP + MySQL + Nginx/Apache/IIS`

### Recommended PHP Extensions

- `pdo`
- `pdo_mysql`
- `curl`
- `mbstring`
- `xml` (including `simplexml` / `libxml`)
- `zip`
- `fileinfo`
- `gd`
- `iconv`

### Optional Extensions

- `openssl`, `sockets` (for email delivery)
- `ftp` (for FTP storage)
- `redis` / `memcached` (for the corresponding cache drivers)
