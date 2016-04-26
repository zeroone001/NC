/**
 * Created by smzdm on 16/4/26.
 */
//爬取CNode社区数据，设计实现
<% if(items){ %>
<div class="ui divider"></div>
        <% var itemLen = items.length; %>
<% items.forEach(function(item, index) {%>
        <div class="item">
            <a class="ui image" href="https://cnodejs.org/user/<%= item.name %>"><img src="<%= item.imgsrc %>" title="<%= item.name %>"></a>
            <div class="content">
            <a class="header" href="https://cnodejs.org<%= item.link %>"><%= item.title %></a>
            <p class="topic"><a href="https://cnodejs.org/user/<%= item.name %>"><b><%= item.name %></b></a> 发起了话题 • <%= item.pv %>次浏览 • <%= item.comment %>个回复 • <%= item.last_time %> • <% item.tab %></p>
        </div>
        </div>
        <% if (itemLen > index + 1) { %>
        <div class="ui divider"></div>
                <% } %>
        <% }); %>
<% } %>