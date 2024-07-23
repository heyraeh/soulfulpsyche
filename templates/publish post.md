---
title: <% tp.date.now("YYYY MMM DD") %>
description: 
date: <% tp.file.creation_date('YYYY MMM DD') %>
tags: []
draft: false
---
<% tp.file.rename(tp.date.now("YYYY-MMM-DD") + " note") %>