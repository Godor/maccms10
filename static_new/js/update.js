(function () {
  var html = `<table class="tbinfo pleft layui-table">
    <thead>
      <tr>
        <th colspan="4">更新提示</th>
      </tr>
    </thead>
    <tr>
      <td colspan="4"><font class="tit s20">在线更新已禁用，请使用本地部署。</font></td>
    </tr>
  </table>`;

  $("body").append("<style>.tit{color:#1E9FFF;}.s20{font-size:20px;}</style>");
  $("table:last").after(html);
})();
