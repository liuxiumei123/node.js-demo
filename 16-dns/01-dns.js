#!/usr/bin/node

var dns=require('dns');
var ns=process.argv[2];

dns.lookup(ns,function(err,addr){
  console.log(addr);
})
