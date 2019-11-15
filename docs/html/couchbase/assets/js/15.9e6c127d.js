(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{187:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters","aria-hidden":"true"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[e._v('The Couchbase deployment package contains a sequence software (referred to as "components") required for Couchbase to run. The important information such as the component name, installation directory path, configuration file path, port, version, etc. are listed below.')]),e._v(" "),a("h2",{attrs:{id:"path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path","aria-hidden":"true"}},[e._v("#")]),e._v(" Path")]),e._v(" "),a("h3",{attrs:{id:"couchbase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#couchbase","aria-hidden":"true"}},[e._v("#")]),e._v(" Couchbase")]),e._v(" "),a("p",[e._v("Couchbase Server installation directory: "),a("em",[e._v("/opt/couchbase")]),a("br"),e._v("\nCouchbase Server configuration file: "),a("em",[e._v("/opt/couchbase/etc/couchbase/static_config")]),a("br"),e._v("\nCouchbase Server data directory: "),a("em",[e._v("/opt/couchbase/var/lib/couchbase")]),a("br"),e._v("\nCouchbase Server logs file: "),a("em",[e._v("/opt/couchbase/var/lib/couchbase/logs")])]),e._v(" "),a("h3",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[e._v("#")]),e._v(" Nginx")]),e._v(" "),a("p",[e._v("Nginx vhost configuration file: "),a("em",[e._v("/etc/nginx/conf.d/default.conf")]),a("br"),e._v("\nNginx main configuration file: "),a("em",[e._v("/etc/nginx/nginx.conf")]),a("br"),e._v("\nNginx logs file: "),a("em",[e._v("/var/log/nginx/")])]),e._v(" "),a("h2",{attrs:{id:"ports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ports","aria-hidden":"true"}},[e._v("#")]),e._v(" Ports")]),e._v(" "),a("p",[e._v("These Ports is need when use Couchbase, refer to "),a("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Safe Group Setting on Cloud Console"),a("OutboundLink")],1)]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Number")]),e._v(" "),a("th",[e._v("Use")]),e._v(" "),a("th",[e._v("Necessity")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("HTTP")]),e._v(" "),a("td",[e._v("80")]),e._v(" "),a("td",[e._v("HTTP requests for Couchbase by Nginx proxy")]),e._v(" "),a("td",[e._v("Required")])]),e._v(" "),a("tr",[a("td",[e._v("HTTPS")]),e._v(" "),a("td",[e._v("443")]),e._v(" "),a("td",[e._v("HTTPS requests Couchbase by Nginx proxy")]),e._v(" "),a("td",[e._v("Optional")])]),e._v(" "),a("tr",[a("td",[e._v("Couchbase")]),e._v(" "),a("td",[e._v("8091")]),e._v(" "),a("td",[e._v("Remote connect Couchbase")]),e._v(" "),a("td",[e._v("Optional")])])])]),e._v(" "),a("h2",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version","aria-hidden":"true"}},[e._v("#")]),e._v(" Version")]),e._v(" "),a("p",[e._v("You can see the version from product page of Marketplace. However, after being deployed to your server, the components will be automatically updated, resulting in a certain change in the version number. Therefore, the exact version number should be viewed by running the command on the server:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Nginx version:\nnginx -v\n")])])])])},[],!1,null,null,null);t.default=o.exports}}]);